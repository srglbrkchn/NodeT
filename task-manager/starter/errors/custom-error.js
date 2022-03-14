

class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// function creates custom error authomatically
const createCustomError = (msg, statusCode)=> {
  return new CustomAPIError(msg, statusCode);
}


module.exports = {createCustomError, CustomAPIError};
