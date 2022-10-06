const { BROUTER } = require("../Base/ROUTER");
const { XXXXPage, getOne } = require("../Controllers/Controllers.XXXX");
class XXXXRoutes extends BROUTER {
  constructor() {
    super("/XXXX");
  }

  R = [
    {
      path: "/page1",
      method: this.GET,
      handler: XXXXPage,
      permissions: [],
      middleware: [
        (req, res, next) => {
          console.log("PASS", req.baseUrl);
          next();
        },
      ],
    },
    {
      path: "/page2",
      method: this.GET,
      handler: XXXXPage,
      permissions: [],
      middleware: [
        (req, res, next) => {
          console.log("PASS", req.baseUrl);
          next();
        },
      ],
    },
  ];
}

module.exports = new XXXXRoutes();
