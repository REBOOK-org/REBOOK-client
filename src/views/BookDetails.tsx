import { useParams } from 'react-router-dom'
import { useGetBookByIdQuery } from '@/app/apiService/bookApi'
import ImageScrollbar from '@/components/bookDetailsComp/imagesScrollbar'
import PriceCard from '@/components/bookDetailsComp/bookPriceCard'
import ContactCard from '@/components/bookDetailsComp/bookContactCard'
import BookCard from '@/components/bookDetailsComp/bookCard'
import { Skeleton } from '@/components/ui/skeleton'

const data = {
  name: 'The Great Gatsby',
  auther: 'F. Scott Fitzgerald',
  description:
    'A novel st Egg sssssssssssssssssssssssssssssssssssand East Egg on prosperous Long Island in the summer of 1922.',
  condition: 'New',
  categories: ['Fiction', 'Classic'],
  price: 349,
  address: 'New York, USA',
  additionalNotes: 'There is a small scratch on the cover.',
  contacts: {
    email: 'user@gmail.com',
    phone: '+201023377870',
  },
  exchangeable: true,
}

export default function BookDetails() {
  const { id } = useParams()
  const { data: book, isLoading, isError } = useGetBookByIdQuery(id)


  

  if (isLoading) {
    return (
      <div className=" px-6 my-0">
        <div className="flex  space-x-5">
          <Skeleton className="h-[250px] w-[250px] rounded-xl" />
          <div className="space-y-8 pt-4">
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-4 w-[400px]" />
            <Skeleton className="h-4 w-[400px]" />
            <Skeleton className="h-4 w-[400px]" /> 
            <Skeleton className="h-4 w-[300px]" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className=" px-4 my-0">
      <BookCard
        author={book.author}
        coverImage={book.images[0]}
        title={book.name}
        description={book.description}
        categories={data.categories}
        condition={book.condition}
      />
      <div className="grid grid-cols-3 gap-4 px-4 my-8">
        <div className="col-span-2">
          <ImageScrollbar images={book.images} />
          <ContactCard
            phone={data.contacts.phone}
            email={data.contacts.email}
            address={data.address}
            additionalNotes={data.additionalNotes}
          />
        </div>
        <div className="col-span-1 sticky top-28 ">
          <PriceCard price={book.price} exchangeable={data.exchangeable} />
        </div>
      </div>
    </div>
  )
}
