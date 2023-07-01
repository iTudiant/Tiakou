import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SearchState } from "./types";

const initialState: SearchState = {
  categories: [
    {
      id: 1,
      nom: "Cup",
      description: "Test description ftsn",
    },
    {
      id: 2,
      nom: "T-Shirt",
      description: "Test description ftsn",
    },
  ],
  influencys: [
    {
      id: 1,
      nom: "Agrad",
      description: "Test description ftsn",
    },
    {
      id: 2,
      nom: "Skaiz",
      description: "Test description ftsn",
    },
  ],
  products: [
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
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi ducimus dolore excepturi, quo distinctio tempora pariatur nulla ipsam in, beatae incidunt accusantium! Culpa, quaerat at! Voluptatem labore enim repellendus!",
      image: require("_images/pull.jpg"),
      prix: 2000.0,
      categorie: 2,
      user: 1,
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
      user: 1,
      number: 12,
      is_finished: false,
    },
    {
      id: 4,
      nom: "Mug spiderman",
      description: "Pull jolie",
      image: require("_images/pull.jpg"),
      prix: 2000.0,
      categorie: 2,
      user: 2,
      number: 12,
      is_finished: false,
    },
  ],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setGoodies: (state, action: PayloadAction<object[]>) => {
      state.categories = [...state.categories, action.payload];
    },
    setInfluencys: (state, action: PayloadAction<object[]>) => {
      state.influencys = [...state.influencys, action.payload];
    },
    setProducts: (state, action: PayloadAction<object[]>) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export const { setGoodies } = searchSlice.actions;

export default searchSlice.reducer;
