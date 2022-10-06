const { XXXXModel } = require("../Models/Models.XXXX");
const { BCONTROLLER, BCRUD } = require("../Base/CONTROLLER");

const { objContainKey } = require("../Utils/Utils.Common");

class XXXXControllers {
  constructor() {}

  async XXXXPage(req, res, next) {
    let query = req.query;
    if (!objContainKey(query, "api")) {
      return res.render("XXXXPage", { title: "XXXX" });
    }

    const CRUD = new BCRUD(res, XXXXModel);

    switch (String(query.api).toLowerCase()) {
      case "json":
        return await CRUD.getMany();
      case "xml":
        return res.status(200).send("XML API");
    }
  }
}

module.exports = new XXXXControllers();
