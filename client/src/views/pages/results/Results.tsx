import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import CustomFilter from "../../../ui-component/CustomUIComp/CustomFilter";
import CustomMyTestCard from "../../../ui-component/CustomUIComp/CustomMyTestCard";
import CustomSelectOption from "../../../ui-component/CustomUIComp/CustomSelectOption";
import SelectOption from "../../../ui-component/extended/CustomSelect";

const pieChartData = [
  {
    value: 82,
    name: "Pass",
  },
  {
    value: 12,
    name: "Fail",
  },
];

const colorsofPieChart = ["#0076CE", "#454b4b"];

const Results = () => {
  const theme = useTheme<any>();
  const [openResultPopup, setOpenResultPopup] = useState(false);
  const handlePopupClose = () => setOpenResultPopup(false);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <Box
          sx={{
            ...theme.typography.darkModeBg4,
            display: "flex",
            minHeight: "5rem",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            px: "1rem",
            py: "0.7rem",
            borderRadius: "8px",
            gap: "1rem",
          }}
        >
          <CustomSelectOption
            label="Select Firmware"
            name="firmware"
            value="Firmware 1"
            onChange={(event) => {}}
            width="15rem"
          />
          <CustomSelectOption
            label="Select Test Suite"
            name="test-suite"
            value="Firmware 1"
            onChange={(event) => {}}
            width="15rem"
          />
          <Button
            variant="contained"
            sx={{
              ...theme.typography.diabledButton,
            }}
            disabled={true}
          >
            View
          </Button>
          <Button variant="contained">Clear</Button>
        </Box>
      </Grid>
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Box>
                <Typography variant="h5">Test Suite 1 Results</Typography>
                <Typography variant="body2">Firmware</Typography>
                <CustomFilter title={"Filter by tags"} />
                <Divider orientation="horizontal" />
              </Box>
            </Grid>

            <Grid item xs={12} md={12}>
              <Box>
                <CustomMyTestCard
                  setOpenResultPopup={setOpenResultPopup}
                  resultPage={true}
                />
                <CustomMyTestCard
                  setOpenResultPopup={setOpenResultPopup}
                  resultPage={true}
                />
                <CustomMyTestCard
                  setOpenResultPopup={setOpenResultPopup}
                  resultPage={true}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      {/* --------------------------------------------------Dialog Box--------------------------------------------- */}

      <Dialog
        PaperProps={{
          style: {
            maxWidth: "55rem",
            ...theme.typography.darkModeBg4,
          },
        }}
        aria-describedby="alert-dialog-slide-description"
        open={openResultPopup}
      >
        <Box sx={{ textAlign: "right" }}>
          <Button size="small" onClick={() => setOpenResultPopup(false)}>
            <CloseOutlinedIcon sx={{ color: "red" }} />
          </Button>
        </Box>

        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "flex-start",
            pt: "0",
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexWrap: "wrap",

              gap: "0.4rem",
              height: "100%",
            }}
          >
            <Typography variant="h5" sx={{ fontSize: "1.4rem" }}>
              Test Config 1
            </Typography>
            <Box sx={{ alignSelf: "flex-end" }}>
              <Typography variant="h6">Reserver Name</Typography>
              <Typography variant="h6">Date</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "flex-end",
            }}
          >
            <Chip
              sx={{ color: "white", background: "#0076CE" }}
              label="Completed"
            />
          </Box>
        </DialogTitle>
        <Divider orientation="horizontal" sx={{ background: "black" }} />

        <Box sx={{}}>
          <DialogContent
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4rem",
              flexWrap: "wrap",
              overflowY: "scroll",
              maxHeight: "18rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "1.2rem",
                flex: "1 0 auto",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: 180, height: 200, pl: "1rem" }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={pieChartData}
                      innerRadius={40}
                      outerRadius={80}
                      cy={77}
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            colorsofPieChart[index % colorsofPieChart.length]
                          }
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend
                      align="center"
                      verticalAlign="bottom"
                      layout="horizontal"
                      wrapperStyle={{ marginTop: "40px" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Box sx={{ mt: "1.4rem" }}>
                <Typography variant="body1">Pass/Total</Typography>
                <Typography variant="h5" sx={{ fontSize: "1.6rem" }}>
                  24/19
                </Typography>
                <Typography variant="body1" sx={{ mt: "1rem", mr: "2rem" }}>
                  Grade
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "1.6rem", mr: "1.2rem" }}
                >
                  82%
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                maxHeight: "10rem",
                flex: "1 1 auto",
                maxWidth: "25rem",
              }}
            >
              <Stack spacing={1}>
                <Accordion sx={{ ...theme.typography.darkModeBg3 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="body1">Meta Data</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ListItem sx={{ ...theme.typography.darkModeBg4 }}>
                      <ListItemText primary="User" secondary="username" />
                      <ListItemText primary="Start Time" secondary="username" />
                    </ListItem>
                    <ListItem sx={{ ...theme.typography.darkModeBg4 }}>
                      <ListItemText
                        primary="Certification Run"
                        secondary="username"
                      />
                      <ListItemText primary="Test Suit" secondary="username" />
                    </ListItem>
                    <ListItem sx={{ ...theme.typography.darkModeBg4 }}>
                      <ListItemText
                        primary="Data Directory"
                        secondary="username"
                      />
                      <ListItemText
                        primary="Test Type"
                        secondary="username"
                        color="red"
                      />
                    </ListItem>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ ...theme.typography.darkModeBg3 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Baseline</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ ...theme.typography.darkModeBg3 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Visualization</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </Box>
          </DialogContent>
          <Divider orientation="horizontal" sx={{ background: "black" }} />

          <DialogContent
            sx={{
              textAlign: "center",
              maxHeight: "12rem",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "2rem",
            }}
          >
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                Detailed Results
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography
                  variant="body2"
                  sx={{ mt: ".3rem", mb: ".2rem", mr: "4rem" }}
                >
                  Visualization
                </Typography>
                <Typography variant="body2" sx={{ mt: ".3rem", mb: ".4rem" }}>
                  Pramesh's friend who is here hardly any issues he got
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography
                  variant="body2"
                  sx={{ mt: ".3rem", mb: ".2rem", mr: "4rem" }}
                >
                  Visualization
                </Typography>
                <Typography variant="body2" sx={{ mt: ".3rem", mb: ".4rem" }}>
                  Pramesh's friend who is here hardly any issues he got
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography
                  variant="body2"
                  sx={{ mt: ".3rem", mb: ".2rem", mr: "4rem" }}
                >
                  Visualization
                </Typography>
                <Typography variant="body2" sx={{ mt: ".3rem", mb: ".4rem" }}>
                  Pramesh's friend who is here hardly any issues he got
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography
                  variant="body2"
                  sx={{ mt: ".3rem", mb: ".2rem", mr: "4rem" }}
                >
                  Visualization
                </Typography>
                <Typography variant="body2" sx={{ mt: ".3rem", mb: ".4rem" }}>
                  Pramesh's friend who is here hardly any issues he got
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography
                  variant="body2"
                  sx={{ mt: ".3rem", mb: ".2rem", mr: "4rem" }}
                >
                  Visualization
                </Typography>
                <Typography variant="body2" sx={{ mt: ".3rem", mb: ".4rem" }}>
                  Pramesh's friend who is here hardly any issues he got
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography
                  variant="body2"
                  sx={{ mt: ".3rem", mb: ".2rem", mr: "4rem" }}
                >
                  Visualization
                </Typography>
                <Typography variant="body2" sx={{ mt: ".3rem", mb: ".4rem" }}>
                  Pramesh's friend who is here hardly any issues he got
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography
                  variant="body2"
                  sx={{ mt: ".3rem", mb: ".2rem", mr: "4rem" }}
                >
                  Visualization
                </Typography>
                <Typography variant="body2" sx={{ mt: ".3rem", mb: ".4rem" }}>
                  Pramesh's friend who is here hardly any issues he got
                </Typography>
              </Box>
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
              onClick={() => setOpenResultPopup(false)}
            >
              Back
            </Button>
            <Button variant="contained">Download</Button>
          </DialogContent>
        </Box>
      </Dialog>
    </Grid>
  );
};

export default Results;
