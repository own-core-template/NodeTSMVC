const { YYYYModel } = require("../Models/Models.YYYY");
const { BCONTROLLER } = require("../Base/CONTROLLER");

class YYYYControllers extends BCONTROLLER {
  constructor() {
    super(YYYYModel);
  }

  async YYYYPage(req, res, next) {
    return res.render("YYYYPage", { title: "YYYY" });
  }
}

module.exports = new YYYYControllers();
