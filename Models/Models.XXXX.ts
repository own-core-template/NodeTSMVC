import { Model } from "mongoose";
import { BMODEL } from "../Base/MODEL";
import Joi from "joi";

export const JoiXXXX = Joi.object().keys({
  ZZZZ: Joi.string().alphanum().min(3).max(30).required(),
  WWWW: Joi.number().integer().min(1970).max(2013),
  TTTT: Joi.boolean(),
});
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
