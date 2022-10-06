const {BMODEL} = require("../Base/MODEL");


const definition = {};
const options = {};
const index = {};

const model = new BMODEL( "YYYY", "xxxx", definition, options, index)
    .setup()
    .init();

module.exports.YYYYModel = model.instance;


