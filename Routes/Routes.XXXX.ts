import BROUTER, { METHODS } from "../Base/ROUTER";
import ctrl from "../Controllers/Controllers.XXXX";
import middleware from "../Middleware/Routes/Middleware.Routes.XXXX";
class XXXXRoutes extends BROUTER {
  constructor() {
    super("/XXXX");
  }

  R = [
    {
      path: ["/", "/page1"],
      method: METHODS.GET,
      handler: ctrl.XXXXPage,
      permissions: [],
      middleware: middleware,
    },
    {
      path: "/page2",
      method: METHODS.GET,
      handler: ctrl.XXXXPage,
      permissions: [],
      middleware: middleware,
    },
  ];
}

export = new XXXXRoutes();
