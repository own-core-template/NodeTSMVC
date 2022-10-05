const { XXXXModel } = require("../Models/Models.XXXX");
const { BCONTROLLER } = require("../Base/CONTROLLER");
const { catchAsync } = require("../Utils/Utils.CatchAsync");

class XXXXControllers extends BCONTROLLER {
  constructor() {
    super(XXXXModel);
  }

  async XXXXPage(req, res, next) {
    res.render("Views.XXXX.ejs");
  }
}

module.exports = new XXXXControllers();
