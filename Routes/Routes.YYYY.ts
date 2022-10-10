import { Request, Response, NextFunction } from "express";
import BROUTER, { METHODS } from "../Base/ROUTER";
import { isAPI } from "../Utils/Utils.Common";
import { sendSuccess, sendError } from "../Utils/Utils.Response";

import ctrl from "../Controllers/Controllers.YYYY";
import middleware from "../Middleware/Routes/Middleware.Routes.YYYY";
import { IYYYY } from "Models/Models.YYYY";
class YYYYRoutes extends BROUTER {
  constructor() {
    super("/YYYY");
  }

  R = [
    {
      path: ["/test/:id"],
      method: METHODS.GET,
      handler: this.YYYYTest,
      permissions: [],
      middleware: [middleware.get],
    },
    {
      path: ["/detail/:id"],
      method: METHODS.GET,
      handler: this.YYYYPage,
      permissions: [],
      middleware: [middleware.get],
    },
    {
      path: ["/create", "/new"],
      method: METHODS.POST,
      handler: this.YYYYCreate,
      permissions: [],
      middleware: [middleware.post],
    },
  ];

  private async YYYYTest(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let query = req.query;
    let params = req.params;
    const doc = await ctrl.getOneTestYYYY(params.id);
    if (!isAPI(query)) {
      return res.render("YYYYPage", { title: "YYYYTest" });
    }
    if (!doc) sendError(res, "Doc with ID YYYYTest not found!!!");
    else sendSuccess<IYYYY>(res, doc);
  }

  private async YYYYPage(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let query = req.query;
    let params = req.params;
    const { ok, data, message } = await ctrl.getOneYYYY(params.id);
    if (!isAPI(query)) {
      return res.render("YYYYPage", { title: "YYYY" });
    }
    if (!ok) sendError(res, "Doc with ID YYYY not found!!!");
    else sendSuccess<IYYYY>(res, data);
  }

  private async YYYYCreate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    let body = req.body;
    const { ok, data, message } = await ctrl.createOneYYYY(body);
    if (!ok) sendError(res, "Can't Create");
    else sendSuccess<IYYYY>(res, data, "Create Successful");
  }
}

export = new YYYYRoutes();
