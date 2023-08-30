import { Avatar, Box, ButtonBase } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const QuerySection = () => {
  const theme = useTheme<any>();
  return (
    <Box
      sx={{
        ml: 2,
        mr: 3,
        [theme.breakpoints.down("md")]: {
          mr: 2,
        },
      }}
    >
      <ButtonBase sx={{ borderRadius: "12px" }}>
        <Avatar
          variant="rounded"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
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
        </Avatar>
      </ButtonBase>
    </Box>
  );
};

export default QuerySection;
