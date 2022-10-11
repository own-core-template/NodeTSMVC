"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var http_errors_1 = __importDefault(require("http-errors"));
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var Config_GlobalMiddleware_1 = require("./Config/Config.GlobalMiddleware");
var Config_View_1 = require("./Config/Config.View");
var Middleware_ErrorHandler_1 = require("./Middleware/Middleware.ErrorHandler");
var routes_1 = require("./Routes/routes");
// import { IRouter, Routers } from "./Config/Config.Routes";
// import BROUTER from "./Base/ROUTER";
var app = (0, express_1.default)();
var server = http_1.default.createServer(app);
var PORT = 8888;
// use global middlewares
app.use(Config_GlobalMiddleware_1.GlobalMiddleware);
// init && connect to DB
var DBconn = __importStar(require("./DB/DB.Connect"));
DBconn;
// init view engine
(0, Config_View_1.setViews)(app, __dirname);
// set public folders
(0, Config_View_1.setPublic)(app, express_1.default, __dirname);
// init Swagger Doc
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
    },
}));
// init routes
(0, routes_1.RegisterRoutes)(app);
// catch 404 and forward to error handler
app.use(function (err, req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use(Middleware_ErrorHandler_1.ErrorHandler);
// start server
server.listen(PORT, function () {
    console.log("Server start on: ", PORT, "\nDocument: /docs");
});
module.exports = app;
