import { Layout } from './components/layout'
import AppRouter from './Router/AppRouter'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/authContext'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
    </AuthProvider>
  )
}

export default App
