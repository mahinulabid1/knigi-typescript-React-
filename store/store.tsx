import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./sliceExample"
import displayReducer from './displaySlice'
import userCacheReducer from './userCacheSlice'

export const store = configureStore({  // important to remember : configureStore() returns an OBJECT
  reducer: {
    counter : counterReducer,
    display : displayReducer,
    user: userCacheReducer 
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch