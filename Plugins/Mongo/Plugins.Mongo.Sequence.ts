import { MongooseError, QueryOptions, Schema } from "mongoose";
import { ICounter } from "../../Interfaces/Interfaces.Counter";
import { ICounterPlugin } from "../../Interfaces/Interfaces.Plugin";
import { CounterModel } from "../../Models/Models.Counter";

export const mongoSequence = (schema: Schema, parameters: ICounterPlugin) => {
  schema.pre("save", function (next) {
    let doc = this;
    this.findByIdAndUpdate(
      { _id: parameters.id },
      { $inc: { seq: 1 } },
      function (error: MongooseError, counter: ICounter) {
        if (error) {
          return next(error);
        }
        doc._id = counter.seq;
        next();
      }
    );
  });
};
