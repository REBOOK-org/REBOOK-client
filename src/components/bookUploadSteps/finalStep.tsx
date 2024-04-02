import bgImg from '@/assets/old-book-background-1024x576.jpg'
import { Button } from '@material-tailwind/react'

export default function FinalStep() {
  return (
    <div
      className="w-full lg:w-4/5 xl:w-3/5 flex py-20 px-5  bg-cover bg-center rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="text-center text-white flex gap-6 flex-col justify-center justify-items-center w-full">
        <h1 className=" font-mono text-center font-bold sm:text-lg md:text-2xl block justify-self-center text-white">
          VOILA !!! 🥳🥳🥳
        </h1>
        <h1 className=" font-sans text-center font-semibold sm:text-lg md:text-xl block justify-self-center text-white">
          NOW YOU'RE READY TO SHARE YOUR BOOK !
        </h1>
        <Button color=" " className=" w-30 h-10  bg-white text-brown-700 hover:bg-gray-300">
          SHARE
        </Button>
      </div>
    </div>
  )
}
