
//Get all book 
export const getAllBooks = (req, res)=>{
  res.send("All Books")
}


//Create book route 
export const postBook = ("/", (req, res)=>{
  res.send("Save Book")
})


//Getting Single Book
export const getSingleBook =("/:id", (req, res)=>{
  res.send("Get Book by id")
})


//Update Single Book
export const putBook =("/:id", (req, res)=>{
  res.send("Update a Book ")
})


//Delete  Book 
export const deleteBook =("/:id", (req, res)=>{
  res.send("Delete  Book By id ")
})
