import { Badge } from '@/components/ui/badge'
import { CardContent, Card } from '@/components/ui/card'

export default function BookCard({
  coverImage,
  title,
  author,
  description,
  condition,
  ganra,
}: {
  coverImage: string
  title: string
  author: string
  description: string
  condition: string
  ganra: string[]
}) {
  return (
    <Card>
      <CardContent
        className=" flex items-start  flex-wrap md:flex-nowrap 
   gap-4  sm:justify-start px-4"
      >
        <div>
          <img
            alt="Book cover"
            className="rounded-lg object-cover aspect-[120/180]"
            height={180}
            src={
              coverImage ||
              'https://images.unsplash.com/photo-1519681393784-d120267933ba'
            }
            width={180}
          />
        </div>
        <div className="grid gap-1.5">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            By {author}
          </p>
          <p className="text-sm">{description} </p>
          <div className="flex gap-2">
            {ganra.map((ganra) => (
              <Badge
                key={ganra}
                className="bg-transparent text-red-400 border border-red-400 hover:bg-red-400 hover:text-white"
              >
                {ganra}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-green-400 text-white">{condition}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )}