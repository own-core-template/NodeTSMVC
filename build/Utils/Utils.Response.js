"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendError = exports.sendSuccess = void 0;
function sendSuccess(res, data, msg) {
    var reply = {
        ok: true,
        message: msg || "Success",
    };
    if (data)
        reply.data = data;
    res.status(200).json(reply);
}
exports.sendSuccess = sendSuccess;
function sendError(res, msg) {
    var reply = {
        ok: true,
        message: msg || "Internal server error",
    };
    res.status(500).json(reply);
}
exports.sendError = sendError;
