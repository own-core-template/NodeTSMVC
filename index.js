const createError = require("http-errors");
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const path = require("path");
const ejs = require("ejs"),
  LRU = require("lru-cache");
const expressLayout = require("express-ejs-layouts");
const { GlobalMiddleware } = require("./Config/Config.GlobalMiddleware");
const PORT = 8888;

// use global middlewares
app.use(GlobalMiddleware);

// init routes
require("./Config/Config.Routes").forEach((route) => {
  const _r = require("express").Router();
  route.routes.forEach((route) => _r.use(route.path(), route.setRouter()));
  app.use(route.path, route.middleware, _r);
});

// init view engine
// ejs.cache = new LRU(100);
app.set("views", path.join(__dirname, "Views"));
app.set("view engine", "ejs");
app.set("view cache", true);
app.use(expressLayout);
app.set("layout", "Layouts/layout");

// error handler

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

server.listen(PORT, () => {
  console.log("Server start on: ", PORT);
});

module.exports = app;
