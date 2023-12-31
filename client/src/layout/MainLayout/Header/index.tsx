import * as PropTypes from "prop-types";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, ButtonBase } from "@mui/material";

// project imports
import LogoSection from "../LogoSection";
import ProfileSection from "./ProfileSection";
import NotificationSection from "./NotificationSection";

// assets
import { IconMenu2 } from "@tabler/icons";
import BreadCumbSection from "./BreadCumbSection";
import ToggleModeSection from "./ToggleModeSection";
import QuerySection from "./QuerySection";

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }: any) => {
  const theme = useTheme<any>();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: "flex",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        >
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: "all .2s ease-in-out",
              background: theme.palette.primary.light,
              color: theme.palette.primary.dark,
              "&:hover": {
                background: theme.palette.primary.dark,
                color: theme.palette.primary.light,
              },
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

      <BreadCumbSection />
      <Box sx={{ flexGrow: 1 }} />
      {/* <Box sx={{ flexGrow: 1 }} /> */}

      {/* notification & profile */}
      <ToggleModeSection />
      <QuerySection />
      <NotificationSection />
      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func,
};

export default Header;
