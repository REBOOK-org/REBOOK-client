import { LibraryBig, Menu, UserRound } from 'lucide-react'
import {
  Cloud,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
} from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import LoginSignupModal from './LoginSignupModal'

export default function Header() {
  const [modalOpen, setModalOpen] = useState<'login' | 'signup' | null>(null)
  function setOpenModal(value: 'login' | 'signup' | null) {
    setModalOpen(value)
  }

  function closeModal() {
    setModalOpen(null)
  }

  return (
    <header className="py-4 border-b ">
      <LoginSignupModal modalOpen={modalOpen} closeModal={closeModal} />
      <div className=" mx-3 flex justify-between items-center ">
        <div className="flex justify-center items-center text-[#9C6644] font-bold lg:text-3xl md:text-2xl text-xl">
          <span className="text-3xl  font-mono">re</span>
          <LibraryBig className="text-red-400" width={40} height={35} />
        </div>
        <div className="flex items-center">
          <div className=" content-center font-bold text-center  mr-5 ">
            Upload your book
          </div>
          <Dropdown setOpenModal={setOpenModal} />
        </div>
      </div>
    </header>
  )
}

export function Dropdown({
  setOpenModal,
}: {
  setOpenModal: (value: 'login' | 'signup' | null) => void
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="border p-3 shadow hover:shadow-lg rounded-full flex justify-center items-center gap-2 text-red-400">
          <Menu />
          <UserRound />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mx-6">
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setOpenModal('signup')}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign up</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenModal('login')}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log in</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Book</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>Auth</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
