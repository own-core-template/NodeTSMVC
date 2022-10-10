import { IXXXX, XXXXModel } from "../Models/Models.XXXX";
import { BCRUD } from "../Base/CRUD";
import { Tags, Route, Get, Post, Path, Body } from "tsoa";

@Route("XXXX")
@Tags("/XXXX")
class XXXXController {
  @Get("/detail/:id")
  public async getXXXX(@Path() id: string): Promise<any> {
    const CRUD = new BCRUD(XXXXModel);
    return CRUD.getTestByID(Number(id));
  }
  @Post("/create")
  public async createXXXX(@Body() body: IXXXX): Promise<any> {
    const CRUD = new BCRUD(XXXXModel);
    return CRUD.createOne(body);
  }
}

export = new XXXXController();
