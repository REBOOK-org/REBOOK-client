import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as immer from 'immer'

interface Book {
  name: string
  description: string
  author: string
  price: number
  condition: string
  images: string[]
  exchangeable: boolean 
}

const initialState: Book = {
  name: '',
  description: '',
  author: '',
  price: 0,
  condition: '',
  images: [],
  exchangeable: false,
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    uploadBook: (state, action: PayloadAction<Partial<Book>>) => {
      return immer.produce(state, (draftState) => {
        Object.assign(draftState, action.payload)
      })
    },
  },
})

export const { uploadBook } = bookSlice.actions

export default bookSlice.reducer
