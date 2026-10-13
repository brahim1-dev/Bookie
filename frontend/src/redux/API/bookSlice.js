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

export const fetchBook = createAsyncThunk('books/fetchBook', 
  async(id, thunkAPI)=>{
    try {
      const response = await fetch(`${API_URL}/${id}`)
      if(!response.ok) throw new Error("Failed to fetch book")
        return await response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)


export const createBook = createAsyncThunk(
  'books/createBook', async(bookData, thunkAPI)=>{
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(bookData)
      })
      if(!response.ok) throw new Error("Failed to create book")
        return await response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const updateBook = createAsyncThunk(
  'books/updateBook', async({id, bookData}, thunkAPI)=>{
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(bookData)
      })
      if(!response.ok) throw new Error("Failed to update book")
        return await response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteBook = createAsyncThunk('books/deleteBook',
  async(id, thunkAPI)=>{
    try {
      const response = await fetch(`${API_URL}/${id}`,{
        method:"DELETE"
      })
      const data = await response.json()
      if(!response.ok) throw new Error(data.message || "Failed to delete book")
      return data._id
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
    // Fetch Single Book.
     .addCase(fetchBook.pending, (state)=>{
      state.isLoading=true;
    })

    .addCase(fetchBook.fulfilled, (state, action)=>{
      state.isLoading=false;
      state.isSuccess=true;
      state.currentBook=action.payload
    })
    .addCase(fetchBook.rejected, (state, action)=>{
      state.isLoading=false;
      state.isError=true;
      state.message=action.payload || "Something went wrong"
    })
    // Create Book.
     .addCase(createBook.pending, (state)=>{
      state.isLoading=true;
    })

    .addCase(createBook.fulfilled, (state, action)=>{
      state.isLoading=false;
      state.isSuccess=true;
      state.books.unshift(action.payload)
    })
    .addCase(createBook.rejected, (state, action)=>{
      state.isLoading=false;
      state.isError=true;
      state.message=action.payload || "Something went wrong"
    })
    //Edit or Update Book
     .addCase(updateBook.pending, (state)=>{
      state.isLoading=true;
    })

    .addCase(updateBook.fulfilled, (state, action)=>{
      state.isLoading=false;
      state.isSuccess=true;
      state.currentBook = action.payload
      state.books = state.books.map((book)=>book._id===action.payload._id?action.payload:book)
    })
    .addCase(updateBook.rejected, (state, action)=>{
      state.isLoading=false;
      state.isError=true;
      state.message=action.payload || "Something went wrong"
    })
    //Delete Book
     .addCase(deleteBook.pending, (state)=>{
      state.isLoading=true;
    })

    .addCase(deleteBook.fulfilled, (state, action)=>{
      state.isLoading=false;
      state.isSuccess=true;
      state.books = state.books.filter((book)=>String(book._id)!==String(action.payload))
    })
    .addCase(deleteBook.rejected, (state, action)=>{
      state.isLoading=false;
      state.isError=true;
      state.message=action.payload || "Something went wrong"
    })
    
  }
})

export const {resetState, clearCurrentBook} = booksSlice.actions;
export default booksSlice.reducer