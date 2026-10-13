import mongoose from "mongoose";

export const connectDB = async()=>{
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not configured")
    }
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected successfully: ${conn.connection.host}`)
  } catch (error) {
    throw error
  }
}