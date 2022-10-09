import http from "http";
import createError from "http-errors";
import express, { Router, Request, Response, NextFunction } from "express";

import path from "path";
import { GlobalMiddleware } from "./Config/Config.GlobalMiddleware";
import { setViews, setPublic } from "./Config/Config.View";
import errorHandler from "./Middleware/Middleware.ErrorHandler";
const app = express();
const server = http.createServer(app);
const PORT = 8888;

// use global middlewares
app.use(GlobalMiddleware);

import DBconn from "./DB/DB.Connect";

// init view engine
setViews(app, __dirname);

// set public folders
setPublic(app, express, __dirname);

// init routes
require("./Config/Config.Routes").forEach((route) => {
  const _r = express.Router();
  route.routes.forEach((route) => _r.use(route.path(), route.setRouter()));
  app.use(route.path, route.middleware, _r);
});

// error handler
app.use(errorHandler);
// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

server.listen(PORT, () => {
  console.log("Server start on: ", PORT);
});

module.exports = app;
