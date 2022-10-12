import { IPagination } from "./Interfaces.Pagination";

export interface IYYYY {
  KKKK: string;
  TTTT?: number;
  JJJJ?: boolean;
}

export interface IYYYYQuery extends IPagination, IYYYY {
  api: boolean;
}

export interface IYYYYParams {}
