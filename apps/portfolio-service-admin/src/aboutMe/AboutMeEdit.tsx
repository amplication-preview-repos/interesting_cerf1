import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AboutMeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
