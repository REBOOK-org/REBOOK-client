import { FC } from 'react'
import Home from '@/views/Home'
import Account from '@/views/Account'
import BookUpload from '@/views/BookUpload'

interface Route {
  path: string
  component: FC
  layout: FC | null
}

const routes: Route[] = [
  {
    path: '/',
    component: Home,
    layout: null,
  },
  {
    path: '/account',
    component: Account,
    layout: null,
  },
  {
    path: '/book-upload',
    component: BookUpload,
    layout: null,
  },
]

export default routes
