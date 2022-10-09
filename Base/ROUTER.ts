import { Router, Request, Response, NextFunction } from "express";
import { catchAsync } from "../Utils/Utils.CatchAsync";

export enum METHODS {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
}

interface IRoute {
  path: string | [string];
  method: METHODS;
  handler: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  permissions: [string];
  middleware: ((req: Request, res: Response, next: NextFunction) => void)[];
}

export default abstract class ROUTER {
  private m_routerName: string;
  private m_router: Router = Router();
  protected abstract readonly R: Array<IRoute>;

  constructor(p_routerName: string) {
    this.m_routerName = p_routerName;
  }

  public path() {
    return this.m_routerName;
  }

  public setRouter(): Router {
    // Set HTTP method, middleware, and handler for each route
    // Returns Router object, which we will use in Server class
    for (const route of this.R) {
      for (const mw of route.middleware) {
        this.m_router.use(route.path, mw);
      }
      try {
        this.m_router[route.method](route.path, catchAsync(route.handler));
      } catch (err) {
        console.error("Not a valid method");
      }
    }
    // Return router instance (will be usable in Server class)
    return this.m_router;
  }
}

module.exports.BROUTER = ROUTER;
