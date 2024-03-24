import { Layout } from './components/layout'
import AppRouter from './Router/AppRouter'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <AppRouter/>
        </Layout>
      </Router>

    </>
  )
}

export default App
