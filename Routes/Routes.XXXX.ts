const { BROUTER } = require("../Base/ROUTER");
const CTRL = require("../Controllers/Controllers.XXXX");
const MIDDLEWARE = require("../Middleware/Routes/Middleware.Routes.XXXX");
export default class XXXXRoutes extends BROUTER {
  constructor() {
    super("/XXXX");
  }

  R = [
    {
      path: ["/", "/page1"],
      method: this.GET,
      handler: CTRL.XXXXPage,
      permissions: [],
      middleware: MIDDLEWARE,
    },
    {
      path: "/page2",
      method: this.GET,
      handler: CTRL.XXXXPage,
      permissions: [],
      middleware: MIDDLEWARE,
    },
  ];
}

module.exports = new XXXXRoutes();
