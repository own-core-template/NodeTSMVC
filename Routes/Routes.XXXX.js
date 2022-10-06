const { BROUTER } = require("../Base/ROUTER");
const ctrl = require("../Controllers/Controllers.XXXX");
const mw = require("../Middleware/Routes/Middleware.Routes.XXXX");
class XXXXRoutes extends BROUTER {
  constructor() {
    super("/XXXX");
  }

  R = [
    {
      path: "/page1",
      method: this.GET,
      handler: ctrl.XXXXPage,
      permissions: [],
      middleware: mw,
    },
    {
      path: "/page2",
      method: this.GET,
      handler: ctrl.XXXXPage,
      permissions: [],
      middleware: mw,
    },
  ];
}

module.exports = new XXXXRoutes();
