import mongoose, { Schema } from "mongoose";

const teamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  linkedinSrc: {
    type: String,
    required: true,
  },
  githubSrc: {
    type: String,
    required: true,
  },
  instaSrc: {
    type: String,
    required: true,
  },
});

export const Team =
  mongoose.models.teams || mongoose.model("teams", teamSchema);