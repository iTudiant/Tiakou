import { configureStore } from '@reduxjs/toolkit'
import { searchReducer } from '_features'
import functionnalityReducer from "./slice/functionnality";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    functionnality: functionnalityReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch