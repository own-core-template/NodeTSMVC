/*

*/

import { Request, Response, NextFunction } from "express";
import XXXX from "../Routes/Routes.XXXX";
import YYYY from "../Routes/Routes.YYYY";

export interface IRouter {
  path: string | string[];
  middleware: ((req: Request, res: Response, next: NextFunction) => void)[];
  routes: any;
}

export const Routers: IRouter[] = [
  {
    path: ["/main", "/"],
    middleware: [
      (req: Request, res: Response, next: NextFunction) => {
        console.log(req.baseUrl);
        next();
      },
    ],
    routes: [XXXX, YYYY],
  },
];
