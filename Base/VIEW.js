const engine = require("ejs");
const expressLayout = require("express-ejs-layouts");

class VIEW {
    constructor() {}

    init(p_app) {
        p_app.set("views", path.join(__dirname, `Views`));
        p_app.set("view engine", "ejs");
        p_app.set("view cache", true);
        p_app.use(expressLayout);
        p_app.set("layout", "Layouts/layout");
    }

    static render(p_view, { p_data } = {}) {
        engine.render(p_view, p_data);
    }
    static update({ p_data } = {}) { }
    static delete(p_id) { }
    static redirect() { }


}

module.exports.BVIEW = VIEW;
