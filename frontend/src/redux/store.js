import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './API/bookSlice'

export const store = configureStore({
  reducer:{
    book:booksReducer
  }
})

