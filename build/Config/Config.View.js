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
exports.setPublic = exports.setViews = void 0;
var path = __importStar(require("path"));
var ejs_1 = __importDefault(require("ejs"));
var lru_cache_1 = __importDefault(require("lru-cache"));
var express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
var setViews = function (p_app, p_dirname) {
    ejs_1.default.cache = new lru_cache_1.default({ max: 500, maxSize: 5000 });
    p_app.set("views", path.join(p_dirname, "Views"));
    p_app.set("view engine", "ejs");
    p_app.use(express_ejs_layouts_1.default);
    p_app.set("layout", "Layouts/layout");
};
exports.setViews = setViews;
var setPublic = function (p_app, p_express, p_dirname) {
    p_app.use(p_express.static(path.join(p_dirname, "Public")));
    p_app.use(p_express.static(path.join(p_dirname, "Public/Assets/Images")));
};
exports.setPublic = setPublic;
