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
import { areaData, data, dataBar, lastDataBar } from "../../../mockData";
import { useState } from "react";
import { dashboardNumCardData } from "../../../mockData";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { ResetTvRounded } from "@mui/icons-material";
import { createPortal } from "react-dom";

export interface DashboardNumCardTypos {
  id: string;
  heading: string;
  title: string;
  footer: string;
}

const Dashboard = () => {
  const theme = useTheme<any>();
  const [numCardData, setNumCardData] =
    useState<DashboardNumCardTypos[]>(dashboardNumCardData);
  const [activeCard, setActiveCard] = useState<DashboardNumCardTypos | null>(
    null
  );

  const numCardDataId = numCardData?.map(
    (data: DashboardNumCardTypos) => data.id
  );

  const dragStart = (event: DragStartEvent) => {
    if (event?.active?.data?.current?.type === "cardData") {
      setActiveCard(event.active.data.current?.cardData);
    }
  };

  const sensor = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 0, // 300px
      },
    })
  );

  const dragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    const activeCardId = active.id;
    const overCardId = over.id;

    if (activeCardId === overCardId) return;
    setNumCardData((card) => {
      const activeCardIndex = card.findIndex((data) => data.id == activeCardId);
      const overCardIndex = card.findIndex((data) => data.id == overCardId);

      return arrayMove(numCardData, activeCardIndex, overCardIndex);
    });
  };

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
              flexWrap: "wrap",
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
                gap: ".7rem",
                flexWrap: "wrap",
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
          <DndContext
            onDragStart={dragStart}
            sensors={sensor}
            onDragEnd={dragEnd}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                gap: "3rem",
                [theme.breakpoints.down("sm")]: {
                  justifyContent: "center",
                  gap: "1.5rem",
                },
                // background: "red",
              }}
            >
              <SortableContext items={numCardDataId}>
                {!!numCardData &&
                  numCardData.map((data, index) => {
                    return (
                      <CustomDashboardNumCard
                        key={data.id}
                        cardData={data}
                        color={
                          index == 1 ? "#ffdf00" : index == 2 ? "#228b22" : ""
                        }
                        fontStyle={index == 2 || index == 3 ? "italic" : ""}
                      />
                    );
                  })}
                {createPortal(
                  <DragOverlay>
                    {activeCard ? (
                      <CustomDashboardNumCard cardData={activeCard} />
                    ) : null}
                  </DragOverlay>,
                  document.body
                )}
              </SortableContext>
              {/* <CustomDashboardNumCard
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
            <CustomDashboardNumCard cardBody={"R67"} /> */}
            </Box>
          </DndContext>

          {/* ------------------------------------- Third Row -------------------------  */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              mt: "1rem",
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
                gap: ".7rem",
                flexWrap: "wrap",
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

          {/* ----------------------------------End Chart Row ------------------------------- */}
          <Grid container spacing={2}>
            {/* First Box */}
            <Grid item md={6} sm={12} xs={12}>
              {/* First Box Contain 1 */}
              <Box
                sx={{
                  borderRadius: "6px",
                  py: "0.4rem",
                  px: "1rem",
                  mb: "1rem",
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
                    gap: ".5rem",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                  }}
                >
                  <Box sx={{ pb: "1rem" }}>
                    <ResponsiveContainer width={300} height={300}>
                      <PieChart>
                        <Pie
                          dataKey="value"
                          data={expPieData}
                          innerRadius={40}
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
                        <Legend
                          layout="horizontal"
                          align="center"
                          verticalAlign="bottom"
                        />
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>
                  <Divider orientation="vertical" />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexWrap: "wrap",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0rem",
                      }}
                    >
                      <Typography variant="h6">Today</Typography>
                      <ResponsiveContainer width={200} height={150}>
                        <BarChart data={data}>
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
                      <ResponsiveContainer width={200} height={150}>
                        <BarChart data={data}>
                          <XAxis dataKey="name" />
                          <Bar dataKey="pv" fill="#0076CE" />
                          <Bar dataKey="uv" fill="#454b4b" />
                        </BarChart>
                      </ResponsiveContainer>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* First Box Contain 2 */}
              <Box
                sx={{
                  borderRadius: "6px",
                  height: "22rem",
                  p: "0.4rem",
                  mb: "1rem",
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
                  <Box
                    sx={{
                      mt: "0.6rem",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "1rem",
                      justifyContent: "space-between",
                    }}
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
                  </Box>
                  <Divider orientation="horizontal" variant="fullWidth" />
                  <Stack>
                    <Typography variant="body2">Loremsyen Ipsum</Typography>
                    <Typography variant="h6" color="#228b22">
                      Dolor alt
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              {/* First Box Contain 3 */}
              <Box
                sx={{
                  p: "0.4rem",
                  px: "1rem",
                  borderRadius: "6px",
                  width: "100%",
                  mb: "1rem",
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
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      mb: "2rem",
                      flexWrap: "wrap",
                    }}
                  >
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
                        <span
                          style={{
                            color: "green",
                            fontSize: ".9rem",
                            marginLeft: ".5rem",
                            fontWeight: "500",
                          }}
                        >
                          +5%(26.52)
                        </span>
                      </Typography>
                    </Stack>
                  </Box>

                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={areaData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <Tooltip />
                      <Area dataKey="uv" stroke="#1f305e" fill="#0076ce" />
                    </AreaChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
            </Grid>
            {/* ---------------------------Second Box  -------------------------------*/}
            <Grid item md={6} sm={12} xs={12}>
              {/* Second Box Contain 1 */}
              <Box
                sx={{
                  py: "0.4rem",
                  mb: "1rem",
                  px: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
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
              </Box>
              {/* Second Box Contain 2 */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <Box
                  sx={{
                    p: "0.4rem",
                    width: "17rem",
                    flex: "1 1 auto",
                    px: "1rem",
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ResponsiveContainer width={250} height={200}>
                      <PieChart>
                        <Pie
                          dataKey="value"
                          data={expPieData}
                          innerRadius={20}
                          outerRadius={55}
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
                        <Legend
                          align="center"
                          verticalAlign="bottom"
                          layout="horizontal"
                        />
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "17rem",
                    p: "0.4rem",
                    px: "1rem",
                    flex: "1 1 auto",

                    borderRadius: "6px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    ...theme.typography.dashboardCard,
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
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
