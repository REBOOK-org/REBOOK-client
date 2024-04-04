import React from 'react'
import { Switch } from '@material-tailwind/react'
import { useState } from 'react'
import { Input } from '@material-tailwind/react'
import { useSelector, useDispatch } from 'react-redux'
import { uploadBook } from '@/app/features/book'

export default function SellInfo() {
  const dispatch = useDispatch()
  const book = useSelector((state) => state.book)


  const handleBookState = (condition) => {
    if (book.condition === condition) {
      dispatch(uploadBook({ condition: '' }))
    } else {
      dispatch(uploadBook({ condition: condition }))
    }
  }

  

  return (
    <div className=" w-full lg:w-4/5 xl:w-3/5">
      <h1 className=" font-sans font-bold sm:text-lg md:text-2xl">
        BOOK STATE AND TYPE OF SHARING
      </h1>

      <div className="flex w-full flex-col gap-8 py-6 ">
        <div className="flex w-full flex-col gap-3">
          <p className=" font-semibold text-xl ">How is your book?</p>
          <div className="flex justify-between">
            {['New', 'Used', 'Damaged'].map((condition) => {
              return (
                <div
                  value={condition.toLowerCase()}
                  key={condition}
                  className={` w-20 sm:w-28 h-14  md:h-16  md:w-40   rounded-xl  bg-brown-500 text-white flex items-center justify-center ${
                    book.condition === condition.toLowerCase()
                      ? 'bg-brown-700'
                      : ''
                  } cursor-pointer`}
                  onClick={() => handleBookState(condition.toLowerCase())}
                >
                  {condition}
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex w-full flex-col gap-3">
          <p className=" font-semibold text-xl">Now, set your price in $</p>

          <Input
            size="md"
            label="Price"
            color="brown"
            type="number"
            min={0}
            value={book.price}
            onChange={(e) => {
              dispatch(uploadBook({ price: parseInt(e.target.value) }))
            }}
          />
        </div>

        <div className="flex justify-between ">
          <div className="">
            <p className="  font-semibold text-xl pb-2">Exchangeable</p>
            <p className="text-sm text-gray-700 font-semibold">
              will exchange for a good offer
            </p>
          </div>
          <Switch
            color="brown"
            // value={book.exchangeable}
            defaultChecked={book.exchangeable}
            onChange={(e) => {
              e.target.defaultChecked = !book.exchangeable
              dispatch(uploadBook({ exchangeable: !book.exchangeable }))
            }}
          />
        </div>
      </div>
    </div>
  )
}
