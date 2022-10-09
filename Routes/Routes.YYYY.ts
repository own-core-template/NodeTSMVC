const { BROUTER } = require("../Base/ROUTER");
const CTRL = require("../Controllers/Controllers.YYYY");
const MIDDLEWARE = require("../Middleware/Routes/Middleware.Routes.YYYY");
export default class YYYYRoutes extends BROUTER {
  constructor() {
    super("/YYYY");
  }

  R = [
    {
      path: "/page1",
      method: this.GET,
      handler: CTRL.YYYYPage,
      permissions: [],
      middleware: MIDDLEWARE,
    },
    {
      path: "/page2",
      method: this.GET,
      handler: CTRL.YYYYPage,
      permissions: [],
      middleware: MIDDLEWARE,
    },
  ];
}

module.exports = new YYYYRoutes();
