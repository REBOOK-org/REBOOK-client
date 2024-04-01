import { useAuth } from '@/contexts/authContext'
import Footer from './Footer'
import Header from './Header'
import { useEffect } from 'react'

export function Layout({ children }: { children: React.ReactNode }) {
  const auth = useAuth()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log(auth.isAuth)

      auth.setAuth(true)
    }
  }, [])
  return (
    <>
      <div className="flex flex-col h-screen p-2">
        <Header />
        <main className="flex-1 mt-[100px]">{children}</main>
        <Footer />
      </div>
    </>
  )
}
