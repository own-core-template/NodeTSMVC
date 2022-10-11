"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalMiddleware = void 0;
var body_parser_1 = require("body-parser");
var express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
var compression_1 = __importDefault(require("compression"));
var connect_flash_1 = __importDefault(require("connect-flash"));
var hpp_1 = __importDefault(require("hpp"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
exports.GlobalMiddleware = [
    (0, body_parser_1.urlencoded)({ extended: true, limit: "10kb" }),
    (0, body_parser_1.json)({ limit: "10kb" }),
    (0, morgan_1.default)("dev"),
    (0, express_mongo_sanitize_1.default)(),
    (0, connect_flash_1.default)(),
    (0, hpp_1.default)({
        whitelist: ["sort", "expands"],
    }),
    (0, cors_1.default)(),
    (0, compression_1.default)(),
];
