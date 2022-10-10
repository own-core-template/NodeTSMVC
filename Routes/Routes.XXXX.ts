import { Route } from "tsoa";
import BROUTER, { METHODS } from "../Base/ROUTER";
import ctrl from "../Controllers/Controllers.XXXX";
import { XXXXMiddleware } from "../Middleware/Routes/Middleware.Routes.XXXX";
class XXXXRoutes extends BROUTER {
  constructor() {
    super("/XXXX");
  }

  R = [
    {
      path: ["/", "/page"],
      method: METHODS.GET,
      handler: ctrl.XXXXPage,
      permissions: [],
      middleware: XXXXMiddleware.get,
    },
    {
      path: ["/create", "/new"],
      method: METHODS.POST,
      handler: ctrl.XXXXPage,
      permissions: [],
      middleware: XXXXMiddleware.post,
    },
  ];
}

export = new XXXXRoutes();
