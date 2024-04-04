export default function ImageScrollbar({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col bg-gray-100 ring-1 ring-inset ring-gray-900/5  m-auto rounded-2xl py-10 px-2">
      <div className="flex flex-wrap gap-4 overflow-x-scroll [scrollbar-width:none] mr-4">
        <h1 className="text-2xl font-bold sticky left-0">
          Scroll to view all images :)
        </h1>
        <div className="flex flex-nowrap  ">
          {images.map((image, index) => (
            <div key={index} className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-red-500 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  alt="Book Image"
                  className="w-full h-full object-cover object-center"
                  src={image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>{' '}
    </div>
  )
}
