const Task = require("../model/taskModel");
const { ObjectId } = require("mongoose").Types;

module.exports.addTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const result = await Task.create({
      title,
      description,
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
