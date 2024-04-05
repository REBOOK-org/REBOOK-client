import { FC } from 'react'
import Home from '@/views/Home'
import Account from '@/views/Account'
import BookUpload from '@/views/BookUpload'
import BookDetails from '@/views/BookDetails'
import UserProfile from '@/views/Profile'

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
    path: '/book/:id',
    component: BookDetails,
    protected: false,
  },
  {
    path: '/profile',
    component: UserProfile,
    protected: false,
  },
  {
    path: '*',
    component: Home,
    protected: false,
  },
]

export default routes
