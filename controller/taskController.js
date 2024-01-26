const Task = require("../model/taskModel");
const { ObjectId } = require("mongoose").Types;

module.exports.addTask = async (req, res, next) => {
  try {
    const task = req.body;

    // Validate task data
    if (!task.title || task.title.trim() === "") {
      return res.status(400).json({
        status: false,
        message: "Requird task tile or Task title cannot be empty",
      });
    }
    const result = await Task.create({
      ...task,
    });
    if (result) {
      return res.status(200).json({
        status: true,
        message: "task add successfully",
        result: result,
      });
    } else {
      return res
        .status(400)
        .json({ status: false, message: "something wrong. try again" });
    }
  } catch (err) {
    console.log(err);
    next();
  }
};
module.exports.getAllTask = async (req, res, next) => {
  try {
    const result = await Task.find({});
    if (result) {
      return res.status(200).json({
        status: true,
        message: "task fetched successfully",
        result: result,
      });
    } else {
      return res
        .status(400)
        .json({ status: false, message: "something wrong. try again" });
    }
  } catch (err) {
    console.log(err);
    next();
  }
};
module.exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Task.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount > 0) {
      return res.status(200).json({
        status: true,
        message: "task delete successfully",
        result: result,
      });
    } else {
      return res
        .status(500)
        .json({ status: false, message: "something wrong. try again" });
    }
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const result = await Task.updateOne({ _id: id }, data);
    if (result.acknowledged) {
      return res.status(200).json({
        status: true,
        message: "task update successfully",
        result: result,
      });
    } else {
      return res
        .status(400)
        .json({ status: false, message: "something wrong. try again" });
    }
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports.completeTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    //check is it already complete

    const task = await Task.findOne({ _id: id });

    if (task.complete) {
      return res.json({ status: true, message: "Task already completed" });
    }

    const result = await Task.updateOne(
      { _id: new ObjectId(id) },
      { $set: { complete: true } }
    );

    if (result.acknowledged) {
      return res.status(200).json({
        status: true,
        message: "Task updated successfully",
        result: result,
      });
    } else {
      return res.status(404).json({
        status: false,
        message: "something wrong try again.",
      });
    }
  } catch (error) {
    console.error("Error completing task:", error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
