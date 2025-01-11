import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { blogApi } from '../services/blog'
import { userApi } from '../services/user'
// ...

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware).concat(userApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch