import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAddUserMutation } from '@/app/apiService/userApi'
import { useAuth } from '@/contexts/authContext'
import { useState } from 'react'

const signupFormSchema = z.object({
  name: z.string().max(20, { message: 'name must be at most 20 characters.' }),
  email: z
    .string()
    .max(120, { message: 'email must be at most 50 characters.' })
    .email(),
  password: z
    .string()
    .min(8, { message: 'password must be at least 8 characters.' }),
  confirmPassword: z.string(),
})
export default function SignupForm({ closeModal }: { closeModal: () => void }) {
  const auth = useAuth()
  const [addUser, { data, error, isLoading }] = useAddUserMutation()
  const [signupErr, setSignupErr] = useState('')

  if (data) {
    auth.login(data.user, data.tokens.access)
  }

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  async function onSubmit(user: z.infer<typeof signupFormSchema>) {
    if (user.password !== user.confirmPassword) {
      form.setError('confirmPassword', {
        type: 'manual',
        message: 'Password and confirm password must be the same.',
      })
      return
    }

    try {
      const userData = await addUser(user)

      if (userData.error) {
        setSignupErr(userData.error.data.email[0])
      } else {
        closeModal()
      }
    } catch (err) {
      setSignupErr('An error occurred. Please try again.')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="font-mono p-4 flex flex-col gap-5 h-full justify-center items-center m-auto shadow-md my-4 rounded-md border-green-200 border"
      >
        <div className="w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input id="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input id="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input id="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full">
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input id="confirmPassword" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {signupErr && <p className="text-red-500">{signupErr}</p>}
        <Button
          type="submit"
          className="w-[70%] bg-green-400 hover:bg-green-600 mt-4"
        >
          Login
        </Button>
      </form>
    </Form>
  )
}
