import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PublishState, Cart } from "./types";

const initialState: PublishState = {
  carts: [],
};

export const publishSlice = createSlice({
  name: "publish",
  initialState,
  reducers: {
    setProductsToCars: (state, action: PayloadAction<Cart>) => {
      let currentId = state.carts.map((cart) => cart.id);
      if (currentId.includes(action.payload.id)) {
        let oldCart = state.carts.filter(
          (cart) => cart.id === action.payload.id,
        );
        oldCart[0].quantity = action.payload.quantity;
        state.carts = [...state.carts, ...oldCart];
      } else {
        state.carts = [...state.carts, action.payload];
      }
    },
    removeOneCart: (state, action: PayloadAction<number>) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },
  },
});

export const { setProductsToCars, removeOneCart } = publishSlice.actions;

export default publishSlice.reducer;
