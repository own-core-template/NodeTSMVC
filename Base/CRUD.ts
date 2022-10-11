import { HydratedDocument, Model } from "mongoose";
import { SoftDeleteModel } from "mongoose-delete";
import { APIFeatures } from "../Utils/Utils.APIFeatures";
import {
  mongoEpressions,
  mongooseToJSON,
  mongooseToObject,
  multipleMongooseToJSON,
  multipleMongooseToObject,
  objectId,
} from "../Utils/Utils.MongoFeatures";

export class BCRUD<T> {
  public m_model: any;

  constructor(p_model: any) {
    this.m_model = p_model;
  }

  // Test
  public async getTestByID(id: number): Promise<any> {
    return {
      ID: id,
      Name: "TRAN PHUOC TIN",
      From: "VietNam",
      Age: 22,
    };
  }

  public async getOne(p_id: string): Promise<T> {
    const doc = await this.m_model.findOne({ _id: p_id });
    return doc;
  }

  public async getMany(p_query: any): Promise<[T]> {
    const features = new APIFeatures(this.m_model, p_query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const doc = await features.query;
    // sendSuccess(this.m_res, data);
    return doc;
  }

  public async createOne(p_body: T): Promise<T> {
    const doc = await this.m_model.create(p_body);
    // if (!doc) sendError(this.m_res, "Can't Create");
    // else sendSuccess(this.m_res, doc, "Create Successful");
    return doc;
  }

  public async updateOne(p_id: string, p_body: T): Promise<T> {
    let body = mongoEpressions(p_body);
    const options = { new: true, runValidators: true };
    const doc = await this.m_model.findOneAndUpdate(
      { _id: p_id },
      body,
      options
    );
    // if (!doc) sendError(this.m_res, "Can't Update");
    // else sendSuccess(this.m_res, doc, "Update Successful");
    return doc;
  }

  public async deleteOne(p_id: string): Promise<any> {
    const doc = await (<SoftDeleteModel<any>>this.m_model).deleteById(p_id);
    // if (!doc) sendError(this.m_res, "Can't Delete");
    // else sendSuccess(this.m_res, doc, "Delete Successful");
    return doc;
  }

  public async moveToTrash(p_id: string): Promise<any> {
    const doc = await this.m_model.findOneAndDelete({ _id: p_id });
    // if (!doc) sendError(this.m_res, "Can't Soft Delete");
    // else sendSuccess(this.m_res, doc, "Soft Delete Successful");
    return doc;
  }

  public async restoreOne(p_id: string): Promise<any> {
    const doc = await (<SoftDeleteModel<any>>this.m_model).restore({
      _id: p_id,
    });
    // if (!doc) sendError(this.m_res, "Can't Restore");
    // else sendSuccess(this.m_res, doc, "Restore Successful");
    return doc;
  }
}
