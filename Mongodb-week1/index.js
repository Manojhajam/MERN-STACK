import express from "express";
import mongoose from "mongoose";
import { PostModel } from "./Models/postModel.js";
import { UserModel } from "./Models/userModels.js";

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

app.get("/getPosts", async (req, res) => {
  const posts = await PostModel.find();

  res.json({
    success: true,
    data: posts
  });
});

app.put("/updatePost/:postId", async (req, res) => {
  const { title, views, content } = req.body;
  
  if (!title || views < 0 || !content) {
    return res.send("post Data is invalid!!!");
  }

  const { postId } = req.params;
  // const reqPostId = reqParams.postId;
  const foundPost = await PostModel.findById(postId);

  if (foundPost) {
    const Updatedpost = await PostModel.findByIdAndUpdate(postId, {
      title,
      views,
      content
    }, {
      new: true
    });

    return res.json({
      success: true,
      data: Updatedpost
    });
  }
  res.json(`Poat with id: ${postId} not found!!!`);
});

app.delete("/deletePost/:postId", async (req, res) => {
  try {
    const { postId } = req.params;

    const foundPost = await PostModel.findById(postId);
    if (foundPost) {
      const response = await PostModel.findByIdAndDelete(postId);
      console.log(response);

      res.json({
        success: true,
        message: `Post with id: ${postId} is deleted!`
      });
    }
    res.send("Post not found");
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    });
  }
});


//User

app.post('/createUsers', async (req, res) => {
  const reqBody = req.body;
  const newUSers =await UserModel.create(reqBody)

  res.json({
    success: true,
    data: newUSers
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
