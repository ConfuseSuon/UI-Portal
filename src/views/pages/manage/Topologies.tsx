import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import MockGem from "../../../assets/mockGem.jpg";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SelectOption from "../../../ui-component/extended/CustomSelect";
import CustomFilter from "../../../ui-component/CustomUIComp/CustomFilter";
import { ReactElement, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import CustomCard from "../../../ui-component/CustomUIComp/CustomCard";
import { topologiesData } from "../../../mockData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../store/reducer";
import {
  setActiveTopologies,
  setSelectTopologyData,
} from "../../../features/setupTestSlice";
import { useNavigate } from "react-router";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps): React.ReactElement {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number): {
  id: string;
  "aria-controls": string;
} {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Topologies = (): ReactElement => {
  const navigate = useNavigate();
  const theme = useTheme<any>();
  const [isShow, setIsShow] = useState(false);
  const { activeTopologies, selectTopoloy } = useSelector(
    (state: AppState) => state.setupTest
  );

  const dispatch: AppDispatch = useDispatch();

  const sortedTopologiesData = [...topologiesData].sort((a, b) => {
    if (a.id === activeTopologies?.id) return -1;
    if (b.id === activeTopologies?.id) return 1;
    return 0;
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CustomFilter title={"Filter by tags:"} />
      </Grid>
      {!activeTopologies ? (
        <>
          <Grid item xs={12} md={12} sm={12}>
            <Box
              sx={{
                ...theme.typography.darkModeBg4,
                height: "100%",
                px: "1rem",
                py: "1rem",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "3rem",
                flexWrap: "wrap",
              }}
            >
              {topologiesData.map((data) => {
                return (
                  <CustomCard
                    selectBtnVal={true}
                    topolgiesData={data}
                    viewBy={"topologies"}
                    setIsShow={setIsShow}
                  />
                );
              })}
            </Box>
          </Grid>
        </>
      ) : (
        <>
          <Grid item md={3} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "41rem",
                gap: "1rem",
                overflowY: "scroll",
                overflowX: "hidden",
              }}
            >
              {sortedTopologiesData.map((data) => {
                return (
                  <Card
                    key={data.id}
                    sx={{
                      maxWidth: 390,
                      minHeight: 130,
                      display: "flex",
                      gap: "0",
                      cursor: "pointer",
                      ...theme.typography.darkModeBg3,
                      border: ` ${
                        activeTopologies.id == data.id
                          ? "2px solid #2196f3"
                          : "none"
                      }`,
                      transition: "all 0.8s ease-in-out",
                      transform:
                        activeTopologies.id === data.id
                          ? "translateY(5px)"
                          : "none",
                    }}
                    onClick={() => dispatch(setActiveTopologies(data))}
                  >
                    <img
                      src={MockGem}
                      alt="gemo"
                      style={{
                        height: "120px",
                        width: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ width: "10rem" }}
                      >
                        {data.title}
                      </Typography>
                      <Box sx={{ ml: "1.4rem" }}>
                        <Typography variant="body2">
                          {data.deviceName}
                        </Typography>
                        <Typography variant="body2">
                          {data.reservationName}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Grid>

          <Grid item md={9} xs={12}>
            <Box
              sx={{
                ...theme.typography.darkModeBg4,
                height: "41rem",
                display: "flex",
                flexDirection: "column",
                px: "1rem",
                pt: "1rem",
              }}
            >
              <Box
                sx={{
                  height: "3rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
                  {activeTopologies.title}
                  <Button>
                    <PowerSettingsNewOutlinedIcon sx={{ color: "#2196f3" }} />
                  </Button>
                </Typography>
              </Box>
              <Divider orientation="horizontal" sx={{ background: "black" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: "8rem",
                  pt: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "70%",
                    gap: "0.4rem",
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                    Device
                  </Typography>
                  <SelectOption
                    label="Name | Device Name"
                    name="device"
                    sx={{
                      width: "12rem",
                      height: "2.4rem",
                      borderRadius: "none",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "30%",
                    height: "100%",
                    gap: "0.1rem",
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                    Reservation
                    <Button>
                      <CloseOutlinedIcon sx={{ color: "#2196f3" }} />
                    </Button>
                  </Typography>
                </Box>
              </Box>
              <Divider orientation="horizontal" sx={{ background: "black" }} />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  mt: "1rem",
                  minHeight: "12rem",
                  gap: "20rem",
                }}
              >
                <AppBar position="static">
                  <Tabs
                    textColor="inherit"
                    value={0}
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab
                      label={
                        <Typography variant="body1" color={"white"}>
                          Device 1
                        </Typography>
                      }
                      {...a11yProps(0)}
                    />
                    <Tab
                      label={
                        <Typography variant="body1" color={"white"}>
                          Device 2
                        </Typography>
                      }
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </AppBar>

                {/* <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
              Device
            </Typography>
            <Divider orientation="vertical" sx={{ background: "red" }} />
            <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
              Device
            </Typography> */}
              </Box>
              <Divider orientation="horizontal" sx={{ background: "red" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  mt: "1rem",
                  minHeight: "9rem",
                  gap: "3rem",
                }}
              >
                <Typography variant="h4">Bottom Device</Typography>
              </Box>
              <Divider orientation="horizontal" sx={{ background: "red" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  minHeight: "5rem",
                  gap: "3rem",
                  pb: "0.5rem",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => dispatch(setActiveTopologies(null))}
                >
                  Back
                </Button>
                <Button variant="contained">Show</Button>
                <Button variant="contained">Button</Button>
              </Box>
            </Box>
          </Grid>
        </>
      )}

      {/* --------------------------------------------------Dialog Box--------------------------------------------- */}

      <Dialog
        PaperProps={{
          style: {
            overflow: "initial",
            minHeight: "10rem",
            maxWidth: "55rem",
            width: "70%",
            ...theme.typography.darkModeBg4,
          },
        }}
        aria-describedby="alert-dialog-slide-description"
        open={!!selectTopoloy}
      >
        <Box sx={{ textAlign: "right" }}>
          <Button
            size="small"
            onClick={() => dispatch(setSelectTopologyData(null))}
          >
            <CloseOutlinedIcon sx={{ color: "red" }} />
          </Button>
        </Box>

        <DialogTitle
          sx={{
            pt: "0",
          }}
        >
          <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
            Topology Details
          </Typography>
        </DialogTitle>
        <Divider orientation="horizontal" sx={{ background: "black" }} />

        <Box sx={{}}>
          <DialogContent
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "2rem",
            }}
          >
            <Box sx={{ width: "60%", textAlign: "left" }}>
              <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                {selectTopoloy?.title}
                <Button>
                  <PowerSettingsNewOutlinedIcon sx={{ color: "#2196f3" }} />
                </Button>
              </Typography>
              <SelectOption
                label="Device 1"
                name="device"
                sx={{ width: "12rem", height: "2.4rem", borderRadius: "none" }}
              />
            </Box>
            <Box sx={{ width: "40%", textAlign: "left" }}>
              <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                Reservation
                <Button>
                  <CloseOutlinedIcon sx={{ color: "#2196f3" }} />
                </Button>
              </Typography>
              <Typography variant="caption">Unlocked</Typography>
              <Typography variant="body1">Reserved Date:</Typography>
              <Typography variant="body1">Start Date:</Typography>
              <Typography variant="body1">End Date:</Typography>
            </Box>
          </DialogContent>
          <Divider orientation="horizontal" sx={{ background: "black" }} />

          <DialogContent
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              height: "21rem",
              gap: "2rem",
            }}
          >
            <Box sx={{ width: "60%", textAlign: "left" }}>
              <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                Manual Attenuation
              </Typography>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "1rem", mt: "0.7rem", mb: ".4rem" }}
                >
                  5Ghz
                </Typography>
                <TextField
                  id="standard-basic"
                  label="Port 11"
                  variant="outlined"
                  sx={{
                    ...theme.typography.customInput,
                    width: "6rem",
                    mr: "1rem",
                  }}
                  size="small"
                />
                <TextField
                  id="standard-basic"
                  label="Port 11"
                  variant="outlined"
                  sx={{
                    ...theme.typography.customInput,
                    width: "6rem",
                    mr: "1rem",
                  }}
                  size="small"
                />{" "}
                <TextField
                  id="standard-basic"
                  label="Port 11"
                  variant="outlined"
                  sx={{
                    ...theme.typography.customInput,
                    width: "6rem",
                    mr: "1rem",
                  }}
                  size="small"
                />{" "}
                <TextField
                  id="standard-basic"
                  label="Port 11"
                  variant="outlined"
                  sx={{
                    ...theme.typography.customInput,
                    width: "6rem",
                    mr: "1rem",
                  }}
                  size="small"
                />{" "}
                <TextField
                  id="standard-basic"
                  label="Port 11"
                  variant="outlined"
                  sx={{
                    ...theme.typography.customInput,
                    width: "6rem",
                    mr: "1rem",
                  }}
                  size="small"
                />{" "}
                <TextField
                  id="standard-basic"
                  label="Port 11"
                  variant="outlined"
                  sx={{
                    ...theme.typography.customInput,
                    width: "6rem",
                    mr: "1rem",
                  }}
                  size="small"
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "1rem", mt: "0.7rem", mb: ".4rem" }}
                >
                  2.4Ghz
                </Typography>
                <TextField
                  id="standard-basic"
                  label="Port 11"
                  variant="outlined"
                  sx={{
                    ...theme.typography.customInput,
                    width: "6rem",
                    mr: "1rem",
                  }}
                  size="small"
                />{" "}
                <TextField
                  id="standard-basic"
                  label="Port 11"
                  variant="outlined"
                  sx={{
                    ...theme.typography.customInput,
                    width: "6rem",
                    mr: "1rem",
                  }}
                  size="small"
                />{" "}
                <TextField
                  id="standard-basic"
                  label="Port 11"
                  variant="outlined"
                  sx={{
                    ...theme.typography.customInput,
                    width: "6rem",
                    mr: "1rem",
                  }}
                  size="small"
                />{" "}
                <TextField
                  id="standard-basic"
                  label="Port 11"
                  variant="outlined"
                  sx={{
                    ...theme.typography.customInput,
                    width: "6rem",
                    mr: "1rem",
                  }}
                  size="small"
                />{" "}
                <TextField
                  id="standard-basic"
                  label="Port 11"
                  variant="outlined"
                  sx={{
                    ...theme.typography.customInput,
                    width: "6rem",
                    mr: "1rem",
                  }}
                  size="small"
                />{" "}
                <TextField
                  id="standard-basic"
                  label="Port 11"
                  variant="outlined"
                  sx={{
                    ...theme.typography.customInput,
                    width: "6rem",
                    mr: "1rem",
                  }}
                  size="small"
                />{" "}
                <TextField
                  id="standard-basic"
                  label="Port 11"
                  variant="outlined"
                  sx={{
                    ...theme.typography.customInput,
                    width: "6rem",
                    mr: "1rem",
                  }}
                  size="small"
                />
              </Box>
            </Box>
            <Box sx={{ width: "40%", textAlign: "left" }}>
              <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                VLAN Assignment
              </Typography>{" "}
            </Box>
          </DialogContent>
          <Divider orientation="horizontal" sx={{ background: "black" }} />

          <DialogContent
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <Button
              variant="contained"
              onClick={() => dispatch(setSelectTopologyData(null))}
            >
              Back
            </Button>
            <Button variant="contained">Edit</Button>
            <Button
              variant="contained"
              onClick={() => navigate("/tests/setup-phase")}
            >
              Next
            </Button>
          </DialogContent>
        </Box>
      </Dialog>
    </Grid>
  );
};

export default Topologies;
