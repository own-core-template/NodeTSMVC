import { Request, Response, NextFunction } from "express";
import { JoiYYYY } from "../../Models/Models.YYYY";
import { validateInput } from "../../Utils/Utils.Validation";

export const YYYYMiddleware = {
  get: [
    async (req: Request, res: Response, next: NextFunction) => {
      console.log("PASS YYYY GET", req.baseUrl);
      next();
    },
  ],
  post: [
    async (req: Request, res: Response, next: NextFunction) => {
      let body = req.body;
      const valid = validateInput(JoiYYYY, body);
      if (!valid)
        res.status(422).json({
          message: "Invalid request",
          data: body,
        });
      console.log("PASS YYYY POST", req.baseUrl);
      next();
    },
  ],
};
