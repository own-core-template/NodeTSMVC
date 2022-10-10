import { IYYYY, YYYYModel } from "../Models/Models.YYYY";
import { BCRUD } from "../Base/CRUD";
import { Tags, Route, Get, Post, Path, Body, SuccessResponse } from "tsoa";
import { DataResponse } from "Utils/Utils.Response";

@Route("YYYY")
@Tags("/YYYY")
class YYYYController {
  @Get("/test/:id")
  public async getOneTestYYYY(@Path() id: string): Promise<any> {
    const CRUD = new BCRUD(YYYYModel);
    return CRUD.getTestByID(Number(id));
  }

  @Get("/detail/:id")
  public async getOneYYYY(@Path() id: string): Promise<DataResponse<IYYYY>> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.getOne(id);
    return {
      ok: data == null ? false : true,
      data: data,
      message: undefined,
    };
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post("/create")
  public async createOneYYYY(
    @Body() body: IYYYY
  ): Promise<DataResponse<IYYYY>> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.createOne(body);
    return {
      ok: data == null ? false : true,
      data: data,
      message: undefined,
    };
  }
}

export = new YYYYController();
