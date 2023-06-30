import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SearchState } from './types'

const initialState : SearchState = {
    listGoodies: 'default',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchThisValue: (state) => {
      state.listGoodies += 'dama'
    },
    searchThisValueFromUser: (state, action: PayloadAction<string>) => {
      state.listGoodies += action.payload
    },
  },
})

export const { searchThisValue,  searchThisValueFromUser} = searchSlice.actions

export default searchSlice.reducer