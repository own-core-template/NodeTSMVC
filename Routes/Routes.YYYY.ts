import BROUTER, { METHODS } from "../Base/ROUTER";
import ctrl from "../Controllers/Controllers.YYYY";
import middleware from "../Middleware/Routes/Middleware.Routes.YYYY";
class YYYYRoutes extends BROUTER {
  constructor() {
    super("/YYYY");
  }

  R = [
    {
      path: ["/", "/page1"],
      method: METHODS.GET,
      handler: ctrl.YYYYPage,
      permissions: [],
      middleware: middleware,
    },
    {
      path: "/page2",
      method: METHODS.GET,
      handler: ctrl.YYYYPage,
      permissions: [],
      middleware: middleware,
    },
  ];
}

export = new YYYYRoutes();
