import Book from "../models/book.model.js"




//Get all book 
export const getAllBooks = async (req, res)=>{
  // res.send("All Books")
  try {
    const books = await Book.find()
    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}


//Getting Single Book
export const getSingleBook =async (req, res)=>{
  // res.send("Get Book by id")
  try {
    const book = await Book.findById(req.params.id)
    if(!book){
      return res.status(404).json({message:error.message})
    }
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}


//Create book route 
export const postBook = async (req, res)=>{
  // res.send("Save Book")
  try {
    //Get book data from the request;
    // console.log(req.body)
    const {title, author, price, description, coverImage, downloadLink} = req.body

    //check if all fields are filled
    if(!title || !author || !price || !description){
      return res.status(400).json({message: "All fields are required"})
    }

    //create a book
    const book = await Book.create({
      title, author, price, description, coverImage, downloadLink 
    })
    res.status(201).json(book)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


//Update Single Book
export const putBook = (req, res)=>{
  res.send("Update a Book ")
}


//Delete  Book 
export const deleteBook =(req, res)=>{
  res.send("Delete  Book By id ")
}
