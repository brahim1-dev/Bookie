import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title:{
      type:String,
      required: [true, "Please add a book title"]
    },
    author:{
      type:String,
      required: [true, "Please add author name"]
    },
    price:{
      type:String,
      required: [true, "Please add validation price"]
    },
    description:{
      type:String,
      required: [true, "Please add description"]
    },
    coverImage:{
      type:String,
      required: false,
    },
  },{
    timestamp:true
  }
)

const Book = mongoose.model('Book', bookSchema)
export default Book;