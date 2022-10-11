"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.METHODS = void 0;
var express_1 = require("express");
var Utils_CatchAsync_1 = require("../Utils/Utils.CatchAsync");
var METHODS;
(function (METHODS) {
    METHODS["ALL"] = "all";
    METHODS["GET"] = "get";
    METHODS["POST"] = "post";
    METHODS["PUT"] = "put";
    METHODS["DELETE"] = "delete";
    METHODS["PATCH"] = "patch";
    METHODS["OPTIONS"] = "options";
    METHODS["HEAD"] = "head";
})(METHODS = exports.METHODS || (exports.METHODS = {}));
var BROUTER = /** @class */ (function () {
    function BROUTER(p_routerName) {
        this.m_router = (0, express_1.Router)({ mergeParams: true });
        this.m_routerName = p_routerName;
    }
    BROUTER.prototype.routerName = function () {
        return this.m_routerName;
    };
    BROUTER.prototype.setRouter = function () {
        // Set HTTP method, middleware, and handler for each route
        // Returns Router object, which we will use in Server class
        for (var _i = 0, _a = this.R; _i < _a.length; _i++) {
            var route = _a[_i];
            for (var _b = 0, _c = route.middleware; _b < _c.length; _b++) {
                var mw = _c[_b];
                this.m_router.use(route.path, mw);
            }
            try {
                this.m_router[route.method](route.path, (0, Utils_CatchAsync_1.catchAsync)(route.handler));
                console.log(this.m_routerName, route.path, route.method);
            }
            catch (err) {
                console.error("Not a valid method");
            }
        }
        // Return router instance (will be usable in Server class)
        return this.m_router;
    };
    return BROUTER;
}());
exports.default = BROUTER;
