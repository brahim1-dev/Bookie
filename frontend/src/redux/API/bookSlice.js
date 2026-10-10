import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:5000/api/books"
export const fetchBooks = createAsyncThunk('books/fetchBooks',
  async(_, thunkAPI)=>{
    try {
      
      const response = await fetch(API_URL);
      if(!response.ok){
        throw new Error("Failed to fetch books")
      }
      return await response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

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
    builder.addCase(fetchBooks.pending, (state)=>{
      state.isLoading=true;
      state.isError=false;
      state.isSuccess=false;
      state.message=""
    })
    .addCase(fetchBooks.fulfilled, (state, action)=>{
      state.isSuccess=true;
      state.isLoading=false;
      state.isError=false;
      state.message="";
      state.books=action.payload
    })
    .addCase(fetchBooks.rejected, (state, action)=>{
      state.isLoading=false;
      state.isError=true;
      state.message=action.payload || "Something went wrong"
    })
  }
})

export const {resetState, clearCurrentBook} = booksSlice.actions;
export default booksSlice.reducer