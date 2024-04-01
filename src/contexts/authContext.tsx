import { createContext, useContext, useState } from 'react'

const authContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuth, setAuth] = useState(false)

  const login = (user, token) => {
    setUser(user)
    localStorage.setItem('token', token)
    setAuth(true)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
    setAuth(false)
  }
  return (
    <authContext.Provider value={{ user, isAuth, setAuth, login, logout }}>
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}
