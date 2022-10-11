"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YYYYModel = exports.JoiYYYY = void 0;
var MODEL_1 = require("../Base/MODEL");
var joi_1 = __importDefault(require("joi"));
exports.JoiYYYY = joi_1.default.object().keys({
    KKKK: joi_1.default.string().alphanum().min(3).max(30).required(),
    TTTT: joi_1.default.number().integer().min(1970).max(2013),
    JJJJ: joi_1.default.boolean(),
});
var definition = {
    KKKK: { type: String, required: true },
    TTTT: { type: Number, required: true },
    JJJJ: { type: Boolean },
};
var options = {};
var index = {};
var model = new MODEL_1.BMODEL("YYYY", "yyyy", definition, options, index)
    .setup()
    .init();
exports.YYYYModel = model.instance;
// const YYYY = new YYYYModel({
//   KKKK: "Bill",
//   TTTT: 12345,
//   JJJJ: true,
// });
// YYYYModel.create(YYYY);
