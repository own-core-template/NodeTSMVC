import { Request, Response, NextFunction } from "express";
import BROUTER, { METHODS } from "../Base/ROUTER";
import { XXXXMiddleware } from "../Middleware/Routes/Middleware.Routes.XXXX";
import { isAPI } from "../Utils/Utils.Common";
import { sendSuccess, sendError } from "../Utils/Utils.Response";

import ctrl from "../Controllers/Controllers.XXXX";
class XXXXRoutes extends BROUTER {
  constructor() {
    super("/XXXX");
  }

  R = [
    {
      path: ["/detail/:id"],
      method: METHODS.GET,
      handler: this.XXXXPage,
      permissions: [],
      middleware: XXXXMiddleware.get,
    },
    {
      path: ["/create", "/new"],
      method: METHODS.POST,
      handler: this.XXXXCreate,
      permissions: [],
      middleware: XXXXMiddleware.post,
    },
  ];

  private async XXXXPage(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let query = req.query;
    const doc = await ctrl.getXXXX("1");
    if (!isAPI(query)) {
      return res.render("XXXXPage", { title: "XXXX" });
    }
    if (!doc) sendError(res, "Doc with ID XXXX not found!!!");
    else sendSuccess(res, doc);
  }

  private async XXXXCreate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let body = req.body;
    const doc = await ctrl.createXXXX(body);
    if (!doc) sendError(res, "Can't Create");
    else sendSuccess(res, doc, "Create Successful");
  }
}

export = new XXXXRoutes();
