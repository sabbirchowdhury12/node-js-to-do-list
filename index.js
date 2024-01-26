const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const taskRouter = require("./router/taskRoutes");
const port = 5000;

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/task", taskRouter);

app.listen(port, async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/todo-list")
    .then((res) => console.log("database connect successfully"))
    .catch((err) => console.log(err));
  console.log(`app listening on port ${port}`);
});
