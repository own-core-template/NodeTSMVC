const { YYYYModel } = require("../Models/Models.YYYY");
const { BCRUD } = require("../Base/CRUD");

const { objContainKey } = require("../Utils/Utils.Common");

module.exports = {
  YYYYPage: async (req, res, next) => {
    const CRUD = new BCRUD(res, YYYYModel);

    let query = req.query;
    if (!objContainKey(query, "api")) {
      return res.render("YYYYPage", { title: "YYYY" });
    }

    switch (String(query.api).toLowerCase()) {
      case "json":
        return await CRUD.getAuthor();
      case "xml":
        return res.status(200).send("XML API");
    }
  },
};
