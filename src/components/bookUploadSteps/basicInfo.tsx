import React from 'react'
import { Textarea } from '@material-tailwind/react'
import { CircleDivideIcon } from 'lucide-react'

export default function BasicInfo() {
  return (
    <div className=" w-full lg:w-4/5 xl:w-3/5">
      <h1 className=" font-sans font-bold sm:text-lg md:text-2xl">
        TELL US ABOUT YOUR BOOK ?
      </h1>
      <div className="flex w-full flex-col gap-6 pt-8">
        <Textarea
          variant="standard"
          label="Book Name"
          color="brown"
          className=" text-xl min-h-[50px] pt-0"
        />
        <Textarea
          variant="standard"
          label="Book Author"
          color="brown"
          className=" text-xl min-h-[50px] pt-0"
        />
        <Textarea variant="outlined" color="brown" label="Book Description" />
      </div>
    </div>
  )
}
