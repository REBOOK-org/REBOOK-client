import { createContext, useContext, useState } from 'react'
import { set } from 'zod'

const authContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuth, setAuth] = useState(false)
  const [token, setToken] = useState(null)

  const login = (user, token) => {
    setUser(user)
    localStorage.setItem('token', token)
    setToken(token)
    setAuth(true)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
    setToken(null)
    setAuth(false)
  }
  return (
    <authContext.Provider value={{ user, isAuth, setAuth, login, logout ,token}}>
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}
