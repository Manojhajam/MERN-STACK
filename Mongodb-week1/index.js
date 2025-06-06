import express from "express";
import mongoose from "mongoose";
import { PostModel } from "./Models/postModel.js";

const app = express();
app.use(express.json());

const connectDB = async () => {
  try {
    const response = await mongoose.connect("mongodb://localhost:27017/test");

    // console.log(response.connection.name);
    console.log(`Connected to DB: ${response.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};

connectDB();
const PORT = 5000;

app.get("/test", (req, res) => {
  res.send("Test Route! Hello!");
});

app.post("/createPost", async (req, res) => {
  const reqBody = req.body;
  const newpost = await PostModel.create(reqBody);

  res.json({
    success: true,
    data: newpost
  });
});

app.get('/getPosts', async(req, res) => {
    const posts = await PostModel.find();

    res.json({
        success: true,
        data: posts
    });
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
