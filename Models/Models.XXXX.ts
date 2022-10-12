import { Model } from "mongoose";
import { BMODEL } from "../Base/MODEL";

import { IXXXX } from "../Interfaces/Interfaces.XXXX";

const definition = {
  ZZZZ: { type: String, required: true },
  WWWW: { type: Number, required: true },
  TTTT: { type: String },
};
const options = {};
const index = {};

const model = new BMODEL<IXXXX>("XXXX", "xxxx", definition, options, index)
  .setup()
  .init();

export const XXXXModel: Model<IXXXX> = model.instance;
