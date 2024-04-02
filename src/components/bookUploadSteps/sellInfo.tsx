import React from 'react'
import { Switch } from '@material-tailwind/react'
import { useState } from 'react'
import { Input } from '@material-tailwind/react'

export default function SellInfo() {
  const [selected, setSelected] = useState(null)
  const [price, setPrice] = React.useState('')

  const handelPrice = ({ target }) => setPrice(target.value)

  const handleBookState = (card) => {
    if (selected === card) {
      setSelected(null)
    } else {
      setSelected(card)
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
            {['New', 'Fine', 'Damaged'].map((card, index) => {
              return (
                <div
                  key={card}
                  className={` w-20 h-14  sm:w-28 sm: h-16  md:w-40   rounded-xl  bg-brown-500 text-white flex items-center justify-center ${
                    selected === card ? 'bg-brown-700' : ''
                  } cursor-pointer`}
                  onClick={() => handleBookState(card)}
                >
                  {card}
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
            value={price}
            onChange={handelPrice}
            type="number"
            min="1"
          />
        </div>

        <div className="flex justify-between ">
          <div className="">
            <p className="  font-semibold text-xl pb-2">Exchangeable</p>
            <p className="text-sm text-gray-700 font-semibold">
              will exchange for a good offer
            </p>
          </div>
          <Switch color="brown" defaultChecked />
        </div>
      </div>
    </div>
  )
}
