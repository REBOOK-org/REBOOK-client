import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './apiService/userApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import bookReducer from './features/book'
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    book: bookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
