import { Request, Response, NextFunction } from "express";
export const Routes = [
  {
    path: ["/main", "/"],
    middleware: [
      (req: Request, res: Response, next: NextFunction) => {
        // console.log(req.baseUrl);
        next();
      },
    ],
    routes: [
      require("../Routes/Routes.XXXX"),
      require("../Routes/Routes.YYYY"),
    ],
  },
];
