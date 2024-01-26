const { addTask } = require("../controller/taskController");

const router = require("express").Router();

//add task
router.post("/", addTask);

module.exports = router;
