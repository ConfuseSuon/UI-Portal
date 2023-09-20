import {
  Box,
  Button,
  ClickAwayListener,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Popper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTheme } from "@mui/material/styles";
import React, { ReactElement, useRef, useState } from "react";
import CustomFilter from "../../../ui-component/CustomUIComp/CustomFilter";
import CustomCard from "../../../ui-component/CustomUIComp/CustomCard";
import AddIcon from "@mui/icons-material/Add";
import Transitions from "../../../ui-component/extended/Transitions";
import MainCard from "../../../ui-component/cards/MainCard";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SelectOption from "../../../ui-component/extended/CustomSelect";
import CustomOutlinedInput from "../../../ui-component/CustomUIComp/CustomOutlinedInput";
import { useNavigate } from "react-router";
import { topologiesData } from "../../../mockData";

export interface TopologiesTypo {
  id: string;
  title: string;
  deviceName: string;
  reservationName: string;
}

const Inventory = (): ReactElement => {
  const navigate = useNavigate();
  const [showList, setShowList] = useState(false);
  const [showTopologyDetails, setShowTopologyDetails] = useState(true);
  const theme = useTheme<any>();
  const anchorRef = useRef<HTMLElement | HTMLDivElement | any | null>(null);

  const handleOpen = () => setShowList(true);
  const handleClose = () => setShowList(false);
  const handlePopupClose = () => setShowTopologyDetails(false);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12}>
        <CustomFilter title={"Browse by tags"} search={true} />
      </Grid>

      <Grid item xs={12} md={12} sm={12}>
        <Box
          sx={{
            ...theme.typography.darkModeBg4,
            height: "100%",
            px: ".5rem",
            py: "1rem",
            display: "flex",
            gap: "4rem",
            justifyContent: "space-around",
            flexWrap: "wrap",
            [theme.breakpoints.down("sm")]: {
              justifyContent: "center",
            },
            [theme.breakpoints.down("md")]: {
              justifyContent: "center",
            },
            [theme.breakpoints.down("lg")]: {
              justifyContent: "center",
            },
          }}
        >
          {topologiesData.map((data) => {
            return (
              <CustomCard
                key={data.id}
                selectBtnVal={true}
                topolgiesData={data}
              />
            );
          })}
          {/* --------------------------------------------------Popper List--------------------------------------------- */}
          <Box
            sx={{
              position: "fixed",
              right: 80,
              bottom: 40,
              [theme.breakpoints.down("md")]: {
                right: 40,
              },
            }}
            ref={anchorRef}
            onClick={handleOpen}
          >
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>

            <Popper
              placement="top-start"
              open={showList}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              popperOptions={{
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, 20],
                    },
                  },
                ],
              }}
            >
              {({ TransitionProps }: any) => (
                <Transitions in={open} {...TransitionProps}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MainCard
                        border={true}
                        elevation={16}
                        content={false}
                        boxShadow
                        shadow={theme.shadows[16]}
                      >
                        <Divider />
                        <PerfectScrollbar
                          style={{ height: "100%", overflowY: "scroll" }}
                        >
                          <Box sx={{ p: 1 }}>
                            <List
                              component="nav"
                              sx={{
                                width: "100%",
                                minWidth: 250,
                                maxWidth: 350,
                                ...theme.typography.transparentBox,
                                borderRadius: "10px",
                                maxHeight: "20rem",
                                p: 0,
                                [theme.breakpoints.down("md")]: {
                                  minWidth: "100%",
                                },
                                "& .MuiListItemButton-root": {
                                  // mt: 0.5,
                                },
                              }}
                            >
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                                // selected={selectedIndex === 4
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                                // selected={selectedIndex === 4
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                                // selected={selectedIndex === 4
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                                // selected={selectedIndex === 4
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                                // selected={selectedIndex === 4
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                                // selected={selectedIndex === 4
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                                // selected={selectedIndex === 4
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>{" "}
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                                // selected={selectedIndex === 4
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                                // selected={selectedIndex === 4
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                                // selected={selectedIndex === 4
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                                // selected={selectedIndex === 4
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                                // selected={selectedIndex === 4
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                                // selected={selectedIndex === 4
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                                // selected={selectedIndex === 4
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
                                  }
                                />
                              </ListItemButton>
                              <ListItemButton
                                sx={{
                                  borderRadius: `10px`,
                                }}
                              >
                                <ListItemIcon>
                                  <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                  primary={
                                    <Typography variant="body1">
                                      Logout
                                    </Typography>
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
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Inventory;
