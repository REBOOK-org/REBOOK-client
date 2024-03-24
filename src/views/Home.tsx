import SingleCard from '@/components/ui/BookCard'
import img1 from '../assets/janko-ferlic-sfL_QOnmy00-unsplash.jpg'
import img2 from '../assets/jaredd-craig-HH4WBGNyltc-unsplash.jpg'
import img3 from '../assets/sincerely-media-CXYPfveiuis-unsplash.jpg'
import img4 from '../assets/sincerely-media-nGrfKmtwv24-unsplash.jpg'

const data = [
  {
    title: 'title',
    location: {
      city: 'city',
      country: 'country',
    },
    pricePerNight: 100,
    date: {
      start: 'start',
    },
    images: ['https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/75ba157f-8b1e-4c8a-a524-bff78179e844.jpeg?im_w=720', img2, img3, img4],
    id: 1,
  },
  {
    title: 'title',
    location: {
      city: 'city',
      country: 'country',
    },
    pricePerNight: 100,
    date: {
      start: 'start',
    },
    images: ['https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720', img3, img4, img1],
    id: 2,
  },
  {
    title: 'title',
    location: {
      city: 'city',
      country: 'country',
    },
    pricePerNight: 100,
    date: {
      start: 'start',
    },
    images: ['https://a0.muscache.com/im/pictures/8243ac5b-e689-4245-beae-cc15bd0804f5.jpg?im_w=720', img4, img1, img2],
    id: 3,
  },
  {
    title: 'title',
    location: {
      city: 'city',
      country: 'country',
    },
    pricePerNight: 100,
    date: {
      start: 'start',
    },
    images: ['https://a0.muscache.com/im/pictures/miso/Hosting-779756514040358675/original/f40624bc-b512-4823-8674-440e4135f626.jpeg?im_w=720', img1, img2, img3],
    id: 4,
  },
  {
    title: 'title',
    location: {
      city: 'city',
      country: 'country',
    },
    pricePerNight: 100,
    date: {
      start: 'start',
    },
    images: ['https://a0.muscache.com/im/pictures/127732b6-2afb-47a8-b4ba-8e984d1f280a.jpg?im_w=720', img4, img1, img2],
    id: 5,
  },
  {
    title: 'title',
    location: {
      city: 'city',
      country: 'country',
    },
    pricePerNight: 100,
    date: {
      start: 'start',
    },
    images: ['https://a0.muscache.com/im/pictures/miso/Hosting-53988092/original/e0a4ca4d-24a9-44e5-8b13-2c0d7cd609be.jpeg?im_w=720', img1, img2, img3],
    id: 6,
  },
  {
    title: 'title',
    location: {
      city: 'city',
      country: 'country',
    },
    pricePerNight: 100,
    date: {
      start: 'start',
    },
    images: ['https://a0.muscache.com/im/pictures/127732b6-2afb-47a8-b4ba-8e984d1f280a.jpg?im_w=720', img4, img1, img2],
    id: 5,
  },
  {
    title: 'title',
    location: {
      city: 'city',
      country: 'country',
    },
    pricePerNight: 100,
    date: {
      start: 'start',
    },
    images: ['https://a0.muscache.com/im/pictures/miso/Hosting-53988092/original/e0a4ca4d-24a9-44e5-8b13-2c0d7cd609be.jpeg?im_w=720', img1, img2, img3],
    id: 6,
  },
]

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {data.map((card) => (
            <SingleCard data={card} />
        ))}
      </div>
    </div>
  )
}
