import * as express from "express";
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
  Query,
  Request,
  Response,
  Controller,
  TsoaResponse,
} from "tsoa";

import { XXXXMiddleware } from "../Middleware/Routes/Middleware.Routes.XXXX";

const middleware = new XXXXMiddleware();
@Tags("XXXX")
@Route("/XXXX")
export class XXXXController {
  @Tags("Test")
  @Get("/test/:id")
  @SuccessResponse(200, "XXXX Test")
  public async getOneTestXXXX(@Path() id: string): Promise<any> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.getTestByID(Number(id));
    return data;
  }

  @Tags("Detail")
  @Get("/detail/:id")
  @Middlewares([middleware.get])
  @Response<IXXXX>(200, "XXXX Detail")
  public async XXXXDetailPage(@Path() id: string): Promise<IXXXX> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.getOne(id);
    return data;
  }

  @Tags("Create")
  @Post("/create")
  @SuccessResponse(201, "Created") // Custom success response
  @Middlewares([middleware.post])
  public async createOneXXXX(@Body() body: IXXXX): Promise<IXXXX> {
    const CRUD = new BCRUD<IXXXX>(XXXXModel);
    const data = await CRUD.createOne(body);
    return data;
  }
}
