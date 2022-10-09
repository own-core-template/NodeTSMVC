import { Model } from "mongoose";
import { BMODEL } from "../Base/MODEL";

interface IYYYY {
  KKKK: string;
  TTTT: number;
  JJJJ?: boolean;
}
const definition = {
  KKKK: { type: String, required: true },
  TTTT: { type: Number, required: true },
};
const options = {};
const index = {};

const model = new BMODEL<IYYYY>("YYYY", "yyyy", definition, options, index)
  .setup()
  .init();

export const YYYYModel: Model<IYYYY> = model.instance;

// const YYYY = new YYYYModel({
//   KKKK: "Bill",
//   TTTT: "bill@initech.com",
//   JJJJ: "https://i.imgur.com/dM7Thhn.png",
// });
