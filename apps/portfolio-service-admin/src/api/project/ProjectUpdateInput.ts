import { InputJsonValue } from "../../types";

export type ProjectUpdateInput = {
  description?: string | null;
  image?: InputJsonValue;
  link?: string | null;
  title?: string | null;
};
