import { Request, Response, NextFunction } from "express";
import { JoiXXXX } from "../../Models/Models.XXXX";
import { validateInput } from "../../Utils/Utils.Validation";

export const XXXXMiddleware = {
  get: [
    async (req: Request, res: Response, next: NextFunction) => {
      console.log("PASS XXXX GET", req.baseUrl);
      next();
    },
  ],
  post: [
    async (req: Request, res: Response, next: NextFunction) => {
      let body = req.body;
      const valid = validateInput(JoiXXXX, body);
      if (!valid)
        res.status(422).json({
          message: "Invalid request",
          data: body,
        });
      console.log("PASS XXXX POST", req.baseUrl);
      next();
    },
  ],
};
