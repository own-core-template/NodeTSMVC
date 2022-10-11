import { Request, Response, NextFunction } from "express";
import { isAPI } from "../../Utils/Utils.Common";
import { JoiXXXX } from "../../Models/Models.XXXX";
import { validateInput } from "../../Utils/Utils.Validation";

export class XXXXMiddleware {
  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    // if (!isAPI(req.query)) {
    //   res.render("XXXXPage", { title: "XXXX" });
    //   return;
    // }
    console.log("PASS XXXX Detail - GET", req.baseUrl);
    next();
  }

  public async post(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let body = req.body;
    const valid = validateInput(JoiXXXX, body);
    if (!valid) {
      res.status(422).json({
        message: "Invalid Input",
        data: body,
      });
      return;
    }
    console.log("PASS XXXX Create - POST", req.baseUrl);
    next();
  }
}
