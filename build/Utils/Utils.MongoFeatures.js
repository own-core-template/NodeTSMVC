"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseToJSON = exports.multipleMongooseToJSON = exports.mongooseToObject = exports.multipleMongooseToObject = exports.objectId = exports.mongoEpressions = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var ObjectId = mongoose_1.default.Types.ObjectId;
var mongoEpressions = function (body) {
    var regex = /[$]?(addToSet|push|pop|pull|pullAll|each|position|slice|sort|in|not)\b/g;
    var stringifyBody = JSON.stringify(body);
    stringifyBody = stringifyBody.replace(regex, function (match) { return "$".concat(match); });
    body = JSON.parse(stringifyBody);
    var operators = Object.keys(body)
        .join(",")
        .match(regex);
    var expressions;
    if (operators) {
        operators.forEach(function (operator) {
            expressions[operator] = body[operator];
            delete body[operator];
        });
    }
    expressions = __assign(__assign({}, expressions), { $set: body });
    return expressions;
};
exports.mongoEpressions = mongoEpressions;
var objectId = function (id) {
    if (id)
        return new ObjectId(id);
    return new ObjectId();
};
exports.objectId = objectId;
var multipleMongooseToObject = function (mongooses) {
    return mongooses.map(function (mongoose) { return mongoose.toObject(); });
};
exports.multipleMongooseToObject = multipleMongooseToObject;
var mongooseToObject = function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
};
exports.mongooseToObject = mongooseToObject;
var multipleMongooseToJSON = function (mongooses) {
    return mongooses.map(function (mongoose) { return mongoose.toJSON(); });
};
exports.multipleMongooseToJSON = multipleMongooseToJSON;
var mongooseToJSON = function (mongoose) {
    return mongoose ? mongoose.toJSON() : mongoose;
};
exports.mongooseToJSON = mongooseToJSON;
