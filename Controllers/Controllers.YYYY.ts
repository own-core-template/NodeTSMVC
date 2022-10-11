import * as express from "express";
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
  Middlewares,
  Query,
  Request,
  Response,
  Controller,
  TsoaResponse,
} from "tsoa";

import { YYYYMiddleware } from "../Middleware/Routes/Middleware.Routes.YYYY";

const middleware = new YYYYMiddleware();
@Route("/YYYY")
export class YYYYController {
  @Get("/test/:id")
  @SuccessResponse(200, "YYYY Test")
  public async getOneTestYYYY(@Path() id: string): Promise<any> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.getTestByID(Number(id));
    return data;
  }

  @Get("/detail/:id")
  @Middlewares([middleware.get])
  @Response<IYYYY>(200, "YYYY Detail")
  public async YYYYDetailPage(@Path() id: string): Promise<IYYYY> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.getOne(id);
    return data;
  }

  @Post("/create")
  @SuccessResponse(201, "Created") // Custom success response
  @Middlewares([middleware.post])
  public async createOneYYYY(@Body() body: IYYYY): Promise<IYYYY> {
    const CRUD = new BCRUD<IYYYY>(YYYYModel);
    const data = await CRUD.createOne(body);
    return data;
  }
}
