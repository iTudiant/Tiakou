import { createSlice } from '@reduxjs/toolkit'
import { DarkMode } from './types'

const initialState : DarkMode = {
    isDarkMode: false,
}

export const functionnalitySlice = createSlice({
  name: 'functionnality',
  initialState,
  reducers: {
    switchMode: (state) => {
      state.isDarkMode = !state.isDarkMode
    },
  },
})

export const { switchMode } = functionnalitySlice.actions

export default functionnalitySlice.reducer