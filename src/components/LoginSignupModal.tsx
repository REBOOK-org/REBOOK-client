import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import LoginForm from './LoginForm'
import { useEffect, useState } from 'react'
import SignupForm from './SignupForm'

export default function LoginSignupModal({
  modalOpen,
  closeModal,
}: {
  modalOpen: 'login' | 'signup' | null
  closeModal: () => void
}) {
  const [open, setOpen] = useState(!!modalOpen)
  useEffect(() => {
    setOpen(!!modalOpen)
  }, [modalOpen])
  useEffect(() => {
    if (!open) {
      closeModal()
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {modalOpen === 'login' ? 'Login' : 'Signup'}
          </DialogTitle>
          <DialogDescription>
            {modalOpen === 'login' ? (
              <LoginForm closeModal={() => setOpen(false)} />
            ) : (
              <SignupForm closeModal={() => setOpen(false)} />
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
