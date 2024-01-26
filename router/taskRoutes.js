const { addTask, getAllTask } = require("../controller/taskController");

const router = require("express").Router();

//add task
router.post("/", addTask);
router.get("/", getAllTask);

module.exports = router;
