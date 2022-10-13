import { Model } from "mongoose";
import { BMODEL } from "../Base/MODEL";

import { ICounter } from "../Interfaces/Interfaces.Counter";
import { CounterModelMiddleware } from "../Middleware/Models/Middleware.Models.Counter";

const definition = {
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
};
const options = {};

const model = new BMODEL<ICounter>("Counter", "counters")
  .setup(definition, options)
  .setIndex({ _id: 1, seq: 1 }, { unique: true })
  .setMiddleware(CounterModelMiddleware);

export const CounterModel: Model<ICounter> = model.instance();
