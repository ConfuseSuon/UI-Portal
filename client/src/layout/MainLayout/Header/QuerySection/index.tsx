import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Avatar, Box, ButtonBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store/reducer";

const QuerySection = () => {
  const theme = useTheme<any>();
  const { darkMode } = useSelector((state: AppState) => state.auth);

  return (
    <Box
      sx={{
        ml: 0,
        mr: 0,
        [theme.breakpoints.down("md")]: {
          ml: "2rem",
          mr: "-0.5rem",
          display: "none",
        },
      }}
    >
      <ButtonBase sx={{ borderRadius: "12px" }}>
        <Avatar
          variant="rounded"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.customAvatar,
            transition: "all .2s ease-in-out",
            background: darkMode
              ? theme.palette.grey[800]
              : theme.palette.grey[100],
            color: theme.palette.primary.dark,
            '&[aria-controls="menu-list-grow"],&:hover': {
              background: theme.palette.primary.dark,
              color: theme.palette.primary.light,
            },
          }}
          color="inherit"
        >
          <HelpOutlineOutlinedIcon />
          <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "1rem" }} />
        </Avatar>
      </ButtonBase>
    </Box>
  );
};

export default QuerySection;
