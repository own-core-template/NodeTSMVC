const { XXXXModel } = require("../Models/Models.XXXX");
const { BCRUD } = require("../Base/CRUD");

const { objContainKey } = require("../Utils/Utils.Common");

module.exports = {
  XXXXPage: async (req, res, next) => {
    const CRUD = new BCRUD(res, XXXXModel);

    let query = req.query;
    if (!objContainKey(query, "api")) {
      return res.render("XXXXPage", { title: "XXXX" });
    }

    switch (String(query.api).toLowerCase()) {
      case "json":
        return await CRUD.getAuthor();
      case "xml":
        return res.status(200).send("XML API");
    }
  },
};
