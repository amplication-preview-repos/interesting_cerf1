import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AboutMeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <div />
      </SimpleForm>
    </Create>
  );
};
