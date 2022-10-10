import BROUTER, { METHODS } from "../Base/ROUTER";
import ctrl from "../Controllers/Controllers.YYYY";
import { YYYYMiddleware } from "../Middleware/Routes/Middleware.Routes.YYYY";
class YYYYRoutes extends BROUTER {
  constructor() {
    super("/YYYY");
  }

  R = [
    {
      path: ["/", "/page"],
      method: METHODS.GET,
      handler: ctrl.YYYYPage,
      permissions: [],
      middleware: YYYYMiddleware.get,
    },
    {
      path: ["/create", "/new"],
      method: METHODS.POST,
      handler: ctrl.YYYYPage,
      permissions: [],
      middleware: YYYYMiddleware.post,
    },
  ];
}

export = new YYYYRoutes();
