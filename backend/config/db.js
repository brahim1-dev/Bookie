import mongoose from "mongoose";

export const connectDB = async()=>{
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017"
    )
    console.log(`mongoDb Connected Successfully: ${conn.connection.host}`)
  } catch (error) {
    console.error(error)
    process.exit
  }
}