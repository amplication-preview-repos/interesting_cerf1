import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SkillEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Proficiency" source="proficiency" />
      </SimpleForm>
    </Edit>
  );
};
