import Dropdown from '@/components/DropDown'
import { LibraryBig } from 'lucide-react'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import LoginSignupModal from './LoginSignupModal'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@/components/ui/use-toast'
import { useAuth } from '@/contexts/authContext'

export default function Header() {
  const navigate = useNavigate()
  const { toast } = useToast()
  const auth = useAuth()

  const [modalOpen, setModalOpen] = useState<'login' | 'signup' | null>(null)
  function setOpenModal(value: 'login' | 'signup' | null) {
    setModalOpen(value)
  }

  function closeModal() {
    setModalOpen(null)
  }
  function handelUploadBook() {
    if (!auth.isAuth) {
      toast({
        variant: 'destructive',
        title: 'Uh Ohhh! Please login first to share your book.',
      })
    } else {
      navigate('/book-upload')
    }
  }

  return (
    <header className="py-2 border-b fixed top-0 mb-3 left-0 w-full bg-white shadow-md z-50 px-7">
      <LoginSignupModal modalOpen={modalOpen} closeModal={closeModal} />
      <div className=" mx-3 flex justify-between items-center ">
        <Link to={'/'}>
          <div className="flex justify-center items-center text-[#9C6644] font-bold lg:text-3xl md:text-2xl text-xl">
            <span className="text-3xl  font-mono">re</span>
            <LibraryBig className="text-red-400" width={40} height={35} />
          </div>
        </Link>
        <div className="flex items-center">
          <div
            className=" content-center font-bold text-center text-[#9C6644] mr-3 text-lg px-4 py-2 rounded-lg cursor-pointer hover:bg-[#9C6644] hover:text-white transition-all duration-300 ease-in-out"
            onClick={() => {
              handelUploadBook()
            }}
          >
            <Link>Upload your book</Link>
          </div>
          <Dropdown setOpenModal={setOpenModal} />
        </div>
      </div>
    </header>
  )
}
