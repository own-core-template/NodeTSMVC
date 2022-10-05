const { XXXXModel } = require("../Models/Models.XXXX");
const { BVIEW } = require("../Base/VIEW");
const { BCONTROLLER } = require("../Base/CONTROLLER");

class XXXXController extends BCONTROLLER {
  constructor() {
    super(XXXXModel);
  }

  XXXXPage(req, res, next) {
    BVIEW.render("Views.XXXX");
  }
}

module.exports = new XXXXController();
