import { InputJsonValue } from "../../types";

export type ProjectCreateInput = {
  description?: string | null;
  image?: InputJsonValue;
  link?: string | null;
  title?: string | null;
};
