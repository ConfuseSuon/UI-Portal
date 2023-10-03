import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// material-ui
import { Box, ButtonBase, Typography } from "@mui/material";

// project imports
import config from "../../../config";
import logo from "../../../assets/Amniverse.svg";
import { MENU_OPEN } from "../../../store/actions";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state: any) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })}
      component={Link}
      to={"/"}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <img src={logo} alt="" height={45} />
        <Typography variant="h3" sx={{ alignSelf: "center", mt: "0.4rem" }}>
          UIPORTAL
        </Typography>
      </Box>
    </ButtonBase>
  );
};

export default LogoSection;
