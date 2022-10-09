import { Request, Response, NextFunction } from "express";

export = [
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("PASS XXXX", req.baseUrl);
    next();
  },
];
