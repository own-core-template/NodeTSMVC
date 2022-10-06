const { Router } = require("express");
const { catchAsync } = require("../Utils/Utils.CatchAsync");

class METHODS {
  GET = "GET";
  POST = "POST";
  PUT = "PUT";
  PATCH = "PATCH";
  DELETE = "DELETE";
}

const IROUTE = {
  path: String || [String],
  method: METHODS,
  handler: (req, res, next) => {},
  permissions: [String],
  middleware: [(req, res, next) => {}],
};

class ROUTER extends METHODS {
  constructor(p_routerName) {
    super();
    this.m_routerName = p_routerName;
    this.m_router = Router({ mergeParams: true });
  }

  R = [IROUTE];

  path() {
    return this.m_routerName;
  }

  setRouter() {
    // Set HTTP method, middleware, and handler for each route
    // Returns Router object, which we will use in Server class
    for (const route of this.R) {
      for (const mw of route.middleware) {
        this.m_router.use(route.path, catchAsync(mw));
      }
      switch (route.method) {
        case "GET":
          this.m_router.get(route.path, catchAsync(route.handler));
          break;
        case "POST":
          this.m_router.post(route.path, catchAsync(route.handler));
          break;
        case "PUT":
          this.m_router.put(route.path, catchAsync(route.handler));
          break;
        case "PATCH":
          this.m_router.patch(route.path, catchAsync(route.handler));
          break;
        case "DELETE":
          this.m_router.delete(route.path, catchAsync(route.handler));
          break;
        default:
        // Throw exception
      }
    }
    // Return router instance (will be usable in Server class)
    return this.m_router;
  }
}

module.exports.BROUTER = ROUTER;
