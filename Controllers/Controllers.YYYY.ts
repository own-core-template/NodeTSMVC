import { Request, Response, NextFunction } from "express";
import { YYYYModel } from "../Models/Models.YYYY";
import { BCRUD } from "../Base/CRUD";
import { objContainKey } from "../Utils/Utils.Common";
import { Route, Get } from "tsoa";

@Route("YYYY")
class YYYYController {
  @Get("/,/page")
  public async YYYYPage(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const CRUD = new BCRUD(res, YYYYModel);

    let query = req.query;
    if (!objContainKey(query, "api")) {
      return res.render("YYYYPage", { title: "YYYY" });
    }

    switch (String(query.api).toLowerCase()) {
      case "json":
        return await CRUD.getAuthor();
      case "xml":
        res.status(200).send("XML API");
        return;
    }
  }
}

export = new YYYYController();
