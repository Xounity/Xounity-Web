import mongoose from "mongoose";

export const connectDB = async (url) => {
  const connected = await mongoose.connect(url);
  if(connected){
    console.log("MongoDB Connected Successfully...");
  }
  else{
    console.error("Failed to connect MongoDB...");
  }
};