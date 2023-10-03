import { Button } from "@mui/material";
import React, { ReactElement } from "react";

interface Props {
  name: string;
  variant?: "contained" | "text" | "outlined";
}

const CustomButton = (props: Props): ReactElement => {
  const { name, variant } = props;

  return (
    <Button sx={{ fontSize: "1rem" }} variant={variant}>
      {name}
    </Button>
  );
};

export default CustomButton;
