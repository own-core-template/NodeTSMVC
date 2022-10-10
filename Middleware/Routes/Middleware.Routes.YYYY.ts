import { Request, Response, NextFunction } from "express";
import { JoiYYYY } from "../../Models/Models.YYYY";
import { validateInput } from "../../Utils/Utils.Validation";
import { Route, Middlewares } from "tsoa";
@Route("YYYY")
class YYYYMiddleware {
  @Middlewares()
  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    console.log("PASS YYYY GET", req.baseUrl);
    next();
  }
  @Middlewares()
  public async post(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let body = req.body;
    const valid = validateInput(JoiYYYY, body);
    if (!valid)
      res.status(422).json({
        message: "Invalid request",
        data: body,
      });
    console.log("PASS YYYY POST", req.baseUrl);
    next();
  }
}

export = new YYYYMiddleware();
