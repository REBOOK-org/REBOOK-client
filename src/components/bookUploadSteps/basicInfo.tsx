import React from 'react'
import { Textarea } from '@material-tailwind/react'
import { useSelector, useDispatch } from 'react-redux'
import { uploadBook } from '@/app/features/book'

export default function BasicInfo() {
  const dispatch = useDispatch()
  const book = useSelector((state) => state.book)

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
          value={book.name}
          onChange={(e) => dispatch(uploadBook({ name: e.target.value }))}
        />
        <Textarea
          variant="standard"
          label="Book Author"
          color="brown"
          className=" text-xl min-h-[50px] pt-0"
          value={book.author}
          onChange={(e) => dispatch(uploadBook({ author: e.target.value }))}
        />
        <Textarea
          variant="outlined"
          color="brown"
          label="Book Description"
          value={book.description}
          onChange={(e) =>
            dispatch(uploadBook({ description: e.target.value }))
          }
        />
      </div>
    </div>
  )
}
