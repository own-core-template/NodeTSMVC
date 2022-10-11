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
exports.BMODEL = void 0;
var mongoose_1 = require("mongoose");
var mongoose_delete_1 = __importDefault(require("mongoose-delete"));
var BMODEL = /** @class */ (function () {
    function BMODEL(p_name, p_collection, p_definition, p_options, p_index, p_referenceFields) {
        this.m_name = p_name;
        this.m_collection = p_collection;
        this.m_definition = p_definition;
        this.m_opitons = p_options;
        this.m_index = p_index;
        this.m_referenceFields = p_referenceFields;
    }
    BMODEL.prototype.setup = function () {
        this.m_schema = new mongoose_1.Schema(__assign({}, this.m_definition), __assign({ 
            // _id: false,
            versionKey: false, timestamps: true }, this.m_opitons));
        this.m_schema.index(__assign({}, this.m_index));
        // Start Add Plugins
        // this.m_schema.plugin(Inc, {
        //   id: `${this.m_collection}_id_counter`,
        //   reference_fields: this.m_referenceFields,
        // });
        this.m_schema.plugin(mongoose_delete_1.default, {
            deletedBy: true,
            deletedBytType: String,
            overrideMethods: "all",
            deletedAt: true,
        });
        // End Add Plugins
        return this;
    };
    BMODEL.prototype.init = function () {
        this.instance = (0, mongoose_1.model)(this.m_name, this.m_schema, this.m_collection);
        return this;
    };
    return BMODEL;
}());
exports.BMODEL = BMODEL;
