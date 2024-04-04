import { Layout } from './components/layout'
import AppRouter from './Router/AppRouter'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/authContext'
import { Toaster } from '@/components/ui/toaster'
import { useAuth } from './contexts/authContext'
import { useEffect } from 'react'

function App() {
  const auth = useAuth() 
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      auth.login(null, token) 
    } else {
      auth.logout()
    }
  }, [auth, token])

  return (
    <>
      <Toaster />
      <Router>
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
    </>
  )
}

export default App
