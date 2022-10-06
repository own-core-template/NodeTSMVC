const { BROUTER } = require("../Base/ROUTER");
const ctrl = require("../Controllers/Controllers.YYYY");
const mw = require("../Middleware/Routes/Middleware.Routes.YYYY");
class YYYYRoutes extends BROUTER {
  constructor() {
    super("/YYYY");
  }

  R = [
    {
      path: "/page1",
      method: this.GET,
      handler: ctrl.YYYYPage,
      permissions: [],
      middleware: mw,
    },
    {
      path: "/page2",
      method: this.GET,
      handler: ctrl.YYYYPage,
      permissions: [],
      middleware: mw,
    },
  ];
}

module.exports = new YYYYRoutes();
