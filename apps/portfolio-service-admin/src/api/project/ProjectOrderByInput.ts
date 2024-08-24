import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  link?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
