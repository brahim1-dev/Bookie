import express from 'express';
import dotenv from 'dotenv'
import bookRouter from './routes/book.routes.js'
import { connectDB } from './config/db.js';
import cors from 'cors'


dotenv.config()
const app = express();
app.use(cors())
app.use(express.json())


app.use("/api/books/", bookRouter)

const PORT = process.env.PORT || 5000


connectDB()
app.listen(5000, ()=>{
  console.log(`the server is running on ${PORT}`)
});
