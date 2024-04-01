import Footer from './Footer'
import Header from './Header'

export function Layout({ children }: { children: React.ReactNode }) {
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
