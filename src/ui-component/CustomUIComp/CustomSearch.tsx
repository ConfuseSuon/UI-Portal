import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import { shouldForwardProp } from "@mui/system";

const CustomSearch = styled(TextField, { shouldForwardProp })(
  ({ theme }: any) => ({
    "& input": {
      background: "transparent !important",
      padding: "6px",
      paddingLeft: "4px !important",
      fontSize: "13px",
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

export default CustomSearch;
