module.exports.sendResponse = (res, statusCode, status, message, result) => {
  return res.status(statusCode).json({
    status,
    message,
    result,
  });
};
