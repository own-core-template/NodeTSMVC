import http from "http";
import createError from "http-errors";
import express, { Express, Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";
import { GlobalMiddleware } from "./Config/Config.GlobalMiddleware";
import { setViews, setPublic } from "./Config/Config.View";
import { ErrorHandler } from "./Middleware/Middleware.ErrorHandler";

import { RegisterRoutes } from "./Routes/routes";

// import { IRouter, Routers } from "./Config/Config.Routes";
// import BROUTER from "./Base/ROUTER";

const app: Express = express();
const server: http.Server = http.createServer(app);
const PORT: number = 8888;

// use global middlewares
app.use(GlobalMiddleware);

// init && connect to DB
import * as DBconn from "./DB/DB.Connect";
DBconn;

// init view engine
setViews(app, __dirname);

// set public folders
setPublic(app, express, __dirname);

// init Swagger Doc
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

// init routes
RegisterRoutes(app);

// error handler
app.use(ErrorHandler);

// catch 404 and forward to error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// start server
server.listen(PORT, () => {
  console.log("Server start on: ", PORT, "\nDocument: /docs");
});

module.exports = app;
