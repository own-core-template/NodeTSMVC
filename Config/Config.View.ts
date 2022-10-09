import * as path from "path";
import { Express } from "express";
import engine from "ejs";
import LRU from "lru-cache";
import expressLayouts from "express-ejs-layouts";

export const setViews = (p_app: Express, p_dirname: string) => {
  engine.cache = new LRU({ max: 500, maxSize: 5000 });
  p_app.set("views", path.join(p_dirname, "Views"));
  p_app.set("view engine", "ejs");
  p_app.set("view cache", true);
  p_app.use(expressLayouts);
  p_app.set("layout", "Layouts/layout");
};

export const setPublic = (
  p_app: Express,
  p_express: any,
  p_dirname: string
) => {
  p_app.use(p_express.static(path.join(p_dirname, "Public")));
  p_app.use(p_express.static(path.join(p_dirname, "Public/Assets/Images")));
};
