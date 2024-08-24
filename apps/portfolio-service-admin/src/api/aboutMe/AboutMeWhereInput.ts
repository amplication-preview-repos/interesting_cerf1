import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AboutMeWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
};
