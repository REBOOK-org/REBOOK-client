import React from 'react'
import { Textarea } from '@material-tailwind/react'
import { CircleDivideIcon } from 'lucide-react'

export default function BasicInfo() {
  return (
    <div className="w-3/4">
      <h1 className=" font-sans font-bold text-2xl">YOUR BOOK</h1>
      <div className="flex w-full flex-col gap-6 pt-8">
        <Textarea
          variant="standard"
          label="Name"
          className=" text-xl min-h-[50px]"
        />
        <Textarea
          variant="standard"
          label="Book Author"
          className=" text-xl min-h-[50px]"
        />
        <Textarea variant="outlined" label="Book Description" />
      </div>
    </div>
  )
}
