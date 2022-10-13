import { IPagination } from "./Interfaces.Pagination";

export interface IQuery extends IPagination {
  sort: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
