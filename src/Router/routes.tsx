import { FC } from 'react'
import Home from '@/views/Home'
import Account from '@/views/Account'
import BookUpload from '@/views/BookUpload'


interface Route {
  path: string
  component: FC | null
  layout: FC | null
  protected: boolean
}

const routes: Route[] = [
  {
    path: '/',
    component: Home,
    layout: null,
    protected: false,
  },
  {
    path: '/account',
    component: Account,
    layout: null,
    protected: true,
  },
  {
    path: '/book-upload',
    component: BookUpload,
    layout: null,
    protected: true,
  },
]

export default routes
