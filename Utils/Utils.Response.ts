import { Request, Response, NextFunction } from "express";

interface DataResponse<T> {
  ok: boolean;
  message?: string;
  data?: T;
}

export function sendSuccess<T>(res: Response, data?: T, msg?: string) {
  let reply: DataResponse<T> = {
    ok: true,
    message: msg || "Success",
  };
  if (data) reply.data = data;
  res.status(200).json(reply);
}

export function sendError<T>(res: Response, msg: string) {
  let reply: DataResponse<T> = {
    ok: false,
    message: msg || "Internal server error",
  };
  res.status(500).json(reply);
}
