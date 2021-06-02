import React, {useEffect, useState} from 'react'
import jwt_decode from "jwt-decode"
import {NavLink} from 'react-router-dom'


const Header = () => {

 
      
    return (
        <div className="Header">
        
                <NavLink to="/"><div className="logo-upper"></div></NavLink>
                <div className="str-o-nas-button">
                <h1><NavLink to='/contact'>О нас</NavLink></h1>
            </div>
        </div>          
        
    )
}
export default Header