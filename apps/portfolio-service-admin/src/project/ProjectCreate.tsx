import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <div />
        <TextInput label="Link" source="link" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
