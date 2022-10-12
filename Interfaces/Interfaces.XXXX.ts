import { IPagination } from "./Interfaces.Pagination";

export interface IXXXX {
  ZZZZ: string;
  WWWW: number;
  TTTT?: boolean;
}

export interface IXXXXQuery extends IPagination, IXXXX {
  api: boolean;
}

export interface IXXXXParams {}
