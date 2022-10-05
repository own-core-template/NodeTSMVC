const { APIFeatures } = require("../Utils/Utils.APIFeatures");
const { catchAsync } = require("../Utils/Utils.CatchAsync");
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

  async getOne() {
    catchAsync(async (req, res, next) => {
      const data = await this.m_model.fineOne({ _id: req.params.id });
      sendSuccess(res, data);
    });
  }

  async getMany() {
    catchAsync(async (req, res, next) => {
      const features = new APIFeatures(this.m_model, req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      const data = await features.query;
      sendSuccess(res, data);
    });
  }

  async createOne() {
    catchAsync(async (req, res, next) => {
      const doc = await this.m_model.create(req.body);
      if (!doc) sendError(res, "Can't Create");
      else sendSuccess(res, doc, "Create Successful");
    });
  }

  async updateOne() {
    catchAsync(async (req, res, next) => {
      let body = mongoEpressions(req.body);
      const options = { new: true, runValidators: true };
      const doc = await this.m_model.findOneAndUpdate(
        { _id: req.params.id },
        body,
        options
      );
      if (!doc) sendError(res, "Can't Update");
      else sendSuccess(res, doc, "Update Successful");
    });
  }
}

module.exports.BCONTROLLER = CONTROLLER;
