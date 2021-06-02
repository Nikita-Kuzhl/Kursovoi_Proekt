import React, { Component } from 'react'
import Iframe from 'react-iframe'
// class Map extends Component {
//     return(
//         <Iframe></Iframe>
//     )
// } 
const Contact = () => {
    return (
        <div className = "upper-content">
            <div className = "rectangle"></div>
            <div className = "map">
            <Iframe  src="https://yandex.ru/map-widget/v1/?um=constructor%3A83b0c2ccd289bc46d7aaa59d7d4d708387a12762555f97e770e3efd7bcdcb389"
                width="500"
                height="400"
                scroll="true">
            </Iframe>
            </div>
            <div className = "frame-text-time-work">
                <h1>Режим работы<br/>Будни: 8:00-23:00<br/>Выходные: 8:00-20:00</h1>
            </div>
        </div>
    )
}
export default Contact