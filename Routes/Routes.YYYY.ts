import { Request, Response, NextFunction } from "express";
import BROUTER, { METHODS } from "../Base/ROUTER";
import { YYYYMiddleware } from "../Middleware/Routes/Middleware.Routes.YYYY";
import { isAPI } from "../Utils/Utils.Common";
import { sendSuccess, sendError } from "../Utils/Utils.Response";

import ctrl from "../Controllers/Controllers.YYYY";
class YYYYRoutes extends BROUTER {
  constructor() {
    super("/YYYY");
  }

  R = [
    {
      path: ["/detail/:id"],
      method: METHODS.GET,
      handler: this.YYYYPage,
      permissions: [],
      middleware: YYYYMiddleware.get,
    },
    {
      path: ["/create", "/new"],
      method: METHODS.POST,
      handler: this.YYYYCreate,
      permissions: [],
      middleware: YYYYMiddleware.post,
    },
  ];

  private async YYYYPage(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let query = req.query;
    const doc = await ctrl.getYYYY("1");
    if (!isAPI(query)) {
      return res.render("YYYYPage", { title: "YYYY" });
    }
    if (!doc) sendError(res, "Doc with ID YYYY not found!!!");
    else sendSuccess(res, doc);
  }

  private async YYYYCreate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let body = req.body;
    const doc = await ctrl.createYYYY(body);
    if (!doc) sendError(res, "Can't Create");
    else sendSuccess(res, doc, "Create Successful");
  }
}

export = new YYYYRoutes();
