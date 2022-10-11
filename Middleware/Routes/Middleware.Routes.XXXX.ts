import { Request, Response, NextFunction } from "express";
import { JoiXXXX } from "../../Models/Models.XXXX";
import { validateInput } from "../../Utils/Utils.Validation";
import { Route, Middlewares } from "tsoa";

@Route("XXXX")
export class XXXXMiddleware {
  @Middlewares()
  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    console.log("PASS XXXX GET", req.baseUrl);
    next();
  }
  @Middlewares()
  public async post(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let body = req.body;
    const valid = validateInput(JoiXXXX, body);
    if (!valid)
      res.status(422).json({
        message: "Invalid request",
        data: body,
      });
    console.log("PASS XXXX POST", req.baseUrl);
    next();
  }
}
