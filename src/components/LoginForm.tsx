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
import { useLoginUserMutation } from '@/app/apiService/userApi'
import { useAuth } from '@/contexts/authContext'
import { useState } from 'react'

const loginFormSchema = z.object({
  email: z
    .string()
    .max(120, { message: 'name must be at most 120 characters.' })
    .email(),
  password: z
    .string()
    .min(8, { message: 'password must be at least 8 characters.' }),
})
export default function LoginForm({ closeModal }: { closeModal: () => void }) {
  const [loginUser, { data, isLoading }] = useLoginUserMutation()
  const auth = useAuth()
  const [loginErr, setLoginErr] = useState('')
  // if (error) {
  //   console.log(error)

  //   setLoginErr(error)
  // }
  if (data) {
    console.log(data)
    // const { id, email, name } = data
    auth.login(data.user, data.tokens.access)
    console.log('Logged in:', data.user)
  }
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  async function onSubmit(user: z.infer<typeof loginFormSchema>) {
    setLoginErr('')
    try {
      const userData = await loginUser(user)

      if (userData.error) {
        setLoginErr('Invalid email or password. Please try again!')
      } else {
        closeModal()
      }
    } catch (err) {
      console.log(err)
      setLoginErr(err.message || 'An error occurred. Please try again.')
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
        {loginErr && <p className="text-red-500">{loginErr}</p>}

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
