import { CONFIGS } from "../../Config/Config.App";

import mysql, { MysqlError } from "mysql";

export = mysql
  .createConnection({
    host: CONFIGS.DB.MYSQL.HOST,
    database: CONFIGS.DB.MYSQL.NAME,
    user: CONFIGS.DB.MYSQL.USERNAME,
    password: CONFIGS.DB.MYSQL.PASSWORD,
  })
  .connect((err: MysqlError) => {
    if (err) throw err;
    console.log("Mysql connected!!!");
  });
