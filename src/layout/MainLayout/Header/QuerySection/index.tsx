import { Avatar, Box, ButtonBase } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const QuerySection = () => {
  const theme = useTheme<any>();
  return (
    <Box
      sx={{
        ml: 0,
        mr: 0,
        [theme.breakpoints.down("md")]: {
          ml: "2rem",
          mr: "-0.5rem",
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
            background: theme.palette.primary.light,
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
