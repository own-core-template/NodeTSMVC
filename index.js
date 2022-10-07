const http = require("http");
const createError = require("http-errors");
const express = require("express");
const app = express();
const server = http.createServer(app);
const path = require("path");
const { GlobalMiddleware } = require("./Config/Config.GlobalMiddleware");
const { setViews, setPublic } = require("./Config/Config.View");
const errorHandler = require("./Middleware/Middleware.ErrorHandler");
const PORT = 8888;

// use global middlewares
app.use(GlobalMiddleware);

const DBconn = require("./DB/DB.Connect");

// init view engine
setViews(app, __dirname);

// set public folders
setPublic(express, __dirname);

// init routes
require("./Config/Config.Routes").forEach((route) => {
  const _r = express.Router();
  route.routes.forEach((route) => _r.use(route.path(), route.setRouter()));
  app.use(route.path, route.middleware, _r);
});

// error handler
app.use(errorHandler);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

server.listen(PORT, () => {
  console.log("Server start on: ", PORT);
});

module.exports = app;
