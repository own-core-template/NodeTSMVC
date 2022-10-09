import { APIFeatures } from "../Utils/Utils.APIFeatures";
import { sendError, sendSuccess } from "../Utils/Utils.Response";
import mongoose from "mongoose";

import {
  mongoEpressions,
  mongooseToJSON,
  mongooseToObject,
  multipleMongooseToJSON,
  multipleMongooseToObject,
  objectId,
} from "../Utils/Utils.MongoFeatures";

export class BCRUD<T> {
  public m_res: any;
  public m_model: mongoose.Model<T>;

  constructor(p_res: Response, p_model: mongoose.Model<T>) {
    this.m_res = p_res;
    this.m_model = p_model;
  }

  async getAuthor() {
    sendSuccess<T>(this.m_res, <T>{
      Name: "TRAN PHUOC TIN",
      From: "VietNam",
      Age: 22,
    });
  }

  async getOne(p_id: string) {
    const data = await this.m_model.findOne({ _id: p_id });
    sendSuccess(this.m_res, data);
  }

  async getMany(p_query: any) {
    const features = new APIFeatures(this.m_model, p_query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const data = await features.query;
    sendSuccess(this.m_res, data);
  }

  async createOne(p_body: any) {
    const doc = await this.m_model.create(p_body);
    if (!doc) sendError(this.m_res, "Can't Create");
    else sendSuccess(this.m_res, doc, "Create Successful");
  }

  async updateOne(p_id: string, p_body: any) {
    let body = mongoEpressions(p_body);
    const options = { new: true, runValidators: true };
    const doc = await this.m_model.findOneAndUpdate(
      { _id: p_id },
      body,
      options
    );
    if (!doc) sendError(this.m_res, "Can't Update");
    else sendSuccess(this.m_res, doc, "Update Successful");
  }

  async deleteOne(p_id: string) {
    const doc = await this.m_model.deleteById(p_id);
    if (!doc) sendError(this.m_res, "Can't Delete");
    else sendSuccess(this.m_res, doc, "Delete Successful");
  }

  async destroyOne(p_id: string) {
    const doc = await this.m_model.findOneAndDelete({ _id: p_id });
    if (!doc) sendError(this.m_res, "Can't Destroy");
    else sendSuccess(this.m_res, doc, "Destroy Successful");
  }

  async restoreOne(p_id: string) {
    const doc = await this.m_model.restore({ _id: p_id });
    if (!doc) sendError(this.m_res, "Can't Restore");
    else sendSuccess(this.m_res, doc, "Restore Successful");
  }
}
