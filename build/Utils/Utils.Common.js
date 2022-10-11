"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAPI = exports.objContainKey = void 0;
var objContainKey = function (obj, key) {
    return obj.hasOwnProperty(key);
};
exports.objContainKey = objContainKey;
var isAPI = function (query) {
    return query.hasOwnProperty("api");
};
exports.isAPI = isAPI;
