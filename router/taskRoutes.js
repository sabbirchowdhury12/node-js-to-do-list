const {
  addTask,
  getAllTask,
  deleteTask,
} = require("../controller/taskController");

const router = require("express").Router();

//add task
router.post("/", addTask);
router.get("/", getAllTask);
router.delete("/:id", deleteTask);

module.exports = router;
