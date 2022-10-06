const { YYYYModel } = require("../Models/Models.YYYY");
const { BCONTROLLER, BCRUD } = require("../Base/CONTROLLER");

const { objContainKey } = require("../Utils/Utils.Common");

class YYYYControllers extends BCONTROLLER {
  constructor() {
    super(YYYYModel);
  }

  async YYYYPage(req, res, next) {
    let query = req.query;
    if (!objContainKey(query, "api")) {
      return res.render("YYYYPage", { title: "YYYY" });
    }

    const CRUD = new BCRUD(res, YYYYModel);

    switch (String(query.api).toLowerCase()) {
      case "json":
        return await CRUD.getMany();
      case "xml":
        return res.status(200).send("XML API");
    }
  }
}

module.exports = new YYYYControllers();
