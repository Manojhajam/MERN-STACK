import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  views: Number,
  content: String
});

export const PostModel = mongoose.model("Posts", postSchema);
