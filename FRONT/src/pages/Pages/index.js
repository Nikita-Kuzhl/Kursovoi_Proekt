import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import Header from "../../comp/Header"
import Uppercont from "../../comp/UpperContent"
import Lowercont from "../../comp/Lower-content"
import Footer from "../../comp/Footer"
import Contact from "../../comp/UpperContact"
import Uslugi from "../../comp/UpperUslugi"
import Modal from "../../modal/Modal"
import Input from "../../utils/input"
import {registration,loginin, roles} from "../../actions/act/user"
import KabCont from '../../comp/ContentKab'

 export const Default = (props) => {
  const [modal,setModal] = useState({
    modal1: false,
    modal2: false
  })

  const [isAuth,setIsAuth] = useState(localStorage.getItem('token')?true:false)
  const [login,setLogin] = useState("")
  const [pass,setPass] = useState("")
  const [FCS,setFCS] = useState("")
  const [telephone,setTelephone] = useState("")
  const token = localStorage.getItem('token',token)



useEffect(()=>{
  setIsAuth(localStorage.getItem('token')?true:false)
},[localStorage.getItem('token')])


const handleSignInClick = async() =>{
  const data = await loginin(login,pass)
  if(data.status === 200){
    setModal({ modal1: false,
      modal2: false})
      setIsAuth(true)
  }
}
const handleLogOuClick = async() => {
  const item = localStorage.length
  if(item === 2){
    localStorage.removeItem('token')
    setModal({ modal1: false,
      modal2: false})
      setIsAuth(true)

  }
}



    return(
        <div className="App">
            
            {!isAuth ? <>
              <Header/>
              <div  type ='button' className = "button-auth" onClick ={() => setModal({
                  ...modal, modal1 : true
                  })}>
                    <h2>Авторизация</h2>
              </div>
              <div type ='button' className = "button-reg"    onClick ={() => setModal({
                  ...modal, modal2 : true
                  })}>
                  <h2>Регистрация</h2>
            </div></>:   
               
              <div>
                <div className='Header'>
                <NavLink to="/"><div className="logo-upper"></div></NavLink>
                <div className="str-o-nas-button">
                <h1><NavLink to='/contact'>О нас</NavLink></h1>
            </div>

                  <NavLink to="/profile">
                    <div type ='button' className = "button-auth" onClick = {()=> roles()}>
                      <h2>Личный кабинет</h2>
                    </div>
                  </NavLink>
                  <div className = "str-usl-button">
            <h1><NavLink to='/uslugi'>Услуги</NavLink></h1>
          </div>

              <div  type ='button' className = "button-reg" onClick ={handleLogOuClick}>
                    <h2>Выход</h2>
              </div>
              

              </div>
              </div>
              }
            
            <Uppercont/>
            <Lowercont/>
            <Footer/>
            <Modal
            title = {`Авторизация`}
            isOpened = {modal.modal1}
            onModalClose = {()=> setModal({...modal, modal1: false})}
            >
              <div className="tra">
                <h5>Логин</h5>
                <Input value = {login} setValue = {setLogin} type="text"  />
                <h5>Пароль</h5>
                <Input value = {pass} setValue = {setPass} type="text"  type="password" type="text"   />
              </div>    
              <div className = "model__buttton">
                <input type="submit"  onClick={handleSignInClick} value="Войти" />
              </div>
            </Modal>
            <Modal
            title = {`Регистрация`}
            isOpened = {modal.modal2}
            onModalClose = {()=> setModal({...modal, modal2: false})}
            >
              <div className="tra">
                <h5>Логин</h5>
                <Input value = {login} setValue = {setLogin} type="text"  />
                <h5>Пароль</h5>
                <Input  value = {pass} setValue = {setPass} type="text"  type="password" />
                <h5>Телефон</h5>
                <Input value = {telephone} setValue = {setTelephone} />
                <h5>ФИО</h5>
                <Input value = {FCS} setValue = {setFCS} type="text" placeholder="Не обязательно"  />
              </div>    
              <div className = "model__buttton">
                <input  type="submit" onClick={() => registration(login,pass,telephone,FCS)} value="Зарегистрироваться" />
              </div>
            </Modal>
        </div>
    )
  }
  export const ContactStr = () =>{
    const [modal,setModal] = useState({
      modal1: false,
      modal2: false
    })
  
    const [isAuth,setIsAuth] = useState(localStorage.getItem('token')?true:false)
    const [login,setLogin] = useState("")
    const [pass,setPass] = useState("")
    const [FCS,setFCS] = useState("")
    const [telephone,setTelephone] = useState("")
  
  
  
  useEffect(()=>{
    setIsAuth(localStorage.getItem('token')?true:false)
  },[localStorage.getItem('token')])
  
  const handleSignInClick = async() =>{
    const data = await loginin(login,pass)
    if(data.status === 200){
      setModal({ modal1: false,
        modal2: false})
        setIsAuth(true)
    }
  }
  const handleLogOuClick = async() => {
    const item = localStorage.length
    if(item === 2){
      localStorage.removeItem('token')
      setModal({ modal1: false,
        modal2: false})
        setIsAuth(true)
  
    }
  }
  
  
  
  
      return(
        <div className="App">
            <Header/>
            {!isAuth ? <>
              <div  type ='button' className = "button-auth" onClick ={() => setModal({
                  ...modal, modal1 : true
                  })}>
                    <h2>Авторизация</h2>
              </div>
              <div type ='button' className = "button-reg"    onClick ={() => setModal({
                  ...modal, modal2 : true
                  })}>
                  <h2>Регистрация</h2>
            </div></>:       
              <div>
              <div className='Header'>
              <NavLink to="/"><div className="logo-upper"></div></NavLink>
              <div className="str-o-nas-button">
              <h1><NavLink to='/contact'>О нас</NavLink></h1>
          </div>
          <div className = "str-usl-button">
            <h1><NavLink to='/uslugi'>Услуги</NavLink></h1>
          </div>
                <NavLink to="/profile">
                  <div type ='button' className = "button-auth" onClick = {()=> roles()}>
                    <h2>Личный кабинет</h2>
                  </div>
                </NavLink>
            <div  type ='button' className = "button-reg" onClick ={handleLogOuClick}>
                  <h2>Выход</h2>
            </div>
            

            </div>
            </div>
              }
            
              <Contact/>
              <Lowercont/>
              <Footer/>
              <Modal
              title = {`Авторизация`}
              isOpened = {modal.modal1}
              onModalClose = {()=> setModal({...modal, modal1: false})}
              >
                <div className="tra">
                  <h5>Логин</h5>
                  <Input value = {login} setValue = {setLogin} type="text"  />
                  <h5>Пароль</h5>
                  <Input value = {pass} setValue = {setPass} type="text"  type="password" type="text"   />
                </div>    
                <div className = "model__buttton">
                  <input type="submit"  onClick={handleSignInClick} value="Войти" />
                </div>
              </Modal>
              <Modal
              title = {`Регистрация`}
              isOpened = {modal.modal2}
              onModalClose = {()=> setModal({...modal, modal2: false})}
              >
                <div className="tra">
                  <h5>Логин</h5>
                  <Input value = {login} setValue = {setLogin} type="text"  />
                  <h5>Пароль</h5>
                  <Input  value = {pass} setValue = {setPass} type="text"  type="password" />
                  <h5>Телефон</h5>
                  <Input value = {telephone} setValue = {setTelephone} />
                  <h5>ФИО</h5>
                  <Input value = {FCS} setValue = {setFCS} type="text" placeholder="Не обязательно"  />
                </div>    
                <div className = "model__buttton">
                  <input  type="submit" onClick={() => registration(login,pass,telephone,FCS)} value="Зарегистрироваться" />
                </div>
              </Modal>
          </div>
      )
    }
    
    

  
  export const UslugiStr = () =>{
    const [modal,setModal] = useState({
      modal1: false,
      modal2: false
    })
  
    const [isAuth,setIsAuth] = useState(localStorage.getItem('token')?true:false)
    const [login,setLogin] = useState("")
    const [pass,setPass] = useState("")
    const [FCS,setFCS] = useState("")
    const [telephone,setTelephone] = useState("")
  
  
  
  useEffect(()=>{
    setIsAuth(localStorage.getItem('token')?true:false)
  },[localStorage.getItem('token')])
  
  const handleSignInClick = async() =>{
    const data = await loginin(login,pass)
    if(data.status === 200){
      setModal({ modal1: false,
        modal2: false})
        setIsAuth(true)
    }
  }
  const handleLogOuClick = async() => {
    const item = localStorage.length
    if(item === 2){
      localStorage.removeItem('token')
      setModal({ modal1: false,
        modal2: false})
        setIsAuth(true)
  
    }
  }

  
  
  
      return(
          <div className="App">
              <Header/>
              {!isAuth ? <>
              <div  type ='button' className = "button-auth" onClick ={() => setModal({
                  ...modal, modal1 : true
                  })}>
                    <h2>Авторизация</h2>
              </div>
              <div type ='button' className = "button-reg"    onClick ={() => setModal({
                  ...modal, modal2 : true
                  })}>
                  <h2>Регистрация</h2>
            </div></>:       
              <div>
              <div className='Header'>
              <NavLink to="/"><div className="logo-upper"></div></NavLink>
              <div className="str-o-nas-button">
              <h1><NavLink to='/contact'>О нас</NavLink></h1>
          </div>

                <NavLink to="/profile">
                  <div type ='button' className = "button-auth" onClick = {()=> roles()}>
                    <h2>Личный кабинет</h2>
                  </div>
                </NavLink>
            <div  type ='button' className = "button-reg" onClick ={handleLogOuClick}>
                  <h2>Выход</h2>
            </div>
            

            </div>
            </div>
                }
              
              <Uslugi/>
              <Footer/>
              <Modal
              title = {`Авторизация`}
              isOpened = {modal.modal1}
              onModalClose = {()=> setModal({...modal, modal1: false})}
              >
                <div className="tra">
                  <h5>Логин</h5>
                  <Input value = {login} setValue = {setLogin} type="text"  />
                  <h5>Пароль</h5>
                  <Input value = {pass} setValue = {setPass} type="text"  type="password" type="text"   />
                </div>    
                <div className = "model__buttton">
                  <input type="submit"  onClick={handleSignInClick} value="Войти" />
                </div>
              </Modal>
              <Modal
              title = {`Регистрация`}
              isOpened = {modal.modal2}
              onModalClose = {()=> setModal({...modal, modal2: false})}
              >
                <div className="tra">
                  <h5>Логин</h5>
                  <Input value = {login} setValue = {setLogin} type="text"  />
                  <h5>Пароль</h5>
                  <Input  value = {pass} setValue = {setPass} type="text"  type="password" />
                  <h5>Телефон</h5>
                  <Input value = {telephone} setValue = {setTelephone} />
                  <h5>ФИО</h5>
                  <Input value = {FCS} setValue = {setFCS} type="text" placeholder="Не обязательно"  />
                </div>    
                <div className = "model__buttton">
                  <input  type="submit" onClick={() => registration(login,pass,telephone,FCS)} value="Зарегистрироваться" />
                </div>
              </Modal>
          </div>
      )
    }

  export const KabStr = () =>{
    const [modal,setModal] = useState({
      modal1: false,
      modal2: false
    })
  
    const [isAuth,setIsAuth] = useState(localStorage.getItem('token')?true:false)
    const [login,setLogin] = useState("")
    const [pass,setPass] = useState("")
    const [FCS,setFCS] = useState("")
    const [telephone,setTelephone] = useState("")
  
  
  
  useEffect(()=>{
    setIsAuth(localStorage.getItem('token')?true:false)
  },[localStorage.getItem('token')])
  
  const handleSignInClick = async() =>{
    const data = await loginin(login,pass)
    if(data.status === 200){
      setModal({ modal1: false,
        modal2: false})
        setIsAuth(true)
    }
  }
  const handleLogOuClick = async() => {
    const item = localStorage.length
    if(item === 2){
      localStorage.removeItem('token')
      setModal({ modal1: false,
        modal2: false})
        setIsAuth(true)
  
    }
  }
  
  
  
  
      return(
          <div className="App">
              <Header/>
              {!isAuth ? <>
                <div  type ='button' className = "button-auth" onClick ={() => setModal({
                    ...modal, modal1 : true
                    })}>
                      <h2>Авторизация</h2>
                </div>
                <div type ='button' className = "button-reg"    onClick ={() => setModal({
                    ...modal, modal2 : true
                    })}>
                    <h2>Регистрация</h2>
              </div></>:              <div>
                <div className='Header'>
                <div className = "str-usl-button">
            <h1><NavLink to='/uslugi'>Услуги</NavLink></h1>
          </div>
                <NavLink to="/"><div className="logo-upper"></div></NavLink>
                <div className="str-o-nas-button">
                <h1><NavLink to='/contact'>О нас</NavLink></h1>
            </div>
              <NavLink to='/'>
              <div  type ='button' className = "button-reg" onClick ={handleLogOuClick}>
                    <h2>Выход</h2>
              </div>
              </NavLink>

              </div>
              </div>}
              <KabCont/>
              <Footer/>
              <Modal
              title = {`Авторизация`}
              isOpened = {modal.modal1}
              onModalClose = {()=> setModal({...modal, modal1: false})}
              >
                <div className="tra">
                  <h5>Логин</h5>
                  <Input value = {login} setValue = {setLogin} type="text"  />
                  <h5>Пароль</h5>
                  <Input value = {pass} setValue = {setPass} type="text"  type="password" type="text"   />
                </div>    
                <div className = "model__buttton">
                  <input type="submit"  onClick={handleSignInClick} value="Войти" />
                </div>
              </Modal>
              <Modal
              title = {`Регистрация`}
              isOpened = {modal.modal2}
              onModalClose = {()=> setModal({...modal, modal2: false})}
              >
                <div className="tra">
                  <h5>Логин</h5>
                  <Input value = {login} setValue = {setLogin} type="text"  />
                  <h5>Пароль</h5>
                  <Input  value = {pass} setValue = {setPass} type="text"  type="password" />
                  <h5>Телефон</h5>
                  <Input value = {telephone} setValue = {setTelephone} />
                  <h5>ФИО</h5>
                  <Input value = {FCS} setValue = {setFCS} type="text" placeholder="Не обязательно"  />
                </div>    
                <div className = "model__buttton">
                  <input  type="submit" onClick={() => registration(login,pass,telephone,FCS)} value="Зарегистрироваться" />
                </div>
              </Modal>
          </div>
      )
    }