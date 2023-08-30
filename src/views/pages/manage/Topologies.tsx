import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import MockGem from "../../../assets/mockGem.jpg";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SelectOption from "../../../ui-component/extended/CustomSelect";

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

const Topologies = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          sx={{
            background: "white",
            minHeight: "5rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "1rem",
            px: "1rem",
            py: "1rem",
            borderRadius: "8px",
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "500" }}>
            Filter by tags:
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <Button variant="outlined">Tags 1</Button>
            <Button variant="outlined">Tags 2</Button>
            <Button variant="outlined">Tags 3</Button>
            <Button variant="outlined">Tags 4</Button>
            <Button variant="outlined">Tags 5</Button>
            <Button variant="outlined">Tags 6</Button>
          </Box>
        </Box>
      </Grid>

      <Grid item md={3} xs={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.7rem",
          }}
        >
          <Card
            sx={{
              maxWidth: 390,
              display: "flex",
              gap: "0",
              background: "white",
            }}
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
              <Typography gutterBottom variant="h5" sx={{ width: "10rem" }}>
                1.1 Advanced Chamber
              </Typography>
              <Box sx={{ ml: "1.4rem" }}>
                <Typography variant="body2" color="text.secondary">
                  Device Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reserver Name
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card
            sx={{
              maxWidth: 390,
              display: "flex",
              gap: "0",
              background: "white",
            }}
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
              <Typography gutterBottom variant="h5" sx={{ width: "10rem" }}>
                1.2 Advanced Chamber
              </Typography>
              <Box sx={{ ml: "1.4rem" }}>
                <Typography variant="body2" color="text.secondary">
                  Device Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reserver Name
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card
            sx={{
              maxWidth: 390,
              display: "flex",
              gap: "0",
              background: "white",
            }}
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
              <Typography gutterBottom variant="h5" sx={{ width: "10rem" }}>
                1.3 Advanced Chamber
              </Typography>
              <Box sx={{ ml: "1.4rem" }}>
                <Typography variant="body2" color="text.secondary">
                  Device Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reserver Name
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card
            sx={{
              maxWidth: 390,
              display: "flex",
              gap: "0",
              background: "white",
            }}
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
              <Typography gutterBottom variant="h5" sx={{ width: "10rem" }}>
                1.4 Advanced Chamber
              </Typography>
              <Box sx={{ ml: "1.4rem" }}>
                <Typography variant="body2" color="text.secondary">
                  Device Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reserver Name
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card
            sx={{
              maxWidth: 390,
              display: "flex",
              gap: "0",
              background: "white",
            }}
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
              <Typography gutterBottom variant="h5" sx={{ width: "10rem" }}>
                1.5 Advanced Chamber
              </Typography>
              <Box sx={{ ml: "1.4rem" }}>
                <Typography variant="body2" color="text.secondary">
                  Device Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reserver Name
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>

      <Grid item md={9} xs={12}>
        <Box
          sx={{
            background: "white",
            height: "74vh",
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
              Chamber
            </Typography>
            <Button>
              <PowerSettingsNewOutlinedIcon sx={{ color: "#2196f3" }} />
            </Button>
          </Box>
          <Divider orientation="horizontal" sx={{ background: "black" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: "7rem",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
            >
              <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                Device
              </Typography>
              <SelectOption
                label="Name | Device Name"
                name="device"
                sx={{ width: "12rem", height: "2.4rem", borderRadius: "none" }}
              />
            </Box>
            {/* <Divider orientation="vertical" sx={{ background: "black" }} /> */}
            <Button
              variant="text"
              sx={{ fontSize: "1rem", color: "black", mb: "2.2rem" }}
              endIcon={<CloseOutlinedIcon />}
            >
              Reservation
            </Button>
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
            }}
          >
            <Button variant="contained">Show</Button>
            <Button variant="contained">Button</Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Topologies;
