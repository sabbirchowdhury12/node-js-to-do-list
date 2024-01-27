const Task = require("../model/taskModel");
const { sendResponse } = require("../utils/sendResponse");
const { ObjectId } = require("mongoose").Types;

module.exports.addTask = async (req, res, next) => {
  try {
    const task = req.body;

    // Validate task data
    if (!task.title || task.title.trim() === "") {
      return sendResponse(
        res,
        404,
        false,
        "Requird task tile or Task title cannot be empty"
      );
    }
    const result = await Task.create({
      ...task,
    });
    if (result) {
      return sendResponse(res, 200, true, "task add successfully", result);
    } else {
      return sendResponse(res, 404, false, "something wrong. try again");
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
      return sendResponse(res, 200, true, "task fetched successfully", result);
    } else {
      return sendResponse(res, 404, false, "something wrong. try again");
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
      return sendResponse(res, 200, true, "task delete successfully", result);
    } else {
      return sendResponse(res, 404, false, "something wrong. try again");
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
      return sendResponse(res, 200, true, "task update successfully", result);
    } else {
      return sendResponse(res, 404, false, "something wrong. try again");
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
      return sendResponse(res, 404, false, "Task already completed");
    }

    const result = await Task.updateOne(
      { _id: new ObjectId(id) },
      { $set: { complete: true } }
    );

    if (result.acknowledged) {
      return sendResponse(
        res,
        200,
        true,
        "Task completed successfully",
        result
      );
    } else {
      sendResponse(res, 404, false, "something wrong. try again");
    }
  } catch (error) {
    console.error(error);
    next();
  }
};
