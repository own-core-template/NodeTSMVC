const {BMODEL} = require("../Base/MODEL");


const definition = {};
const options = {};
const index = {};

const model = new BMODEL( "XXXX", "xxxx", definition, options, index)
    .setup()
    .init();

module.exports.XXXXModel = model.instance;

