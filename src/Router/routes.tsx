import { FC } from 'react'
import Home from '@/views/Home'
import Account from '@/views/Account'
import BookUpload from '@/views/BookUpload'

interface Route {
  path: string
  component: FC | null
  protected: boolean
}

const routes: Route[] = [
  {
    path: '/',
    component: Home,
    protected: false,
  },
  {
    path: '/account',
    component: Account,
    protected: true,
  },
  {
    path: '/book-upload',
    component: BookUpload,
    protected: true,
  },
  {
    path: '*',
    component: Home,
    protected: false,
  },
]

export default routes
