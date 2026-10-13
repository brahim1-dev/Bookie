import express from 'express';
import dotenv from 'dotenv'
import bookRouter from './routes/book.routes.js'
import { connectDB } from './config/db.js';
import cors from 'cors'
import path from 'path'

dotenv.config()
const app = express();
app.use(cors())
app.use(express.json())


app.use("/api/books/", bookRouter)

const PORT = Number(process.env.PORT) || 5000

const __dirname = path.resolve()
if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname, "frontend/dist")))
  app.get(/./, (req, res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  })
}

const startServer = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`)
    process.exitCode = 1
  }
}

startServer()
