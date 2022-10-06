const selectFields = (data, allowFields) => {
  try {
    const newObj = {};
    if (!allowFields) return data;
    Object.keys(data).forEach((el) => {
      if (allowFields.split(",").includes(el)) newObj[el] = data[el];
    });
    return newObj;
  } catch (error) {
    console.log(error);
    return data;
  }
};

class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    // Advanced filtering
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt|ne|or|and|nor|not|regex)\b/g,
      (match) => `$${match}`
    );
    let { _, per_page, page, sort, fields, expands, search, ...filters } =
      JSON.parse(queryString);
    // list columns belong to current collection
    const columns = Object.keys(this.query.schema.paths).toString();
    if (search) {
      filters = {
        ...filters,
        $text: { $search: search },
      };
    }
    filters = selectFields(
      filters,
      [columns, "$or,$not,$nor,$and,$text"].join(",")
    );
    this.query = this.query
      .find(filters)
      .lean({ virtuals: true, defaults: true });

    return this;
  }

  sort() {
    if (this.queryString?.sort) {
      // sort="-createdAt,-other_fields..."
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }

  limitFields() {
    let { fields, expands } = this.queryString;
    fields = [fields, expands].toString().split(",").join(" ");
    if (fields) {
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }

    return this;
  }

  paginate() {
    const { page, per_page } = this.queryString;

    if (page < 0 || per_page < 0) {
      return this;
    }

    const pageIndex = page * 1 || 1;
    const perPage = per_page * 1 || 10;
    const skip = (pageIndex - 1) * perPage;

    this.query = this.query.skip(skip).limit(perPage);

    return this;
  }
}
module.exports.APIFeatures = APIFeatures;
