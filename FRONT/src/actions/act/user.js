import axios from 'axios'


export const registration = async (login,pass,telephone,FCS) => {
    try {
        const response = await axios.post(`http://localhost:8080/auth/signup`, {
            login,
            pass,
            telephone,
            FCS
        })
        alert(response.data.values.message)
    } catch (e) {
        alert(e.response.data.values.message)
    }

}

export const loginin = async (login,pass) => {
    try {
        const response = await axios.post(`http://localhost:8080/auth/signin`, {
            login,
            pass,
        })
        localStorage.setItem('token',response.data.values.token)
        return response
    } catch (e) {
        alert(e.response.data.values.message)
        return true
      }
    }
export const roles = async () => {
    try{
        const token = localStorage.getItem('token')
        const response = await axios.post(`http://localhost:8080/roles`, null,{
            headers:{"Authorization" : token  }})
            return response.data.values
        
        
    }catch(e){
        alert (e.response.data.status)
        
    }
}
export const dataT = async () => {
        
       const res =  await axios.get(`http://localhost:8080/uslugi`).then(function (response) {
            // handle success
            
            return response.data.values
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });

        
          return res

}
export const addUs = async (id,time) => {
    try{
        const token = localStorage.getItem('token')
    const response  = await axios.post(`http://localhost:8080/uslugi`,{
        id,
        time
    },{headers:{"Authorization" : token  }})
    
    alert(response.data.values.message)
} catch (e) {
    alert(e.response.data.status)
}
} 



