import { Button, ButtonPropsColorOverrides } from "@mui/material";
import React, { ReactElement } from "react";

interface Props {
  name: string;
  variant?: "contained" | "text" | "outlined";
  color:
    | "success"
    | "error"
    | "inherit"
    | "warning"
    | "primary"
    | "secondary"
    | "info";
  onClick?: any;
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactElement;
}

const CustomButton = (props: Props): ReactElement => {
  const { name, variant, onClick, color, size, startIcon } = props;

  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClick}
      size={size}
      startIcon={startIcon}
    >
      {name}
    </Button>
  );
};

export default CustomButton;
