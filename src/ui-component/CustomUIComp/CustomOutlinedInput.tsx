import { OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";

import { shouldForwardProp } from "@mui/system";

const CustomOutlinedInput = styled(OutlinedInput, { shouldForwardProp })(
  ({ theme }: any) => ({
    width: "14rem",
    marginLeft: 16,
    paddingLeft: 16,
    color: "black",
    paddingRight: 16,
    "& input": {
      background: "transparent !important",
      paddingLeft: "4px !important",
      "&::placeholder": {
        fontSize: "13px",
      },
    },
    [theme.breakpoints.down("lg")]: {
      width: 250,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: 4,
    },
  })
);

export default CustomOutlinedInput;
