import mongoose from "mongoose";
import softDel from "mongoose-delete";
import AutoIncrement from "mongoose-sequence";
let { Schema } = mongoose;
export default class MODEL {
  private m_name: string;
  private m_collection: string | undefined;
  private m_definition: any;
  private m_opitons: mongoose.CompileModelOptions | undefined;
  private m_index: object;
  private m_referenceFields: [string];
  private m_schema: any;
  public instance: any;

  constructor(
    p_name: string,
    p_collection: string,
    p_definition: any,
    p_options: object,
    p_index: object,
    p_referenceFields: [string]
  ) {
    this.m_name = p_name;
    this.m_collection = p_collection;
    this.m_definition = p_definition;
    this.m_opitons = p_options;
    this.m_index = p_index;
    this.m_referenceFields = p_referenceFields;
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
        ...this.m_opitons,
      }
    );

    this.m_schema.index({ ...this.m_index });

    // Start Add Plugins

    this.m_schema.plugin(AutoIncrement(this.m_schema), {
      id: `${this.m_collection}_id_counter`,
      reference_fields: this.m_referenceFields,
    });

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
