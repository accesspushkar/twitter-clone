import { configureStore } from '@reduxjs/toolkit'
import tweetsSlice from './tweetsSlice'
export const store = configureStore({
  reducer: {
    tweets: tweetsSlice,
  },
})