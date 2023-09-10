import { useTheme } from "@mui/material/styles";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CustomDashboardNumCard from "../../../ui-component/CustomUIComp/CustomDashboardNumCard";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  XAxis,
  YAxis,
  Cell,
  Pie,
  Legend,
} from "recharts";
import {
  expPieData,
  expcolorsofPieChart,
} from "../../../ui-component/CustomUIComp/CustomMyTestCard";

const dataBar = [{ name: "Data Point 1", value: 50, value2: 10 }];
const lastDataBar = [
  { name: "Data Point 1", value: 50, value2: 30, value3: 35 },
];

const data = [
  {
    name: "Sell",
    uv: 4000,
    pv: 15400,
    amt: 6400,
  },
  {
    name: "Love",
    uv: 5000,
    pv: 9098,
    amt: 2210,
  },
  {
    name: "Hate",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Love",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const areaData = [
  {
    name: "Sep",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Nov",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Dec",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Jan",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

const Dashboard = () => {
  const theme = useTheme<any>();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Box
          sx={{
            height: "1.8rem",
            pl: "1rem",
          }}
        >
          <Typography variant="h3" sx={{ fontSize: "1.5rem" }}>
            {" "}
            Hello Mona !{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={12}>
        <Box
          sx={{
            ...theme.typography.darkModeBg4,
            p: "1rem",
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
          }}
        >
          {/* ------------------------------------- First Row -------------------------  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: "0.5rem",
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
                Key Metrics
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Typography variant="h6">
                Last Updated : Aug 20, 2023 T: 13:49
              </Typography>
              <Button
                variant="contained"
                endIcon={<SettingsOutlinedIcon />}
                size="small"
              >
                Customize
              </Button>
            </Box>
          </Box>
          <Divider orientation="horizontal" variant="fullWidth" />

          {/* ------------------------------------- Second Row -------------------------  */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <CustomDashboardNumCard
              cardBody={"732"}
              cardFooter={"Dulor alt amet"}
            />
            <CustomDashboardNumCard
              cardBody={"65"}
              cardFooter={"Dulor alt amet"}
              color={"#ffdf00"}
            />
            <CustomDashboardNumCard
              cardBody={"Low"}
              cardFooter={"(Dulor alt amet)"}
              color={"#228b22"}
              fontStyle={"italic"}
            />
            <CustomDashboardNumCard
              cardBody={"6.3.1"}
              cardFooter={"(Dulor alt amet)"}
              fontStyle={"italic"}
            />
            <CustomDashboardNumCard cardBody={"R67"} />
          </Box>

          {/* ------------------------------------- Third Row -------------------------  */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: "0.5rem",
            }}
          >
            <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
              Data Visualization
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Typography variant="h6">
                Last Updated : Aug 20, 2023 T: 13:49
              </Typography>
              <Button
                variant="contained"
                endIcon={<SettingsOutlinedIcon />}
                size="small"
              >
                Customize
              </Button>
            </Box>
          </Box>
          <Divider orientation="horizontal" variant="fullWidth" />

          {/* ----------------------------------End Row ------------------------------- */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <Stack sx={{ width: "40rem" }} spacing={4}>
              {/* First Box */}
              <Box
                sx={{
                  borderRadius: "6px",
                  height: "22rem",
                  p: "0.4rem",
                  px: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  ...theme.typography.dashboardCard,
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: "1.1rem" }}>
                    Lorem Ipsum
                  </Typography>
                  <MoreVertOutlinedIcon sx={{ fontSize: "1.1rem" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    height: "27rem",
                    gap: "1rem",
                    width: "100%",
                  }}
                >
                  <Box sx={{ height: "100%", width: "60%" }}>
                    <ResponsiveContainer width="100%">
                      <PieChart>
                        <Pie
                          dataKey="value"
                          data={expPieData}
                          innerRadius={60}
                          outerRadius={120}
                          cy={140}
                        >
                          {expPieData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={
                                expcolorsofPieChart[
                                  index % expcolorsofPieChart.length
                                ]
                              }
                            />
                          ))}
                        </Pie>
                        <Legend />
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>
                  <Divider orientation="vertical" />

                  <Box
                    sx={{
                      height: "18rem",
                      display: "flex",
                      width: "40%",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0rem",
                        height: "10rem",
                      }}
                    >
                      <Typography variant="h6">Today</Typography>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          width={200}
                          height={100}
                          data={data}
                          margin={{
                            top: 0,
                            right: 20,
                            left: 0,
                            bottom: 5,
                          }}
                        >
                          <XAxis dataKey="name" />
                          <Bar dataKey="pv" fill="#0076CE" />
                          <Bar dataKey="uv" fill="#454b4b" />
                        </BarChart>
                      </ResponsiveContainer>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0rem",
                        height: "10rem",
                      }}
                    >
                      <Typography variant="h6">MTD</Typography>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={data}
                          margin={{
                            top: 0,
                            right: 20,
                            left: 0,
                            bottom: 5,
                          }}
                        >
                          <XAxis dataKey="name" />
                          <Bar dataKey="pv" fill="#0076CE" />
                          <Bar dataKey="uv" fill="#454b4b" />
                        </BarChart>
                      </ResponsiveContainer>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  borderRadius: "6px",
                  height: "22rem",
                  p: "0.4rem",
                  px: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  ...theme.typography.dashboardCard,
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                }}
              >
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h6" sx={{ fontSize: "1.1rem" }}>
                    Lorem Ipsum
                  </Typography>
                  <MoreVertOutlinedIcon sx={{ fontSize: "1.1rem" }} />
                </Stack>
                <Stack spacing={1}>
                  <Stack>
                    <Typography variant="body2">Loremsyen Ipsum</Typography>
                    <Typography variant="h6" color="red">
                      Dolor alt
                    </Typography>
                  </Stack>
                  <Stack
                    sx={{ mt: "0.6rem" }}
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Stack>
                      <Typography variant="subtitle1">
                        Amet Consecuteor
                      </Typography>
                      <Typography variant="body2">Dolor alt</Typography>
                    </Stack>
                    <Stack>
                      <Typography variant="subtitle1">
                        Amet Consecuteor
                      </Typography>
                      <Typography variant="body2">Dolor alt</Typography>
                    </Stack>{" "}
                    <Stack>
                      <Typography variant="subtitle1">Elit sed do:</Typography>
                      <Typography variant="body2">
                        3 hours, 16 minute
                      </Typography>
                    </Stack>
                  </Stack>
                  <Divider orientation="horizontal" variant="fullWidth" />
                  <Stack>
                    <Typography variant="body2">Loremsyen Ipsum</Typography>
                    <Typography variant="h6" color="#228b22">
                      Dolor alt
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
            {/* ---------------------------Second Box  -------------------------------*/}
            <Box
              sx={{
                width: "25rem",
                height: "40rem",
                p: "0.4rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                px: "1rem",
                borderRadius: "6px",
                ...theme.typography.dashboardCard,
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" sx={{ fontSize: "1.1rem" }}>
                  Lorem Ipsum
                </Typography>
                <MoreVertOutlinedIcon sx={{ fontSize: "1.1rem" }} />
              </Box>
              <Box>Indicator box</Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="subtitle1">Lorem Ipsum</Typography>
                  <Typography variant="caption">Lorem </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "1.7rem", color: "#228b22" }}
                  >
                    {" "}
                    60
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    width: "60%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ ml: "0.4rem" }}>
                    Fixed
                  </Typography>
                  <ResponsiveContainer width="100%" height={30}>
                    <BarChart data={dataBar} layout="vertical">
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" hide />
                      <Tooltip />
                      <Bar
                        dataKey="value"
                        fill="#1f305e"
                        stackId="a"
                        barSize={50}
                      >
                        <LabelList
                          dataKey="value"
                          position="insideLeft"
                          fill="white"
                        />
                      </Bar>
                      <Bar
                        dataKey="value2"
                        fill="#0076CE"
                        stackId="a"
                        barSize={50}
                      >
                        <LabelList
                          dataKey="value2"
                          position="insideLeft"
                          fill="white"
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
              <Divider orientation="horizontal" variant="fullWidth" />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="subtitle1">Lorem Ipsum</Typography>
                  <Typography variant="caption">Lorem </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "1.7rem", color: "#228b22" }}
                  >
                    {" "}
                    60
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    width: "60%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ ml: "0.4rem" }}>
                    Fixed
                  </Typography>
                  <ResponsiveContainer width="100%" height={30}>
                    <BarChart data={dataBar} layout="vertical">
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" hide />
                      <Tooltip />
                      <Bar
                        dataKey="value"
                        fill="#1f305e"
                        stackId="a"
                        barSize={50}
                      >
                        <LabelList
                          dataKey="value"
                          position="insideLeft"
                          fill="white"
                        />
                      </Bar>
                      <Bar
                        dataKey="value2"
                        fill="#0076CE"
                        stackId="a"
                        barSize={50}
                      >
                        <LabelList
                          dataKey="value2"
                          position="insideLeft"
                          fill="white"
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
              <Divider orientation="horizontal" variant="fullWidth" />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="subtitle1">Lorem Ipsum</Typography>
                  <Typography variant="caption">Lorem </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "1.7rem", color: "#228b22" }}
                  >
                    {" "}
                    60
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    width: "60%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ ml: "0.4rem" }}>
                    Fixed
                  </Typography>
                  <ResponsiveContainer width="100%" height={30}>
                    <BarChart data={dataBar} layout="vertical">
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" hide />
                      <Tooltip />
                      <Bar
                        dataKey="value"
                        fill="#1f305e"
                        stackId="a"
                        barSize={50}
                      >
                        <LabelList
                          dataKey="value"
                          position="insideLeft"
                          fill="white"
                        />
                      </Bar>
                      <Bar
                        dataKey="value2"
                        fill="#0076CE"
                        stackId="a"
                        barSize={50}
                      >
                        <LabelList
                          dataKey="value2"
                          position="insideLeft"
                          fill="white"
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
              <Divider orientation="horizontal" variant="fullWidth" />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="subtitle1">Lorem Ipsum</Typography>
                  <Typography variant="caption">Lorem </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "1.7rem", color: "#228b22" }}
                  >
                    {" "}
                    60
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    width: "60%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ ml: "0.4rem" }}>
                    Fixed
                  </Typography>
                  <ResponsiveContainer width="100%" height={30}>
                    <BarChart data={dataBar} layout="vertical">
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" hide />
                      <Tooltip />
                      <Bar
                        dataKey="value"
                        fill="#1f305e"
                        stackId="a"
                        barSize={50}
                      >
                        <LabelList
                          dataKey="value"
                          position="insideLeft"
                          fill="white"
                        />
                      </Bar>
                      <Bar
                        dataKey="value2"
                        fill="#0076CE"
                        stackId="a"
                        barSize={50}
                      >
                        <LabelList
                          dataKey="value2"
                          position="insideLeft"
                          fill="white"
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
              <Divider orientation="horizontal" variant="fullWidth" />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="subtitle1">Lorem Ipsum</Typography>
                  <Typography variant="caption">Lorem </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "1.7rem", color: "#228b22" }}
                  >
                    {" "}
                    60
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    width: "60%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ ml: "0.4rem" }}>
                    Fixed
                  </Typography>
                  <ResponsiveContainer width="100%" height={30}>
                    <BarChart data={dataBar} layout="vertical">
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" hide />
                      <Tooltip />
                      <Bar
                        dataKey="value"
                        fill="#1f305e"
                        stackId="a"
                        barSize={50}
                      >
                        <LabelList
                          dataKey="value"
                          position="insideLeft"
                          fill="white"
                        />
                      </Bar>
                      <Bar
                        dataKey="value2"
                        fill="#0076CE"
                        stackId="a"
                        barSize={50}
                      >
                        <LabelList
                          dataKey="value2"
                          position="insideLeft"
                          fill="white"
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
              <Divider orientation="horizontal" variant="fullWidth" />
            </Box>

            {/* Third Box */}
            <Stack spacing={4}>
              <Box
                sx={{
                  width: "37rem",
                  p: "0.4rem",
                  px: "1rem",
                  height: "19rem",
                  borderRadius: "6px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  ...theme.typography.dashboardCard,
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: "1.1rem" }}>
                    Lorem Ipsum
                  </Typography>
                  <MoreVertOutlinedIcon sx={{ fontSize: "1.1rem" }} />
                </Box>
                <Box
                  sx={{
                    height: "80%",
                    width: "100%",
                  }}
                >
                  <Stack direction="row" spacing={4} marginBottom={2}>
                    <Stack direction="column">
                      <Typography variant="h6">QTR TO DATE</Typography>
                      <Typography variant="h4" sx={{ fontSize: "2rem" }}>
                        82%
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography variant="h6">ACTUAL</Typography>
                      <Typography variant="h4" sx={{ fontSize: "2rem" }}>
                        86%
                      </Typography>
                    </Stack>
                    <Typography alignSelf="end" variant="h5" color="#228b22">
                      +5%(26.52)
                    </Typography>
                  </Stack>

                  <ResponsiveContainer width="100%" height="78%">
                    <AreaChart
                      width={500}
                      height={100}
                      data={areaData}
                      margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <Tooltip />
                      <Area dataKey="uv" stroke="#1f305e" fill="#0076ce" />
                    </AreaChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
              {/* ----------------------------------EndBox-------------------------- */}
              <Stack direction="row" spacing={4}>
                <Box
                  sx={{
                    width: "50%",
                    p: "0.4rem",
                    px: "1rem",
                    height: "15rem",
                    borderRadius: "6px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    ...theme.typography.dashboardCard,
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h6" sx={{ fontSize: "1.1rem" }}>
                      Lorem Ipsum
                    </Typography>
                    <MoreVertOutlinedIcon sx={{ fontSize: "1.1rem" }} />
                  </Stack>
                  <Box sx={{ height: "80%" }}>
                    <ResponsiveContainer width="100%">
                      <PieChart>
                        <Pie
                          dataKey="value"
                          data={expPieData}
                          innerRadius={30}
                          outerRadius={60}
                          cy={65}
                        >
                          {expPieData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={
                                expcolorsofPieChart[
                                  index % expcolorsofPieChart.length
                                ]
                              }
                            />
                          ))}
                        </Pie>
                        <Legend />
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    p: "0.4rem",
                    px: "1rem",
                    height: "15rem",
                    borderRadius: "6px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    ...theme.typography.dashboardCard,
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h6" sx={{ fontSize: "1.1rem" }}>
                      Lorem Ipsum
                    </Typography>
                    <MoreVertOutlinedIcon sx={{ fontSize: "1.1rem" }} />
                  </Stack>
                  <Stack alignItems="center">
                    <Typography variant="h4" sx={{ fontSize: "5rem" }}>
                      86
                    </Typography>
                    <ResponsiveContainer width="100%" height={30}>
                      <BarChart data={lastDataBar} layout="vertical">
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" hide />
                        <Tooltip />
                        <Bar
                          dataKey="value"
                          fill="#1f305e"
                          stackId="a"
                          barSize={50}
                        >
                          <LabelList
                            dataKey="value"
                            position="insideLeft"
                            fill="white"
                          />
                        </Bar>
                        <Bar
                          dataKey="value2"
                          fill="#0076CE"
                          stackId="a"
                          barSize={50}
                        >
                          <LabelList
                            dataKey="value2"
                            position="insideLeft"
                            fill="white"
                          />
                        </Bar>
                        <Bar
                          dataKey="value3"
                          fill="#454b4b"
                          stackId="a"
                          barSize={50}
                        >
                          <LabelList
                            dataKey="value3"
                            position="insideLeft"
                            fill="white"
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                    <Stack direction="row" spacing={3}>
                      <Stack alignItems="center">
                        <Typography variant="subtitle1">16</Typography>
                        <Typography variant="caption">Lorem</Typography>
                      </Stack>
                      <Stack alignItems="center">
                        <Typography variant="subtitle1">140</Typography>
                        <Typography variant="caption">Lorem</Typography>
                      </Stack>{" "}
                      <Stack alignItems="center">
                        <Typography variant="subtitle1">90</Typography>
                        <Typography variant="caption">Lorem</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>{" "}
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
