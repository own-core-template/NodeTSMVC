import { Request, Response, NextFunction } from "express";

export interface DataResponse<T> {
  ok?: boolean;
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

export function sendError(res: Response, msg: string) {
  res.status(500).json({
    ok: false,
    message: msg || "Internal server error",
  });
}
