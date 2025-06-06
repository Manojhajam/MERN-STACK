import express from "express";
const app = express();
const PORT = 5000;

app.use(express.json());

let Users = [];

app.get("/getPost", (req, res) => {
  return res.json({
    success: true,
    data: Users
  });
});

app.get("/createUsers", (req, res) => {
  const reqBody = req.body;
  console.log(reqBody);
  Users.push(reqBody);

  res.json({
    success: true,
    data: Users
  });
});

app.put("/updateUsers/:userId", (req, res) => {
  const reqBody = req.body;
  const reqparams = req.params;
  const paramsIdno = parseInt(reqparams.userId);

  const UpdatedUser = Users.map(user => {
    if (user.id === paramsIdno) {
      return reqBody;
    } else {
      return Users;
    }
  });
  Users = UpdatedUser;
  res.json({
    success: true,
    data: Users
  });
});

app.delete("/deleteUsers", (req, res) => {
  const reqBody = req.body;
  const deleteUser = Users.filter((user) => {
    return user.id !== reqBody.id
  });
  Users = deleteUser;
  res.json({
    success: true,
    data: Users
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

