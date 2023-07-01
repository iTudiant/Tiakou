import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FavoriteState } from "./types";

const initialState: FavoriteState = {
  favorites: [1, 3],
};

export const favoriteSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<number>) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(
          (favoris) => favoris !== action.payload,
        );
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { setFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
