import SingleCard from '@/components/ui/BookCard'
import img1 from '../assets/janko-ferlic-sfL_QOnmy00-unsplash.jpg'
import img2 from '../assets/jaredd-craig-HH4WBGNyltc-unsplash.jpg'
import img3 from '../assets/sincerely-media-CXYPfveiuis-unsplash.jpg'
import img4 from '../assets/sincerely-media-nGrfKmtwv24-unsplash.jpg'
import { useGetAllBooksQuery } from '@/app/apiService/bookApi'
import { Link } from 'react-router-dom'

export default function Home() {
  const { data: booksData, isLoading, isError } = useGetAllBooksQuery()

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {booksData.map((book, index) => (
          <Link to={`/book/${book.id}`} key={book.id}>
            <SingleCard data={book} />
          </Link>
        ))}
      </div>
    </div>
  )
}
