import { Routes, Route, Navigate } from 'react-router-dom'
import routes from './routes'
import { useAuth } from '@/contexts/authContext'

export default function AppRouter() {
  const auth = useAuth()

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            !route.protected || auth.isAuth ? (
              <route.component />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      ))}
    </Routes>
  )
}
