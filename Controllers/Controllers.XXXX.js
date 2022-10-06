const { XXXXModel } = require("../Models/Models.XXXX");
const { BCRUD } = require("../Base/CRUD");

const { objContainKey } = require("../Utils/Utils.Common");

module.exports = {
  XXXXPage: async (req, res, next) => {
    let query = req.query;
    if (!objContainKey(query, "api")) {
      return res.render("XXXXPage", { title: "XXXX" });
    }

    const CRUD = new BCRUD(res, XXXXModel);

    switch (String(query.api).toLowerCase()) {
      case "json":
        return await CRUD.getAuthor();
      case "xml":
        return res.status(200).send("XML API");
    }
  },
};
