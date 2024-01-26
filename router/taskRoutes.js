const {
  addTask,
  getAllTask,
  deleteTask,
  updateTask,
  completeTask,
} = require("../controller/taskController");

const router = require("express").Router();

//add task
router.post("/", addTask);
router.get("/", getAllTask);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);

// task complete
router.patch("/complete/:id", completeTask);

module.exports = router;
