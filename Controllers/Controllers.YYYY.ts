import { IYYYY, YYYYModel } from "../Models/Models.YYYY";
import { BCRUD } from "../Base/CRUD";
import { Tags, Route, Get, Post, Path, Body } from "tsoa";

@Route("YYYY")
@Tags("/YYYY")
class YYYYController {
  @Get("/detail/:id")
  public async getYYYY(@Path() id: string): Promise<any> {
    const CRUD = new BCRUD(YYYYModel);
    return CRUD.getTestByID(Number(id));
  }
  @Post("/create")
  public async createYYYY(@Body() body: IYYYY): Promise<any> {
    const CRUD = new BCRUD(YYYYModel);
    return CRUD.createOne(body);
  }
}

export = new YYYYController();
