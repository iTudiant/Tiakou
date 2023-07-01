import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FavoriteState } from "./types";

const initialState: FavoriteState = {
  favorites: [
    {
      id: 1,
      nom: "Mug",
      description: "Mug jolie",
      image: require("_images/mug.jpg"),
      prix: 2000.0,
      categorie: 1,
      user: 2,
      number: 12,
      is_finished: false,
    },
    {
      id: 2,
      nom: "Pull",
      description: "Pull jolie",
      image: require("_images/pull.jpg"),
      prix: 2000.0,
      categorie: 1,
      user: 2,
      number: 12,
      is_finished: false,
    },
    {
      id: 3,
      nom: "Pull black",
      description: "Mug jolie",
      image: require("_images/pull_black.jpg"),
      prix: 400.0,
      categorie: 1,
      user: 2,
      number: 12,
      is_finished: false,
    },
    {
      id: 4,
      nom: "Mug spiderman",
      description: "Pull jolie",
      image: require("_images/pull.jpg"),
      prix: 2000.0,
      categorie: 1,
      user: 2,
      number: 12,
      is_finished: false,
    },
  ],
};

export const favoriteSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<object[]>) => {
      state.favorites = [...state.favorites, action.payload];
    },
  },
});

export const { setFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
