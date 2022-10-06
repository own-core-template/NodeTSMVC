const { APIFeatures } = require("../Utils/Utils.APIFeatures");
const { sendError, sendSuccess } = require("../Utils/Utils.Response");
const {
  mongoEpressions,
  mongooseToJSON,
  mongooseToObject,
  multipleMongooseToJSON,
  multipleMongooseToObject,
  objectId,
} = require("../Utils/Utils.MongoFeatures");

class CRUD {
  constructor(p_res, p_model) {
    this.m_res = p_res;
    this.m_model = p_model;
  }
  async getOne(p_id) {
    const data = await this.m_model.fineOne({ _id: p_id });
    sendSuccess(this.m_res, data);
  }

  async getMany(p_query = {}) {
    const features = new APIFeatures(this.m_model, p_query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const data = await features.query;
    sendSuccess(this.m_res, data);
  }

  async createOne(p_body) {
    const doc = await this.m_model.create(p_body);
    if (!doc) sendError(this.m_res, "Can't Create");
    else sendSuccess(this.m_res, doc, "Create Successful");
  }

  async updateOne(p_id, p_body) {
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

  async deleteOne(p_id) {
    const doc = await this.m_model.deleteById(p_id);
    if (!doc) sendError(this.m_res, "Can't Delete");
    else sendSuccess(this.m_res, doc, "Delete Successful");
  }

  async destroyOne(p_id) {
    const doc = await this.m_model.findOneAndDelete({ _id: p_id });
    if (!doc) sendError(this.m_res, "Can't Destroy");
    else sendSuccess(this.m_res, doc, "Destroy Successful");
  }

  async restoreOne(p_id) {
    const doc = await this.m_model.restore({ _id: p_id });
    if (!doc) sendError(this.m_res, "Can't Restore");
    else sendSuccess(this.m_res, doc, "Restore Successful");
  }
}
class CONTROLLER {}

module.exports.BCRUD = CRUD;
module.exports.BCONTROLLER = CONTROLLER;
