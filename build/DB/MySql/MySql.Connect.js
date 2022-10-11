"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Config_App_1 = require("../../Config/Config.App");
var mysql_1 = __importDefault(require("mysql"));
module.exports = mysql_1.default
    .createConnection({
    host: Config_App_1.CONFIGS.DB.MYSQL.HOST,
    database: Config_App_1.CONFIGS.DB.MYSQL.NAME,
    user: Config_App_1.CONFIGS.DB.MYSQL.USERNAME,
    password: Config_App_1.CONFIGS.DB.MYSQL.PASSWORD,
})
    .connect(function (err) {
    if (err)
        throw err;
    console.log("Mysql connected!!!");
});
