import { FormHelperText } from "@mui/material";
import { ErrorMessage } from "formik";
import React from "react";

type Props = {
  name: string;
};

const CustomFormHelper = (props: Props) => {
  const { name } = props;
  return (
    <FormHelperText
      variant="outlined"
      sx={{ fontSize: ".75rem", mb: ".5rem" }}
      error
      id="standard-weight-helper-text--register"
    >
      <ErrorMessage name={name} />
    </FormHelperText>
  );
};

export default CustomFormHelper;
