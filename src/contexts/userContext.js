import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState({
    username: undefined,
    password: undefined
  })
  const [userRegister, setUserRegister] = useState({
    username: undefined,
    password: undefined,
    email: undefined,
    phone_number: undefined
  })
  const [userOnline, setUserOnline] = useState({
    userId: undefined,
    token: undefined
  })
  const userValue = {
    LoginState: { userLogin, setUserLogin },
    RegisterState: { userRegister, setUserRegister },
    userOnline: { userOnline, setUserOnline }
  }
  useEffect(() => {
    if (userOnline.token) {
      localStorage.setItem('userId', userOnline.userId)
      localStorage.setItem('token', userOnline.token)
      localStorage.setItem('refreshToken', null)
    } else {
      localStorage.clear()
    }
  }, [userOnline])
  return (
    <UserContext.Provider value={userValue}> {children} </UserContext.Provider>
  )
}

export default UserContext
