import http from "http";
import createError from "http-errors";
import express, { Router, Request, Response, NextFunction } from "express";

import path from "path";
import { GlobalMiddleware } from "./Config/Config.GlobalMiddleware";
import { setViews, setPublic } from "./Config/Config.View";
import errorHandler from "./Middleware/Middleware.ErrorHandler";

import { IRouter, Routers } from "./Config/Config.Routes";
import BROUTER from "./Base/ROUTER";

const app = express();
const server = http.createServer(app);
const PORT = 8888;

// use global middlewares
app.use(GlobalMiddleware);

import * as DBconn from "./DB/DB.Connect";

// init view engine
setViews(app, __dirname);

// set public folders
setPublic(app, express, __dirname);

// init routes
Routers.forEach((route: IRouter) => {
  const _r: Router = express.Router();
  route.routes.forEach((route: BROUTER) =>
    _r.use(route.routerName(), route.setRouter())
  );
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
