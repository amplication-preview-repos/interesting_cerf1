import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SkillCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Proficiency" source="proficiency" />
      </SimpleForm>
    </Create>
  );
};
