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
    title: string
    location: {
      city: string
      country: string
    }
    pricePerNight: number
    date: {
      start: string
    }
    images: string[]
    id: number
  }
}

const SingleCard = ({ data }: SingleCardProps) => {
  const { title, location, images } = data
  return (
    <div className="rounded-full">
      <Card className="rounded group hover:border-blue-400 rounded-t-2xl">
        <Swiper
          navigation={true}
          className=""
          modules={[Navigation, Scrollbar, Pagination]}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
        >
          {images.map((imgSrc, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  alt={`img-${index}`}
                  src={imgSrc}
                  className="object-cover aspect-[19/17] rounded-t-lg"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>

        <CardContent className="p-4 grid gap-2">
          <h3 className="font-bold text-lg group-hover:underline group-hover:text-blue-400 truncate group-hover:translate-x-2 transition-transform">
            {title}
          </h3>
          <p className="text-sm text-gray-500">
            {location?.city}, {location?.country}
          </p>

          <p className="text-sm text-gray-500 truncate">{title}</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default SingleCard
