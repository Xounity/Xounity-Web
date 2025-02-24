import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
    href: {
      type: String,
      required: true,
      unique: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    watchLink: {
      type: String,
      required: true,
      unique: true,
    },
  });
  
  export const Event = mongoose.models.events || mongoose.model("events", eventSchema);