import { Model } from "mongoose";
import { BMODEL } from "../Base/MODEL";

import { IXXXX } from "../Interfaces/Interfaces.XXXX";
import { XXXXModelMiddleware } from "../Middleware/Models/Middleware.Models.XXXX";

const definition = {
  ZZZZ: { type: String, required: true },
  WWWW: { type: Number, required: true },
  TTTT: { type: String },
  blocked: { type: Boolean, default: true },
};
const options = {};

const model = new BMODEL<IXXXX>("XXXX", "xxxx")
  .setup(definition, options)
  .setIndex({}, {})
  .setMiddleware(XXXXModelMiddleware);

export const XXXXModel: Model<IXXXX> = model.instance();
