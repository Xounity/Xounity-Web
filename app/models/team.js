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
    unique: true
  },
  linkedinSrc: {
    type: String,
    required: true,
    unique: true
  },
  githubSrc: {
    type: String,
    required: true,
    unique: true
  },
  instaSrc: {
    type: String,
    required: true,
    unique: true
  },
});

export const Team =
  mongoose.models.teams || mongoose.model("teams", teamSchema);