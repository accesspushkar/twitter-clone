import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchText: '',
  tweetsData: [],
}

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    appendToSet: (state, action) => {
      const old = state.tweetsData;
      old.push(action.payload);
      state.tweetsData = old;
    },
    updateSearchText: (state, action) => {
      state.searchText = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, appendToSet, updateSearchText } = tweetsSlice.actions

export default tweetsSlice.reducer