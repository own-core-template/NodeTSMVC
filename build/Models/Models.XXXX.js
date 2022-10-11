"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XXXXModel = exports.JoiXXXX = void 0;
var MODEL_1 = require("../Base/MODEL");
var joi_1 = __importDefault(require("joi"));
exports.JoiXXXX = joi_1.default.object().keys({
    ZZZZ: joi_1.default.string().alphanum().min(3).max(30).required(),
    WWWW: joi_1.default.number().integer().min(1970).max(2013),
    TTTT: joi_1.default.boolean(),
});
var definition = {
    ZZZZ: { type: String, required: true },
    WWWW: { type: Number, required: true },
    TTTT: { type: String },
};
var options = {};
var index = {};
var model = new MODEL_1.BMODEL("XXXX", "xxxx", definition, options, index)
    .setup()
    .init();
exports.XXXXModel = model.instance;
