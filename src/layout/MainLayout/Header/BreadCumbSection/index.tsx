import { useState } from "react";

// material-ui
import { useTheme, styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  ButtonBase,
  Card,
  Grid,
  InputAdornment,
  OutlinedInput,
  Popper,
  Typography,
} from "@mui/material";

// third-party
import PopupState, { bindPopper, bindToggle } from "material-ui-popup-state";

// project imports
import Transitions from "../../../../ui-component/extended/Transitions";

// assets
import { shouldForwardProp } from "@mui/system";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const BreadCumbSection = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <>
      <Box sx={{ ml: "0.5rem", maxWidth: "15rem" }}>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <Typography
              sx={{
                display: "inline",
                fontSize: "1rem",
                fontWeight: "400",
              }}
              key={index}
            >
              <Link
                to={routeTo}
                style={{
                  textDecoration: "none",
                  color: "#2196f3",
                  textTransform: "capitalize",
                  marginLeft: "0.3rem",
                }}
              >
                {name}
              </Link>
              {!isLast && " > "}
            </Typography>
          );
        })}
      </Box>
    </>
  );
};

export default BreadCumbSection;
