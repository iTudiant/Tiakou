import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SearchState } from "./types";

const initialState: SearchState = {
  categories: [
    {
      id: 1,
      name: "Cup",
      description: "Test description ftsn",
    },
    {
      id: 2,
      name: "T-Shirt",
      description: "Test description ftsn",
    },
  ],
  influencys: [
    {
      id: 1,
      name: "Agrad",
      description: "Test description ftsn",
    },
    {
      id: 2,
      name: "Skaiz",
      description: "Test description ftsn",
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
  },
});

export const { setGoodies } = searchSlice.actions;

export default searchSlice.reducer;
