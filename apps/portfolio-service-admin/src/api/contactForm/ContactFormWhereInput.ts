import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactFormWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  name?: StringNullableFilter;
};
