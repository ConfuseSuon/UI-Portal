import * as PropTypes from "prop-types";

// material-ui
import { Avatar, Box, ButtonBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// project imports
import LogoSection from "../LogoSection";
import NotificationSection from "./NotificationSection";
import ProfileSection from "./ProfileSection";

// assets
import { IconMenu2 } from "@tabler/icons";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/reducer";
import BreadCumbSection from "./BreadCumbSection";
import QuerySection from "./QuerySection";
import ToggleModeSection from "./ToggleModeSection";

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }: any) => {
  const theme = useTheme<any>();
  const { darkMode } = useSelector((state: AppState) => state.auth);
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
              background: darkMode
                ? theme.palette.grey[800]
                : theme.palette.grey[100],
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
