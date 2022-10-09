import { Request, Response, NextFunction } from "express";
const { YYYYModel } = require("../Models/Models.YYYY");
import { BCRUD } from "../Base/CRUD";
import { objContainKey } from "../Utils/Utils.Common";

export = {
  YYYYPage: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
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
  },
};
