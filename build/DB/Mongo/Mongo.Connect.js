"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var assert_1 = __importDefault(require("assert"));
var Config_App_1 = require("../../Config/Config.App");
var uri = Config_App_1.CONFIGS.DB.MONGODB.LOCAL + Config_App_1.CONFIGS.DB.MONGODB.NAME;
mongoose_1.default.connect(uri, {
// options
}, function (err) {
    assert_1.default.equal(null, err);
    console.log("MongoDB connected!!!");
});
