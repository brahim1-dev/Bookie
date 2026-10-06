import express from 'express';
import dotenv from 'dotenv'

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000

app.listen(5000, ()=>{
  console.log(`the server is running on ${PORT}`)
});
