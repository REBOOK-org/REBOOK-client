import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './apiService/userApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import bookReducer from './features/book'
import { bookApi } from './apiService/bookApi'
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    book: bookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, bookApi.middleware),
})


setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
