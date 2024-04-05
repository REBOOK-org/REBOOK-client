import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SingleCard from '@/components/ui/BookCard'
import { useGetAllBooksQuery } from '@/app/apiService/bookApi'
import { Skeleton } from '@/components/ui/skeleton'

export default function Home() {
  const { data: booksData, isLoading, isError, refetch } = useGetAllBooksQuery()

  useEffect(() => {
    refetch()
  }, [refetch])

  if (isLoading) {
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex flex-col ">
              <Skeleton className="h-[200px] w-[280px] rounded-xl" />
              <div className="space-y-4 mt-3">
                <Skeleton className="h-5 w-[280px]" />
                <Skeleton className="h-5 w-[280px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

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
