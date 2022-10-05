const mongoose = require("mongoose");
const softDel = require("mongoose-delete");

let { Schema } = mongoose;
class MODEL {
  constructor(p_name, p_collection, p_definition, { p_options, p_index } = {}) {
    this.m_name = p_name;
    this.m_collection = p_collection;
    this.m_definition = p_definition;
    this.m_opitons = p_options;
    this.m_index = p_index;
  }

  setup() {
    this.m_schema = new Schema(
      {
        _id: { type: Number },
        ...this.m_definition,
      },
      {
        _id: false,
        versionKey: false,
        timestamps: true,
      }
    );

    this.m_schema.index({ ...this.m_index });

    // Start Add Plugins

    this.m_schema.plugin(softDel, {
      overrideMethods: "all",
      deletedAt: true,
    });

    // End Add Plugins

    return this;
  }

  init() {
    this.instance = mongoose.model(
      this.m_name,
      this.m_schema,
      this.m_collection
    );
    return this;
  }
}

module.exports.BMODEL = MODEL;
