import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import SingleCard from '@/components/ui/BookCard'

const userData = {
  user: {
    name: 'John Doe',
    userName: 'johndoe',
    img: 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',
    city: 'City',
    bio: 'Designer. Coffee lover. Making the web a more beautiful place, one pixel at a time.',
    state: 'State',
  },
  Books: [
    {
      id: '1',
      name: 'string',
      author: 'string',
      price: 'string',
      images: [null, null],
    },
    {
      id: '2',
      name: 'string',
      author: 'string',
      price: 'string',
      images: [null, null],
    },
  ],
}
export default function UserProfile() {
  const handleEdit = (bookId: string) => {
    console.log('Edit', bookId)
  }
  const handleDelete = (bookId: string) => {
    console.log('Delete', bookId)
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <UserData
        userName={userData.user.userName}
        name={userData.user.name}
        state={userData.user.state}
        bio={userData.user.bio}
        city={userData.user.city}
        img={userData.user.img}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {userData.Books.map((book) => (
          <div>
            <Link to={`/book/${book.id}`} key={book.id} className="mb-10">
              <SingleCard data={book} />
            </Link>
            <div className="flex justify-between gap-2 mb-4 mx-4">
              <Button
                className="mt-2 w-[90px] bg-green-600"
                onClick={() => handleEdit(book.id)}
              >
                Edit
              </Button>
              <Button
                className="mt-2 w-[90px]"
                onClick={() => handleDelete(book.id)}
                variant={'destructive'}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface UserData {
  name: string
  userName: string
  bio: string
  img: string
  city: string
  state: string
}
const UserData = ({ name, userName, img, bio, city, state }: UserData) => {
  return (
    <div className="w-full max-w-3xl space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <img
          alt="Avatar"
          className="rounded-full"
          height="96"
          src={
            img ||
            'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'
          }
          style={{
            aspectRatio: '96/96',
            objectFit: 'cover',
          }}
          width="96"
        />
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            @{userName}
          </p>
        </div>
      </div>
      <div className="space-y-2 text-center">
        <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
          {bio}
        </p>
        <p className="text-sm leading-loose text-gray-500 dark:text-gray-400">
          📍 {state}, {city}
        </p>
      </div>
    </div>
  )
}
