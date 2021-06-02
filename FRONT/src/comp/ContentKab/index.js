import React, {useEffect, useState} from 'react'
import jwt_decode from "jwt-decode"
import {roles} from '../../actions/act/user'
import {NavLink} from 'react-router-dom'

const KabCont = () => {
    const token = jwt_decode(localStorage.getItem('token')) 

    const [isRoles,setIsRoles] = useState(token.role==="Owners"?true:false)
    useEffect(()=>{
        setIsRoles((token.role==="Owners"?true:false))
      },[token.role])
    
    const [data,setData] = useState([])
    const cleanTheDate=(dateStr)=>{
      return new Date(dateStr).toISOString().
      replace(/T/, ' ').
      replace(/\..+/, '')
    }

     useEffect(async()=>{
         setData(await roles())
      },[data.length])
    return (
        <div className="upper-content">
        <div className ="img_account"></div>
        {!isRoles ? <>

        {data.map(item=>
          <div className = "frame-text-time-work">
            <h5>ФИО: {item.FCS}</h5>
            <h5>Телефон: {item.Telephone}</h5>
            <h5>Специальность: {item.name_speciality}</h5>
            <h5>Разряд: {item.discharge}</h5>
            </div>
        )}
          </>:<div>
          

          {data.map(item=>
          
        <div className = "frame-text-time-work">
            <h5>ФИО: {item.FCS}</h5>
            <h5>Телефон: {item.Telephone}</h5>
            <h5>Марка машины: {item.brand}</h5>
            <h5>Цвет машины: {item.Color}</h5>
            <h5>Год выпуска: {item.Year_of_release}</h5>
            <h5>Регистрационный знак: {item.registration_mark}</h5>
            

            </div>
            )}

        </div>}
            <table className = "table-acc">
                <thead>
                <tr><th>Дата</th><th>Стоимость</th><th>Вид работы</th></tr>
                {data.map(item=>
                <tr><td>{cleanTheDate(item.Date_of_receipt)}</td><td>{item.Price}</td><td>{item.types_work}</td></tr>    
                )}

                </thead>          
            </table>
        </div>
    )
}
export default KabCont