import React, {useEffect, useState} from 'react'
import {dataT,addUs} from '../../actions/act/user'
import Modal from "../../modal/Modal"
import Input from "../../utils/input"

const Uslugi = () => {

    const [data,setData] = useState([])
    const [time,setTime] = useState(' ')

    const [modal,setModal] = useState({
        modal3: false,
        id_type:0
      })

    useEffect(async()=>{
    setData(await dataT())
    },[data.length])


    
const handleOnClick = async() =>{
   await addUs(modal.id_type,time)
}

    return (
        <div className = "upper-content">
        <table className = "table-u">
            <thead>
            <tr><th>Вид работы</th><th>Стоимость</th><th>Добавить услугу</th></tr>
            {data.map(item=>
            <tr><td>{item.types_work}</td><td>{item.price}</td><td><button onClick ={() => setModal({
                ...modal, modal3 : true, id_type:item.id
                })}/></td></tr>    
            )}

            </thead>          
        </table>
        <Modal
            title = {`Добавить услугу`}
            isOpened = {modal.modal3}
            onModalClose = {()=> setModal({...modal, modal3: false})}
        >
        <div className="tra">
            <h5>Введите время пребытия</h5>
            <Input  type="text" value = {time} setValue = {setTime} type="datetime-local" />
        </div>
        <div className = "model__buttton">
                <input type="submit"   value="Добавить" onClick={()=>handleOnClick()}/>
        </div>
        </Modal>
    </div>
    )
}
export default Uslugi