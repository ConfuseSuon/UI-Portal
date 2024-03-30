import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// material-ui
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Paper,
  Popper,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// project imports
import User1 from "../../../../assets/images/users/user-round.svg";
import MainCard from "../../../../ui-component/cards/MainCard";
import Transitions from "../../../../ui-component/extended/Transitions";
import UpgradePlanCard from "./UpgradePlanCard";
// const User1:string = require('assets/images/users/user-round.svg').default;
// assets
import { useMsal } from "@azure/msal-react";
import { IconLogout, IconSearch, IconSettings, IconUser } from "@tabler/icons";
import { TypeUserInfo, toggleDarkMode } from "../../../../features/authSlice";
import { AppDispatch, AppState } from "../../../../store/reducer";

// ==============================|| PROFILE MENU ||============================== //
type RootState = {
  customization: any;
};
const ProfileSection = () => {
  const dispatch: AppDispatch = useDispatch();
  const theme = useTheme<any>();
  const { darkMode } = useSelector((state: AppState) => state.auth);

  const customization = useSelector((state: RootState) => state.customization);
  const navigate = useNavigate();

  const [sdm, setSdm] = useState(true);

  const [value, setValue] = useState("");
  const [notification, setNotification] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);

  const { userInfo } = useSelector((state: AppState) => state.auth);

  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef<any>(null);

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListItemClick = (event: any, index: any, route = "") => {
    setSelectedIndex(index);
    handleClose(event);

    if (route && route !== "") {
      navigate(route);
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const { instance } = useMsal();

  const handleMsLogout = async () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/login",
    });
  };

  return (
    <>
      <Chip
        sx={{
          height: "0px",
          alignItems: "center",
          transition: "all .2s ease-in-out",
          backgroundColor: "transparent",
          border: "none",
          mr: "-1rem",
          [theme.breakpoints.down("md")]: {
            mr: "-1rem",
          },
        }}
        icon={
          <Avatar
            src={userInfo?.picture}
            sx={{
              ...theme.typography.largeAvatar,
              margin: "8px 0 8px 8px !important",
              cursor: "pointer",
              [theme.breakpoints.down("md")]: {
                ...theme.typography.mediumAvatar,
              },
            }}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            color="inherit"
          />
        }
        // label={
        //   <IconSettings
        //     stroke={1.5}
        //     size="1.5rem"
        //     color={theme.palette.primary.main}
        //   />
        // }
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 14],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  boxShadow
                  shadow={theme.shadows[16]}
                >
                  <Box sx={{ p: 2 }}>
                    <Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="h4">Good Morning,</Typography>
                        <Typography
                          component="span"
                          variant="h4"
                          sx={{ fontWeight: 400 }}
                        >
                          {userInfo?.displayName}
                        </Typography>
                      </Stack>
                      <Typography variant="subtitle2">
                        {userInfo?.mail}
                      </Typography>
                    </Stack>
                  </Box>
                  <PerfectScrollbar
                    style={{
                      height: "100%",
                      maxHeight: "calc(100vh - 250px)",
                      overflowX: "hidden",
                    }}
                  >
                    <Box sx={{ p: 2 }}>
                      <Divider />
                      <Card
                        sx={{
                          bgcolor: theme.palette.primary.light,
                          my: 2,
                        }}
                      >
                        <CardContent>
                          <Grid container spacing={3} direction="column">
                            <Grid item>
                              <Grid
                                item
                                container
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Grid item>
                                  <Typography variant="subtitle1">
                                    {sdm ? "Dark" : "Light"} Mode
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Switch
                                    color="primary"
                                    checked={sdm}
                                    onClick={() =>
                                      dispatch(toggleDarkMode(sdm))
                                    }
                                    onChange={(e) => setSdm(e.target.checked)}
                                    name="sdm"
                                    size="small"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Grid
                                item
                                container
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Grid item>
                                  <Typography variant="subtitle1">
                                    Allow Notifications
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Switch
                                    checked={notification}
                                    onChange={(e) =>
                                      setNotification(e.target.checked)
                                    }
                                    name="sdm"
                                    size="small"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                      <Divider />
                      <List
                        component="nav"
                        sx={{
                          width: "100%",
                          maxWidth: 350,
                          minWidth: 300,

                          borderRadius: "10px",
                          [theme.breakpoints.down("md")]: {
                            minWidth: "100%",
                          },
                          "& .MuiListItemButton-root": {
                            mt: 0.5,
                          },
                        }}
                      >
                        <ListItemButton
                          sx={{
                            borderRadius: `${customization.borderRadius}px`,
                          }}
                          selected={selectedIndex === 0}
                          onClick={(event) =>
                            handleListItemClick(event, 0, "#")
                          }
                        >
                          <ListItemIcon>
                            <IconSettings stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">
                                Account Settings
                              </Typography>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton
                          sx={{
                            borderRadius: `${customization.borderRadius}px`,
                          }}
                          selected={selectedIndex === 1}
                          onClick={(event) =>
                            handleListItemClick(event, 1, "#")
                          }
                        >
                          <ListItemIcon>
                            <IconUser stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Grid
                                container
                                spacing={1}
                                justifyContent="space-between"
                              >
                                <Grid item>
                                  <Typography variant="body2">
                                    Social Profile
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Chip
                                    label="02"
                                    size="small"
                                    sx={{
                                      bgcolor: theme.palette.warning.dark,
                                      color: theme.palette.background.default,
                                    }}
                                  />
                                </Grid>
                              </Grid>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton
                          sx={{
                            borderRadius: `${customization.borderRadius}px`,
                          }}
                          selected={selectedIndex === 4}
                          onClick={() => {
                            handleMsLogout();
                          }}
                        >
                          <ListItemIcon>
                            <IconLogout stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">Logout</Typography>
                            }
                          />
                        </ListItemButton>
                      </List>
                    </Box>
                  </PerfectScrollbar>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
