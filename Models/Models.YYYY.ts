import { Model } from "mongoose";
import { BMODEL } from "../Base/MODEL";

import { IYYYY } from "../Interfaces/Interfaces.YYYY";
import { YYYYModelMiddleware } from "../Middleware/Models/Middleware.Models.YYYY";

const definition = {
  KKKK: { type: String, required: true },
  TTTT: { type: Number },
  JJJJ: { type: Boolean },
};
const options = {};
const index = {};

const model = new BMODEL<IYYYY>("YYYY", "yyyy", definition, options, index)
  .setup()
  .setMiddleware(YYYYModelMiddleware)
  .init();

export const YYYYModel: Model<IYYYY> = model.instance;

// const YYYY = new YYYYModel({
//   KKKK: "Bill",
//   TTTT: 12345,
//   JJJJ: true,
// });

// YYYYModel.create(YYYY);
