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
import { useLoginUserMutation, userApi } from '@/app/service/user'

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
  const [loginUser, { data, error, isLoading }] = useLoginUserMutation()
  console.log(data)
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  async function onSubmit(user: z.infer<typeof loginFormSchema>) {
    try {
      const { data } = await loginUser(user)
      console.log('Login successful!', data['access'])

      closeModal()
    } catch (err) {
      console.error('Login failed:', error)
    }

    closeModal()
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
