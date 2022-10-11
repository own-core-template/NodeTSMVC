import { Request, Response, NextFunction } from "express";
import { isAPI } from "../../Utils/Utils.Common";
import { JoiYYYY } from "../../Models/Models.YYYY";
import { validateInput } from "../../Utils/Utils.Validation";

export class YYYYMiddleware {
  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    // if (!isAPI(req.query)) {
    //   res.render("YYYYPage", { title: "YYYY" });
    //   return;
    // }
    console.log("PASS YYYY Detail - GET", req.baseUrl);
    next();
  }

  public async post(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let body = req.body;
    const valid = validateInput(JoiYYYY, body);
    if (!valid) {
      res.status(422).json({
        message: "Invalid Input",
        data: body,
      });
      return;
    }
    console.log("PASS YYYY Create - POST", req.baseUrl);
    next();
  }
}
