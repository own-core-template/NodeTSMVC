const { BMODEL } = require("../Base/MODEL");

const definition = {
  KKKK: { type: String },
  TTTT: { type: Number },
};
const options = {};
const index = {};

const model = new BMODEL("YYYY", "yyyy", definition, options, index)
  .setup()
  .init();

module.exports.YYYYModel = model.instance;
