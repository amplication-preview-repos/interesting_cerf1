import { JsonValue } from "type-fest";

export type AboutMe = {
  content: string | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  updatedAt: Date;
};
