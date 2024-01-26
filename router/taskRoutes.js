const {
  addTask,
  getAllTask,
  deleteTask,
  updateTask,
} = require("../controller/taskController");

const router = require("express").Router();

//add task
router.post("/", addTask);
router.get("/", getAllTask);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);

module.exports = router;
