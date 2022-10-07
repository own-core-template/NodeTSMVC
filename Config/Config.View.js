const path = require("path");
let engine = require("ejs"),
  LRU = require("lru-cache");
const expressLayouts = require("express-ejs-layouts");
module.exports.setViews = (app, dirname) => {
  // engine.cache = new LRU({ });
  app.set("views", path.join(dirname, "Views"));
  app.set("view engine", "ejs");
  app.set("view cache", true);
  app.use(expressLayouts);
  app.set("layout", "Layouts/layout");
};

module.exports.setPublic = (express, dirname) => {
  return [express.static(path.join(dirname, "public"))];
};
