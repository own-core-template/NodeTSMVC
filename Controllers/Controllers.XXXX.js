const { XXXXModel } = require("../Models/Models.XXXX");
const { BCONTROLLER } = require("../Base/CONTROLLER");

class XXXXControllers extends BCONTROLLER {
  constructor() {
    super(XXXXModel);
  }

  async XXXXPage(req, res, next) {
    return res.render("XXXXPage", { title: "XXXX" });
  }
}

module.exports = new XXXXControllers();
