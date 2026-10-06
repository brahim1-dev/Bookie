import express from 'express';
import dotenv from 'dotenv'
import bookRouter from './routes/book.routes.js'



dotenv.config()
const app = express();

// app.get("/", (req, res)=>{
//   res.json({message: `the server in running on ${PORT}`})
// })

app.use("/api/books/", bookRouter)

const PORT = process.env.PORT || 5000

app.listen(5000, ()=>{
  console.log(`the server is running on ${PORT}`)
});
