import http from "http";
import createError from "http-errors";
import express, {
  Application,
  Express,
  Router,
  Request,
  Response,
  NextFunction,
} from "express";
import swaggerUi from "swagger-ui-express";
import { GlobalMiddleware } from "./Config/Config.GlobalMiddleware";
import { setViews, setPublic } from "./Config/Config.View";
import { ErrorHandler } from "./Middleware/Middleware.ErrorHandler";

import { IRouter, Routers } from "./Config/Config.Routes";
import BROUTER from "./Base/ROUTER";

const app: Application = express();
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
Routers.forEach((route: IRouter) => {
  const _r: Router = express.Router();
  route.routes.forEach((route: BROUTER) =>
    _r.use(route.routerName(), route.setRouter())
  );
  app.use(route.path, route.middleware, _r);
});

// catch 404 and forward to error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(ErrorHandler);

// start server
server.listen(PORT, () => {
  console.log("Server start on: ", PORT);
});

module.exports = app;
