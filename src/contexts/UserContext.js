import React, { createContext, useState } from 'react'

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState({
    username: undefined,
    password: undefined
  })
  const [userRegister, setUserRegister] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    phone_number: undefined
  })
  const [userOnline, setUserOnline] = useState({
    userId: undefined,
    token: undefined
  })
  const [errorDisplay, setErrorDisplay] = useState('')
  const userValue = {
    LoginState: { userLogin: userLogin, setUserLogin: setUserLogin },
    RegisterState: { userRegister: userRegister, setUserRegister: setUserRegister },
    Online: { userOnline: userOnline, setUserOnline: setUserOnline },
    ErrorUser: { errorDisplay: errorDisplay, setErrorDisplay: setErrorDisplay }
  }
  return (
    <UserContext.Provider value={userValue}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
