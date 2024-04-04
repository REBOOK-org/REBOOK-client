import { Badge } from '@/components/ui/badge'

export default function PriceCard({
  price,
  exchangeable,
}: {
  price: number
  exchangeable: boolean
}) {
  return (
    <div className="y-0 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
      <div className="rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
        <div className="mx-auto max-w-xs px-8">
          <p className="text-base font-semibold text-gray-600">
            {exchangeable ? (
              <Badge className="bg-green-400 text-white">Exchangeable</Badge>
            ) : (
              <Badge className="bg-red-400 text-xs md:text-base font-sm   text-white">
                No Exchange
              </Badge>
            )}
          </p>
          <p className="mt-6 flex items-baseline justify-center gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-gray-900">
              ${price}
            </span>
            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
              USD
            </span>
          </p>
          <a
            href="#contact"
            className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Contact Seller
          </a>
        </div>
      </div>
    </div>
  )
}
