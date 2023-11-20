import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@entities/Counter/Counter.tsx'
import authReducer from '@entities/Auth/Auth.tsx'
import { env } from 'std-env'
import { StateSchema } from '@app/providers/StoreProvider/config/StateSchema.ts'
export const store = configureStore<StateSchema>({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  devTools: env.NODE_ENV !== 'production',
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
