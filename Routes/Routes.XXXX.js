const { BROUTER } = require("../Base/ROUTER");
const { XXXXPage, getOne } = require("../Controllers/Controllers.XXXX");
const { catchAsync } = require("../Utils/Utils.CatchAsync");
class XXXXRoutes extends BROUTER {
  constructor() {
    super("/XXXX");
  }

  R = [
    {
      path: "/test1",
      method: this.GET,
      handler: XXXXPage,
      permissions: [],
      middleware: [
        (req, res, next) => {
          console.log("PASS");
          next();
        },
      ],
    },
  ];
}

module.exports = new XXXXRoutes();
