"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInput = void 0;
var validateInput = function (schema, input) {
    var _a = schema.validate(input), value = _a.value, warning = _a.warning, error = _a.error;
    // console.log(value, warning, error);
    return error == null;
};
exports.validateInput = validateInput;
