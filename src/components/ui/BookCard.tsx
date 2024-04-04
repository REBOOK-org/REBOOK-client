import { Card, CardContent } from './card'
import { Scrollbar, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import './card.css'

interface SingleCardProps {
  data: {
    id: number
    name: string
    author: string
    description: string
    condition: string
    price: string
    exchangeable: boolean
    images: string[]
    category_names: string[]
    owner: string
    owner_name: string
    quantity: number
    status: string
    type_of_sharing: string
  }
}

const SingleCard = ({ data }: SingleCardProps) => {
  const { name, author, images, price } = data
  return (
    <div className=" rounded-2xl">
      <Card className="rounded rounded-full rounded-2xl group hover:border-blue-400 rounded-t-2xl  ">
        <Swiper
          navigation={true}
          className="rounded"
          modules={[Navigation, Scrollbar, Pagination]}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
        >
          {images.map((imgSrc, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" rounded-t-lg "
                style={{ filter: 'brightness(0.95)' }}
              >
                <img
                  alt={`img-${index}`}
                  src={imgSrc}
                  className="brightness-200 object-cover aspect-[26/26]  rounded-3xl"
                  style={{ filter: 'brightness(0.99)' }}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>

        <CardContent className="p-4 grid gap-0">
          <h3 className=" text-md font-semibold ">{name}</h3>
          <p className=" text-gray-700 text-md   font-semibold">{author}</p>

          <p className="  font-semibold">{`${price} $`}</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default SingleCard
