const Task = require("../model/taskModel");

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
