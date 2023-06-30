import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import functionnalityReducer from "./slice/functionnality";
import publishReducer from "../features/publish/publishSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: publishReducer,
    functionnality: functionnalityReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
