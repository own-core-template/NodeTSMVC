import { IXXXX, XXXXModel } from "../Models/Models.XXXX";
import { BCRUD } from "../Base/CRUD";
import { Tags, Route, Get, Post, Path, Body, SuccessResponse } from "tsoa";
import { DataResponse } from "Utils/Utils.Response";

@Route("XXXX")
@Tags("/XXXX")
class XXXXController {
  @Get("/test/:id")
  public async getOneTestXXXX(@Path() id: string): Promise<any> {
    const CRUD = new BCRUD(XXXXModel);
    return CRUD.getTestByID(Number(id));
  }

  @Get("/detail/:id")
  public async getOneXXXX(@Path() id: string): Promise<DataResponse<IXXXX>> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.getOne(id);
    return {
      ok: data == null ? false : true,
      data: data,
      message: undefined,
    };
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post("/create")
  public async createOneXXXX(
    @Body() body: IXXXX
  ): Promise<DataResponse<IXXXX>> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.createOne(body);
    return {
      ok: data == null ? false : true,
      data: data,
      message: undefined,
    };
  }
}

export = new XXXXController();
