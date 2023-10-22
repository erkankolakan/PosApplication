import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    cart:cartSlice //-> oluşturmış olduğumuz slice ler
  },
})