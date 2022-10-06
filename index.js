const http = require("http");
const createError = require("http-errors");
const express = require("express");
let engine = require("ejs"),
  LRU = require("lru-cache");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const server = http.createServer(app);
const path = require("path");
const { GlobalMiddleware } = require("./Config/Config.GlobalMiddleware");
const errorHandler = require("./Middleware/Middleware.ErrorHandler");
const PORT = 8888;

// use global middlewares
app.use(GlobalMiddleware);

const DBconn = require("./DB/DB.Connect");

// init view engine
// engine.cache = new LRU({ });
app.set("views", path.join(__dirname, "Views"));
app.set("view engine", "ejs");
app.set("view cache", true);
app.use(expressLayouts);
app.set("layout", "Layouts/layout");

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
