import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books:[],
  currentBook: null,
  isError: false,
  isSuccess:false,
  isLoading: false,
  message:''
}
const booksSlice = createSlice ({
  name:"books",
  initialState,
  reducers:{
    resetState:(state)=>{
      state.isError=false;
      state.isSuccess=false;
      state.isLoading=false;
      state.message=""
    },
    clearCurrentBook:(state)=>{
      state.currentBook=null
    }
  },
  extraReducers:(builder)=>{

  }
})

export const {resetState, clearCurrentBook}= booksSlice.actions;
export default booksSlice.reducer