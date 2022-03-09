const errorHandlerMiddleware = (e, req, res, next) => {
  return (
    res.status(500).json({
      // msg: e
      msg: "Something went wrong, try again later."
    }));
}



module.exports = errorHandlerMiddleware;
