import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  link?: StringNullableFilter;
  title?: StringNullableFilter;
};
