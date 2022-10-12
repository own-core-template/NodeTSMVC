import { IPagination } from "./Interfaces.Pagination";

export interface IQuery extends IPagination {
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
