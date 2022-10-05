const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

exports.mongoEpressions = (body) => {
  const regex =
    /[$]?(addToSet|push|pop|pull|pullAll|each|position|slice|sort|in|not)\b/g;
  let stringifyBody = JSON.stringify(body);
  stringifyBody = stringifyBody.replace(regex, (match) => `$${match}`);
  body = JSON.parse(stringifyBody);
  const operators = Object.keys(body).join(",").match(regex);
  let expressions = {};
  if (operators) {
    operators.forEach((operator) => {
      expressions[operators] = body[operator];
      delete body[operator];
    });
  }
  expressions = { ...expressions, $set: body };
  return expressions;
};

module.exports = {
  objectId: function (id) {
    if (id) return ObjectId(id);
    return ObjectId();
  },
  multipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
  multipleMongooseToJSON: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toJSON());
  },
  mongooseToJSON: function (mongoose) {
    return mongoose ? mongoose.toJSON() : mongoose;
  },
};
