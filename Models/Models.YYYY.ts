import { Model } from "mongoose";
import { BMODEL } from "../Base/MODEL";
import Joi from "joi";

export const JoiYYYY = Joi.object().keys({
  KKKK: Joi.string().alphanum().min(3).max(30).required(),
  TTTT: Joi.number().integer().min(1970).max(2013),
  JJJJ: Joi.boolean(),
});
export interface IYYYY {
  KKKK: string;
  TTTT: number;
  JJJJ?: boolean;
}
const definition = {
  KKKK: { type: String, required: true },
  TTTT: { type: Number, required: true },
  JJJJ: { type: Boolean },
};
const options = {};
const index = {};

const model = new BMODEL<IYYYY>("YYYY", "yyyy", definition, options, index)
  .setup()
  .init();

export const YYYYModel: Model<IYYYY> = model.instance;

// const YYYY = new YYYYModel({
//   KKKK: "Bill",
//   TTTT: 12345,
//   JJJJ: true,
// });

// YYYYModel.create(YYYY);
