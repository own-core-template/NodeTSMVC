import { Model } from "mongoose";
import { BMODEL } from "../Base/MODEL";

interface IXXXX {
  ZZZZ: string;
  WWWW: number;
  TTTT?: boolean;
}
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
