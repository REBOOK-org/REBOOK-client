import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SingleCard from '@/components/ui/BookCard'
import { useGetAllBooksQuery } from '@/app/apiService/bookApi'

export default function Home() {
  const { data: booksData, isLoading, isError, refetch } = useGetAllBooksQuery()

  useEffect(() => {
    refetch()
  }, [refetch])

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error fetching books</div>

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
