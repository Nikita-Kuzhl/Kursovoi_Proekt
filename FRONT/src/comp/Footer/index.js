import React from 'react'
import {NavLink} from 'react-router-dom'

const Footer = () => {
    return (
        <div className = "footer">
            <div className = "logo-lower"></div>
            <div className = "frame-info">
                <div className = "contacts"><h3>Контакты</h3></div>
                <div className = "img-telephone"></div>
                <div className = "telephone"><h3>+7 (9107) 728-560</h3></div>
                <div className = "img-place-map"></div>
                <div className = "place-map"><h3>г.Владимир, ул.Лунатикова, 9 </h3></div>
            </div>
            <div className = "str-link">
                <div className = "str-link-uslugi"><h2><NavLink to='/uslugi'>Услуги</NavLink></h2></div>
                <div className = "str-link-o-nas"><h2><NavLink to='/contact'>О нас</NavLink></h2></div>
            </div>
        </div>
    )
}
export default Footer