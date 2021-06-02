'use strict'

module.exports = (app) => {

    const usersController = require('../controller/UsersController')

    const passport = require('passport')

    
    app
        .route('/auth/signup')
        .post(usersController.signup)

    app 
        .route('/auth/signin')
        .post(usersController.signin)
    
    app
        .route('/getall')
        .get(usersController.GetAll)
    app
        .route('/roles')
        .post(passport.authenticate('jwt',{session:false}),usersController.roles)
    app
        .route('/uslugi')
        .get(usersController.Uslug)
    app
        .route('/uslugi')
        .post(passport.authenticate('jwt',{session:false}),usersController.UslugOwn)
}