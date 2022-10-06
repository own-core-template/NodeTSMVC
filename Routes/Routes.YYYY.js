const { BROUTER } = require("../Base/ROUTER");
const { YYYYPage, getOne } = require("../Controllers/Controllers.YYYY");
class YYYYRoutes extends BROUTER {
  constructor() {
    super("/YYYY");
  }

  R = [
    {
      path: "/page1",
      method: this.GET,
      handler: YYYYPage,
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
      handler: YYYYPage,
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

module.exports = new YYYYRoutes();
