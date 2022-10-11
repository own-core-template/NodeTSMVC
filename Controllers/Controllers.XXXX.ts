import * as express from "express";
import { IXXXX, XXXXModel } from "../Models/Models.XXXX";
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

import { XXXXMiddleware } from "../Middleware/Routes/Middleware.Routes.XXXX";
import { IResSoftDelete } from "../Utils/Utils.Response";

const middleware = new XXXXMiddleware();
@Tags("XXXX")
@Route("/XXXX")
export class XXXXController {
  @Get("/test/:id")
  @SuccessResponse(200, "XXXX Test")
  public async XXXXGetOneTest(@Path() id: string): Promise<any> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.getTestByID(Number(id));
    return data;
  }

  @Get("/detail/:id")
  @Middlewares([middleware.get])
  @Response<IXXXX>(200, "XXXX Detail")
  public async XXXXGetOne(
    @Request() req: express.Request,
    @Path() id: string,
    @Query() api?: boolean
  ): Promise<IXXXX | void> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.getOne(id);

    if (api) return data;

    const res = (<any>req).res as express.Response;
    res.render("XXXXPage", { title: "XXXX" });
    return;
  }

  @Get("/")
  @Middlewares([middleware.get])
  @Response<IXXXX>(200, "XXXX Many")
  public async XXXXGetMany(
    @Request() req: express.Request,
    @Query() api?: boolean
  ): Promise<IXXXX[] | void> {
    const res = (<any>req).res as express.Response;

    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.getMany(req.query);

    if (api) return data;

    res.render("XXXXPage", { title: "XXXX" });
    return;
  }

  @Post("/create")
  @SuccessResponse(201, "Created") // Custom success response
  @Response(500, "Can't Created")
  @Middlewares([middleware.post])
  public async XXXXCreateOne(@Body() body: IXXXX): Promise<IXXXX> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.createOne(body);
    return data;
  }

  @Put("/update/:id")
  @SuccessResponse(201, "Updated") // Custom success response
  @Response(500, "Can't Update")
  @Middlewares([middleware.post])
  public async XXXXUpdateOne(
    @Path() id: string,
    @Body() body: IXXXX
  ): Promise<IXXXX> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.updateOne(id, body);
    return data;
  }
  @Delete("/delete/:id")
  @SuccessResponse(201, "Deleted") // Custom success response
  @Response(500, "Can't Delete")
  public async XXXXDeleteOne(@Path() id: string): Promise<IResSoftDelete> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.deleteOne(id);
    return data;
  }
}
