import * as express from "express";
import { YYYYModel } from "../Models/Models.YYYY";
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
} from "tsoa";

import { IYYYY } from "../Interfaces/Interfaces.YYYY";
import { YYYYMiddleware } from "../Middleware/Middleware.YYYY";
import { IResponseSoftDelete } from "../Utils/Utils.Response";
import { ProvideSingleton } from "../Utils/Utils.ProvideSingleton";
import { ERES } from "../Enums/Enums.Mode";

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

  @Get("/:i/detail/:id")
  @Middlewares([middleware.get])
  @Response<IYYYY>(200, "YYYY Detail")
  public async YYYYGetOne(
    @Request() req: express.Request,
    @Path() i: ERES,
    @Path() id: string
  ): Promise<IYYYY | void> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.getOne(id);

    if (i == 1) return data;

    const res = (<any>req).res as express.Response;
    res.render("YYYYPage", { title: "YYYY" });
    return;
  }

  @Get("/:i")
  @Middlewares([middleware.get])
  @Response<IYYYY>(200, "YYYY Many")
  public async YYYYGetMany(
    @Request() req: express.Request,
    @Path() i: ERES,
    @Query() page?: number,
    @Query() limit?: number
  ): Promise<IYYYY[] | void> {
    const res = (<any>req).res as express.Response;
    let query = { ...req.query, page: page, limit: limit };

    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.getMany(query);

    if (i == 1) return data;

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

  @Delete("/soft-delete/:id")
  @SuccessResponse(201, "Moved To Trash") // Custom success response
  @Response(500, "Can't Moved To Trash")
  public async YYYYSoftDeleteOne(
    @Path() id: string
  ): Promise<IResponseSoftDelete> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.moveToTrash(id);
    return data;
  }

  @Delete("/delete/:id")
  @SuccessResponse(201, "Deleted") // Custom success response
  @Response(500, "Can't Delete")
  public async YYYYDeleteOne(@Path() id: string): Promise<IYYYY> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.deleteOne(id);
    return data;
  }
}
