import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name: String,
    views: Number,
    content: String
    
})

export const UserModel = mongoose.model("Users", postSchema)