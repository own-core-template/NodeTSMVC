import { IResponseBAD, IResponseOK } from "../Utils/Utils.Response";
import { IYYYY, YYYYModel } from "../Models/Models.YYYY";
import { BCRUD } from "../Base/CRUD";
import {
  Tags,
  Route,
  Get,
  Post,
  Path,
  Body,
  SuccessResponse,
  Response,
  Middlewares,
} from "tsoa";

import { YYYYMiddleware } from "../Middleware/Routes/Middleware.Routes.YYYY";

const middleware = new YYYYMiddleware();
@Route("YYYY")
export class YYYYController {
  @Get("/test/:id")
  public async getOneTestYYYY(@Path() id: string): Promise<any> {
    const CRUD = new BCRUD(YYYYModel);
    return CRUD.getTestByID(Number(id));
  }

  @Get("/detail/:id")
  @Middlewares([middleware.get])
  public async getOneYYYY(@Path() id: string): Promise<IResponseOK<IYYYY>> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.getOne(id);
    const response: IResponseOK<IYYYY> = {
      ok: data ? true : false,
      message: "",
      data: data,
    };
    return response;
  }

  @SuccessResponse(201, "Created") // Custom success response
  @Post("/create")
  @Middlewares([middleware.post])
  public async createOneYYYY(@Body() body: IYYYY): Promise<IResponseOK<IYYYY>> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.createOne(body);
    const response: IResponseOK<IYYYY> = {
      ok: data ? true : false,
      message: data ? "Create Successful!!!" : "Can't Create",
      data: data,
    };
    return response;
  }
}
