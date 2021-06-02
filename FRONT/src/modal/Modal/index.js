import React from 'react'
import './model.css'

const Modal = props => {

    return(
        <div className = {`modal_wrapper ${props.isOpened ? 'open' : 'close'}`} style = {{...props.style}}>
            <div className = 'modal_body'>
                <div className = 'modal_close' onClick = {props.onModalClose}>×</div>
                <h3>{props.title}</h3>
                {props.children}
            </div>
        </div>
    )
}
export default Modal