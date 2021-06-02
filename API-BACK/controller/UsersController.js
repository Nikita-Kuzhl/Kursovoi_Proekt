'use strict'

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {LocalStorage} = require('node-localstorage')
const moment = require('moment')
const response = require('../response')
const db = require('../settings/db')
const config = require('../config')
const passport = require('passport')


// const decodedToken = require('../middleware/decoded')


exports.signup = (req,res) => {
    db.query("SELECT `id`,`login`,`role` from `users` WHERE `login` = '"+ req.body.login +"'",(error,rows,fields) => {
        if(error) {
            response.status(400, error, res)
        } else if(typeof rows !== 'undefined' && rows.length > 0) {
            const row = JSON.parse(JSON.stringify(rows))
            row.map(rw => {
                response.status(302, {message: `Пользователь с таким login - ${rw.login} уже зарегeстрирован!`}, res)
                return true
            })
        }else{
            const login = req.body.login 
            const salt = bcrypt.genSaltSync(15)
            const pass = bcrypt.hashSync(req.body.pass, salt)
            const FCS = req.body.FCS !=='' ? req.body.FCS : 'Не указано'
            const telephone = req.body.telephone !== '' ? req.body.telephone: 'Не указано'

            const sql = "INSERT INTO `users`(`login`, `pass`,`FCS`,`telephone`) VALUES('"+ login+"','"+ pass+"','"+FCS+"','"+telephone+"')";
            db.query(sql,(error,result) => {
                if(error){
                    response.status(400,error,res);
                }else {
                    response.status(200,{message:`Регистрация прошла успешна`,result},res)
                }
            })

        }
    })
}
exports.signin = (req, res) => {
    
    db.query("SELECT `id`, `login`, `pass`,`role` from `users` WHERE `login` = '"+req.body.login+"'",(error,rows,fields) =>{
        if(error){
            response.status(400,error,res)
        }else if(rows.length <= 0){
            response.status(401,{message:`Пользователь с login - ${req.body.login} не найден, пройдите регистрацию`},res)
        } else{
            const row = JSON.parse(JSON.stringify(rows))
            row.map(rw =>{
                const pass = bcrypt.compareSync(req.body.pass, rw.pass)
                if(pass){
                    //если тру генерируем токен
                        const token = jwt.sign({
                            userId: rw.id,
                            login: rw.login,
                            role: rw.role
                        }, config.jwt, { expiresIn: 120 * 120 })
    
                        response.status(200, {token: `Bearer ${token}`}, res)
                }else{
                   //ошибка
                   response.status(401,{message:`Пароль не верный`},res) 
                }
                return true
            })
        }        
    })
}

exports.roles = (req,res) => {
    // const token = localStorage.getItem('token', token)
    const token = req.headers.authorization.split(' ')[1]
    if(!token) {
        response.status(401,{message:`Вы не авторизованы`},res)
    }else{
        const decodedData = jwt.verify(token,config.jwt)
        if(decodedData.role === 'Admin'){
            db.query("SELECT `id`,`login`,`role` FROM `users` ",(error,rows,fields) => {
                if(error) {
                    response.status(400,error,res)
                }else{
                    response.status(200,rows,res)
                }
        })
        }else if(decodedData.role === 'Staff'){
            db.query("select users.id,specialty.id, users.FCS, users.Telephone,`name_speciality`,`discharge`,`Date_of_receipt`,Price,types_work FROM specialty LEFT JOIN staff ON staff.id = specialty.id_staff LEFT JOIN users ON users.id = staff.user_id LEFT JOIN  orders ON staff.id=orders.id_staff LEFT JOIN types_of_work ON orders.id_types_work = types_of_work.id WHERE users.id =  '"+decodedData.userId+"'",(error,rows,fields) => {
                if(error) {
                    response.status(400,error,res)
                }else{
                    response.status(200,rows,res)
                }})
        }else if(decodedData.role === 'Owners'){
            db.query(" select users.id,users.FCS,users.Telephone,brand,`registration_mark`,Color,`Year_of_release`,`Date_of_receipt`,Price,types_work from car left join owners ON owners.id = car.owner_id left join users ON users.id = owners.user_id LEFT JOIN orders ON users.id = orders.User_id LEFT JOIN types_of_work ON orders.id_types_work = types_of_work.id  WHERE users.id = '"+decodedData.userId+"'",(error,rows,fields) => {
                if(error) {
                    response.status(400,error,res)
                }else{
                    response.status(200,rows,res)
                }})
        }
    }
}





exports.GetAll = (req,res) => {
    db.query("SELECT `id`,`login`,`role` FROM `users` ",(error,rows,fields) => {
        if(error) {
            response.status(400,error,res)
        }else{
            response.status(200,rows,res)
        }
})}

exports.Uslug = (req,res) => {
    db.query("select*from types_of_work",(error,rows,fields) => {
        if(error){
            response.status(400,error,res)
        }else{
            response.status(200,rows,res)
        }
    })
}
exports.UslugOwn = (req,res) => {
    const token = req.headers.authorization.split(' ')[1]
    const decodedData = jwt.verify(token,config.jwt)
    const date = moment(req.body.Date_of_receipt).format("YYYY-MM-DD hh:mm:ssZ ")
    const user = decodedData.userId
    const work = req.body.id
    const sql = ("insert into orders(Date_of_receipt,user_id,id_types_work) values('"+ date+"','"+ user+"','"+ work+"')")
        db.query(sql,(error,result) => {
            if(error){
                response.status(400,error,res);
            }else {
                response.status(200,{message:`Вы добавили услугу`,result},res)
            }
        })
    }