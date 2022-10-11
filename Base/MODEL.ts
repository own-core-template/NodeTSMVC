import mongoose, {
  model,
  CompileModelOptions,
  Schema,
  connect,
  Document,
  Model,
  HydratedDocument,
} from "mongoose";
import Inc from "mongoose-sequence";
import softDel, { SoftDeleteModel } from "mongoose-delete";

export class BMODEL<T> {
  private m_name: string;
  private m_collection: string | undefined;
  private m_definition: any;
  private m_opitons: CompileModelOptions | undefined;
  private m_index: any;
  private m_referenceFields?: string[];
  private m_schema: any;
  public instance: any;

  constructor(
    p_name: string,
    p_collection: string,
    p_definition: any,
    p_options: any,
    p_index: any,
    p_referenceFields?: string[]
  ) {
    this.m_name = p_name;
    this.m_collection = p_collection;
    this.m_definition = p_definition;
    this.m_opitons = p_options;
    this.m_index = p_index;
    this.m_referenceFields = p_referenceFields;
  }

  setup() {
    this.m_schema = new Schema<T>(
      {
        // _id: { type: Number },
        ...this.m_definition,
      },
      {
        // _id: false,
        versionKey: false,
        timestamps: true,
        ...this.m_opitons,
      }
    );

    this.m_schema.index({ ...this.m_index });

    // Start Add Plugins

    // this.m_schema.plugin(Inc, {
    //   id: `${this.m_collection}_id_counter`,
    //   reference_fields: this.m_referenceFields,
    // });

    this.m_schema.plugin(softDel, {
      deletedBy: true,
      deletedBytType: String,
      overrideMethods: "all",
      deletedAt: true,
    });

    // End Add Plugins

    return this;
  }

  init() {
    (<Model<T> | SoftDeleteModel<any> | HydratedDocument<T>>this.instance) =
      model<T>(this.m_name, this.m_schema, this.m_collection);
    return this;
  }
}
