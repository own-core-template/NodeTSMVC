const { CONFIGS } = require("../../Config/Config.App");

const mysql = require("mysql");

module.exports = mysql
  .createConnection({
    host: CONFIGS.DB.MYSQL.HOST,
    database: CONFIGS.DB.MYSQL.NAME,
    user: CONFIGS.DB.MYSQL.USERNAME,
    password: CONFIGS.DB.MYSQL.PASSWORD,
  })
  .connect((err) => {
    if (err) throw err;
    console.log("Mysql connected!!!");
  });
