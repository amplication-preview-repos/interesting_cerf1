import { JsonValue } from "type-fest";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  link: string | null;
  title: string | null;
  updatedAt: Date;
};
