import React, { createContext, useState } from 'react'

export const userContext = createContext({})

export const userContextProvider = ({ children }) => {
    const [ userLogin, setUserLogin ] = useState({ 
        username : undefined,
        password : undefined,
    })
    const [userRegister, setUserRegister] = useState({ 
        username : undefined,
        password : undefined,
        email:undefined,
        phone_number:undefined,
    })
    const [userOnline, setUserOnline] = useState({
        userId : undefined,
        token : undefined,
    })
    const userValue = {
        LoginState : { userLogin, setUserLogin },
        RegisterState : { userRegister, setUserRegister },
        userOnline : { userOnline, setUserOnline}
        
    }
    useEffect(() => {
        if(userOnline.token){
            localStorage.setItem('userId',userOnline.userId)
            localStorage.setItem('token',userOnline.token)
        }
        else {
            localStorage.clear()
        }
    },[])
    return <userContext.Provider value={userValue}> {children} </userContext.Provider>
}

export default userContext