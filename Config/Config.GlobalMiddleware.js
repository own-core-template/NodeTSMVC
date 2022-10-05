const { urlencoded, json } = require("body-parser");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const flash = require("connect-flash");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const logger = require("morgan");
const cors = require("cors");

module.exports.GlobalMiddleware = [
  urlencoded({ extended: true, limit: "10kb" }),
  json({ limit: "10kb" }),
  logger("dev"), // common, dev,
  mongoSanitize(),
  flash(),
  xssClean(),
  hpp({
    whitelist: ["sort", "expands"],
  }),
  cors("*"),
  compression(),
];
