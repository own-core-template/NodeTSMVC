import * as express from "express";
import { IYYYY, YYYYModel } from "../Models/Models.YYYY";
import { BCRUD } from "../Base/CRUD";
import {
  Tags,
  Route,
  Get,
  Post,
  Put,
  Delete,
  Path,
  Body,
  SuccessResponse,
  Middlewares,
  Query,
  Request,
  Response,
  Controller,
  TsoaResponse,
} from "tsoa";

import { YYYYMiddleware } from "../Middleware/Routes/Middleware.Routes.YYYY";

const middleware = new YYYYMiddleware();
@Tags("YYYY")
@Route("/YYYY")
export class YYYYController {
  @Get("/test/:id")
  @SuccessResponse(200, "YYYY Test")
  public async YYYYGetOneTest(@Path() id: string): Promise<any> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.getTestByID(Number(id));
    return data;
  }

  @Get("/detail/:id")
  @Middlewares([middleware.get])
  @Response<IYYYY>(200, "YYYY Detail")
  public async YYYYGetOne(
    @Request() req: express.Request,
    @Path() id: string,
    @Query() api?: boolean
  ): Promise<IYYYY | void> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.getOne(id);

    if (api) return data;

    const res = (<any>req).res as express.Response;
    res.render("YYYYPage", { title: "YYYY" });
    return;
  }

  @Get("/")
  @Middlewares([middleware.get])
  @Response<IYYYY>(200, "YYYY Many")
  public async YYYYGetMany(
    @Request() req: express.Request,
    @Query() api?: boolean
  ): Promise<IYYYY[] | void> {
    const res = (<any>req).res as express.Response;

    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.getMany(req.query);

    if (api) return data;

    res.render("YYYYPage", { title: "YYYY" });
    return;
  }

  @Post("/create")
  @SuccessResponse(201, "Created") // Custom success response
  @Response(500, "Can't Created")
  @Middlewares([middleware.post])
  public async YYYYCreateOne(@Body() body: IYYYY): Promise<IYYYY> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.createOne(body);
    return data;
  }

  @Put("/update/:id")
  @SuccessResponse(201, "Updated") // Custom success response
  @Response(500, "Can't Update")
  @Middlewares([middleware.post])
  public async YYYYUpdateOne(
    @Path() id: string,
    @Body() body: IYYYY
  ): Promise<IYYYY> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.updateOne(id, body);
    return data;
  }
  @Delete("/delete/:id")
  @SuccessResponse(201, "Deleted") // Custom success response
  @Response(500, "Can't Delete")
  public async YYYYDeleteOne(@Path() id: string): Promise<any> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.deleteOne(id);
    return data;
  }
}
