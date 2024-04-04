import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: ({ book, token }) => ({
        // Define the query function
        url: '/books/',
        method: 'POST',
        body: book,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getAllBooks: builder.query({
      query: () => '/books/',
    }),
    getBookById: builder.query({
      query: (id) => `/books/${id}/`,
    }),
  }),
})

export const { useAddBookMutation, useGetAllBooksQuery, useGetBookByIdQuery } =
  bookApi
