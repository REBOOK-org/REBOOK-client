import { Layout } from './components/layout'
import AppRouter from './Router/AppRouter'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/authContext'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <AuthProvider>
      <Toaster />
      <Router>
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
    </AuthProvider>
  )
}

export default App
