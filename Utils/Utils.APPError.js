class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.ok = 0;
    this.msg = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
