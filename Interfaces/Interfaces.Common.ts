import { IPagination } from "./Interfaces.Pagination";

export interface IQuery extends IPagination {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
