import { Request, Response, NextFunction } from "express";
import BROUTER, { METHODS } from "../Base/ROUTER";
import { isAPI } from "../Utils/Utils.Common";
import { sendSuccess, sendError } from "../Utils/Utils.Response";

import ctrl from "../Controllers/Controllers.XXXX";
import middleware from "../Middleware/Routes/Middleware.Routes.XXXX";
import { IXXXX } from "Models/Models.XXXX";
class XXXXRoutes extends BROUTER {
  constructor() {
    super("/XXXX");
  }

  R = [
    {
      path: ["/test/:id"],
      method: METHODS.GET,
      handler: this.XXXXTest,
      permissions: [],
      middleware: [middleware.get],
    },
    {
      path: ["/detail/:id"],
      method: METHODS.GET,
      handler: this.XXXXPage,
      permissions: [],
      middleware: [middleware.get],
    },
    {
      path: ["/create", "/new"],
      method: METHODS.POST,
      handler: this.XXXXCreate,
      permissions: [],
      middleware: [middleware.post],
    },
  ];

  private async XXXXTest(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let query = req.query;
    let params = req.params;
    const doc = await ctrl.getOneTestXXXX(params.id);
    if (!isAPI(query)) {
      return res.render("XXXXPage", { title: "XXXXTest" });
    }
    if (!doc) sendError(res, "Doc with ID XXXXTest not found!!!");
    else sendSuccess<IXXXX>(res, doc);
  }

  private async XXXXPage(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let query = req.query;
    let params = req.params;
    const { ok, data, message } = await ctrl.getOneXXXX(params.id);
    if (!isAPI(query)) {
      return res.render("XXXXPage", { title: "XXXX" });
    }
    if (!ok) sendError(res, "Doc with ID XXXX not found!!!");
    else sendSuccess<IXXXX>(res, data);
  }

  private async XXXXCreate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let body = req.body;
    const { ok, data, message } = await ctrl.createOneXXXX(body);
    if (!ok) sendError(res, "Can't Create");
    else sendSuccess<IXXXX>(res, data, "Create Successful");
  }
}

export = new XXXXRoutes();
