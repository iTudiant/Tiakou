import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PublishState } from "./types";

const initialState: PublishState = {
  carts: [
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

export const publishSlice = createSlice({
  name: "publish",
  initialState,
  reducers: {
    setProductsToCars: (state, action: PayloadAction<object[]>) => {
      state.carts = [...state.carts, action.payload];
    },
  },
});

export const { setProductsToCars } = publishSlice.actions;

export default publishSlice.reducer;
