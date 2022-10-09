import { Request, Response, NextFunction } from "express";
import { XXXXModel } from "../Models/Models.XXXX";
import { BCRUD } from "../Base/CRUD";
import { objContainKey } from "../Utils/Utils.Common";

export = {
  XXXXPage: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const CRUD = new BCRUD(res, XXXXModel);

    let query = req.query;
    if (!objContainKey(query, "api")) {
      return res.render("XXXXPage", { title: "XXXX" });
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
