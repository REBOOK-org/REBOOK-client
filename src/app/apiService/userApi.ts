import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL
const APIbaseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: APIbaseUrl,
  }),
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (user) => ({
        url: '/user/signup/',
        method: 'POST',
        body: user,
      }),
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: '/user/login/',
        method: 'POST',
        body: user,
      }),
    }),
  }),
})


export const { useAddUserMutation, useLoginUserMutation } = userApi
