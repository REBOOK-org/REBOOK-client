import bgImg from '@/assets/old-book-background-1024x576.jpg'
import { Button } from '@material-tailwind/react'
import { useSelector, useDispatch } from 'react-redux'
import { uploadBook } from '@/app/features/book'
import axios from 'axios'
import cloudinaryUploader from '@/utils/cloudinaryApi'
import { useAddBookMutation } from '@/app/apiService/bookApi'
import { useAuth } from '@/contexts/authContext'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@/components/ui/use-toast'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function FinalStep() {
  const auth = useAuth()
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const book = useSelector((state) => state.book)
  const { toast } = useToast()
  const [addBook, { data, error, isLoading }] = useAddBookMutation()

  useEffect(() => {
    if (data) {
      dispatch(
        uploadBook({
          name: '',
          description: '',
          author: '',
          price: 0,
          condition: '',
          images: [],
          exchangeable: false,
        }),
      )

      toast({
        variant: 'default',
        className: 'bg-green-300',
        title: 'Your Book Got Uploaded Successfully! 🥳🥳',
      })

      setTimeout(() => {
        navigate('/')
      }, 4000)
    }
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Ensure all required information is filled out! 😃',
      })
    }
  }, [data, error])

  const cloudName = import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME

  async function handelUploadBook(e) {
    e.preventDefault()

    try {
      const uploadPromises = book.images.map(async (img) => {
        return await cloudinaryUploader(img)
      })

      const urls = await Promise.all(uploadPromises)
      if (urls.length === book.images.length) {
        await dispatch(uploadBook({ images: urls }))
        const token = auth.token
        addBook({ book, token })
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div
      className="w-full lg:w-4/5 xl:w-3/5 flex py-20 px-5  bg-cover bg-center rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="text-center text-white flex gap-6 flex-col justify-center justify-items-center w-full">
        <h1 className=" font-mono text-center font-bold sm:text-lg md:text-2xl block justify-self-center text-white">
          VOILA !!! 🥳🥳🥳
        </h1>
        <h1 className=" font-sans text-center font-semibold sm:text-lg md:text-xl block justify-self-center text-white">
          NOW YOU'RE READY TO SHARE YOUR BOOK !
        </h1>
        <Button
          className=" w-30 h-10  bg-white text-brown-700 hover:bg-gray-300"
          onClick={(e) => handelUploadBook(e)}
        >
          SHARE
        </Button>
        <Link
          to="/"
          className="  h-10 w-full bg-white text-brown-700 hover:bg-gray-300"
        >
          <Button className="  h-10 w-full bg-white text-brown-700 hover:bg-gray-300">
            BACK TO HOME
          </Button>
        </Link>
      </div>
    </div>
  )
}
