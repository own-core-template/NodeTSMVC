"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AppError = /** @class */ (function (_super) {
    __extends(AppError, _super);
    function AppError(p_message, p_statusCode) {
        var _this = _super.call(this, p_message) || this;
        _this.m_ok = true;
        _this.m_msg = p_message;
        _this.m_statusCode = p_statusCode;
        _this.m_status = "".concat(p_statusCode).startsWith("4") ? "fail" : "error";
        _this.m_isOperational = true;
        Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }
    return AppError;
}(Error));
exports.default = AppError;
