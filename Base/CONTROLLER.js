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

class CONTROLLER {
  constructor(p_model) {
    this.m_model = p_model;
  }

  async getOne(req, res, next) {
    const data = await this.m_model.fineOne({ _id: req.params.id });
    sendSuccess(res, data);
  }

  async getMany(req, res, next) {
    const features = new APIFeatures(this.m_model, req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const data = await features.query;
    sendSuccess(res, data);
  }

  async createOne(req, res, next) {
    const doc = await this.m_model.create(req.body);
    if (!doc) sendError(res, "Can't Create");
    else sendSuccess(res, doc, "Create Successful");
  }

  async updateOne(req, res, next) {
    let body = mongoEpressions(req.body);
    const options = { new: true, runValidators: true };
    const doc = await this.m_model.findOneAndUpdate(
      { _id: req.params.id },
      body,
      options
    );
    if (!doc) sendError(res, "Can't Update");
    else sendSuccess(res, doc, "Update Successful");
  }

  async deleteOne(req, res, next) {
    const doc = await this.m_model.deleteById(req.params.id);
    if (!doc) sendError(res, "Can't Delete");
    else sendSuccess(res, doc, "Delete Successful");
  }

  async destroyOne(req, res, next) {
    const doc = await this.m_model.findOneAndDelete({ _id: req.params.id });
    if (!doc) sendError(res, "Can't Destroy");
    else sendSuccess(res, doc, "Destroy Successful");
  }

  async restoreOne(req, res, next) {
    const doc = await this.m_model.restore({ _id: req.params.id });
    if (!doc) sendError(res, "Can't Restore");
    else sendSuccess(res, doc, "Restore Successful");
  }
}

module.exports.BCONTROLLER = CONTROLLER;
