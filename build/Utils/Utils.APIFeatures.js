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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIFeatures = void 0;
var selectFields = function (data, allowFields) {
    try {
        var newObj_1;
        if (!allowFields)
            return data;
        Object.keys(data).forEach(function (el) {
            if (allowFields.split(",").includes(el))
                newObj_1[el] = data[el];
        });
        return newObj_1;
    }
    catch (error) {
        console.log(error);
        return data;
    }
};
var APIFeatures = /** @class */ (function () {
    function APIFeatures(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    APIFeatures.prototype.filter = function () {
        var queryObj = __assign({}, this.queryString);
        // Advanced filtering
        var queryString = JSON.stringify(queryObj);
        queryString = queryString.replace(/\b(gte|gt|lte|lt|ne|or|and|nor|not|regex)\b/g, function (match) { return "$".concat(match); });
        var _a = JSON.parse(queryString), _ = _a._, per_page = _a.per_page, page = _a.page, sort = _a.sort, fields = _a.fields, expands = _a.expands, search = _a.search, filters = __rest(_a, ["_", "per_page", "page", "sort", "fields", "expands", "search"]);
        // list columns belong to current collection
        var columns = Object.keys(this.query.schema.paths).toString();
        if (search) {
            filters = __assign(__assign({}, filters), { $text: { $search: search } });
        }
        filters = selectFields(filters, [columns, "$or,$not,$nor,$and,$text"].join(","));
        this.query = this.query
            .find(filters)
            .lean( /*{ virtuals: true, defaults: true }*/);
        return this;
    };
    APIFeatures.prototype.sort = function () {
        var _a;
        if ((_a = this.queryString) === null || _a === void 0 ? void 0 : _a.sort) {
            // sort="-createdAt,-other_fields..."
            var sortBy = this.queryString.sort.split(",").join(" ");
            this.query = this.query.sort(sortBy);
        }
        else {
            this.query = this.query.sort("-createdAt");
        }
        return this;
    };
    APIFeatures.prototype.limitFields = function () {
        var _a = this.queryString, fields = _a.fields, expands = _a.expands;
        fields = [fields, expands].toString().split(",").join(" ");
        if (fields) {
            this.query = this.query.select(fields);
        }
        else {
            this.query = this.query.select("-__v");
        }
        return this;
    };
    APIFeatures.prototype.paginate = function () {
        var _a = this.queryString, page = _a.page, per_page = _a.per_page;
        if (page < 0 || per_page < 0) {
            return this;
        }
        var pageIndex = page * 1 || 1;
        var perPage = per_page * 1 || 10;
        var skip = (pageIndex - 1) * perPage;
        this.query = this.query.skip(skip).limit(perPage);
        return this;
    };
    return APIFeatures;
}());
exports.APIFeatures = APIFeatures;
