import { IResponseBAD, IResponseOK } from "../Utils/Utils.Response";
import { IXXXX, XXXXModel } from "../Models/Models.XXXX";
import { BCRUD } from "../Base/CRUD";
import {
  Tags,
  Route,
  Get,
  Post,
  Path,
  Body,
  SuccessResponse,
  Middlewares,
  Response,
} from "tsoa";

import { XXXXMiddleware } from "../Middleware/Routes/Middleware.Routes.XXXX";

const middleware = new XXXXMiddleware();
@Route("XXXX")
export class XXXXController {
  @Get("/test/:id")
  public async getOneTestXXXX(@Path() id: string): Promise<IResponseOK<IXXXX>> {
    const CRUD = new BCRUD(XXXXModel);
    return CRUD.getTestByID(Number(id));
  }

  @Get("/detail/:id")
  @Middlewares([middleware.get])
  public async getOneXXXX(@Path() id: string): Promise<IResponseOK<IXXXX>> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.getOne(id);
    const response: IResponseOK<IXXXX> = {
      ok: data ? true : false,
      message: "",
      data: data,
    };
    return response;
  }

  @SuccessResponse(201, "Created") // Custom success response
  @Post("/create")
  @Middlewares([middleware.post])
  public async createOneXXXX(@Body() body: IXXXX): Promise<IResponseOK<IXXXX>> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.createOne(body);
    const response: IResponseOK<IXXXX> = {
      ok: data ? true : false,
      message: data ? "Create Successful!!!" : "Can't Create",
      data: data,
    };
    return response;
  }
}
