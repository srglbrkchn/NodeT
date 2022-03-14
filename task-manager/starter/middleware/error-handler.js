const {CustomAPIError} = require("../errors/custom-error.js");

const errorHandlerMiddleware = (e, req, res, next) => {
  if(e instanceof CustomAPIError) {
    return res.status(e.statusCode).json({
      msg: e.message
    });
  }

  return (
    res.status(500).json({
      msg: "Something weng wrong. Please try again."
    }));
}



module.exports = errorHandlerMiddleware;
