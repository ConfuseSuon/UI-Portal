import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Popper,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { Fragment, useRef, useState } from "react";
import PerfectScrollBar from "react-perfect-scrollbar";
import MockGem from "../../../assets/mockGem.jpg";
import { topologyAssetData } from "../../../mockData";
import CustomOutlinedInput from "../../../ui-component/CustomUIComp/CustomOutlinedInput";
import CustomSearch from "../../../ui-component/CustomUIComp/CustomSearch";

import { Add, DoubleArrow } from "@mui/icons-material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HotelIcon from "@mui/icons-material/Hotel";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import RepeatIcon from "@mui/icons-material/Repeat";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import MainCard from "../../../ui-component/cards/MainCard";
import Transitions from "../../../ui-component/extended/Transitions";

type Props = {};

export interface TypeTopologyAssetData {
  id: string;
  title: string;
  filter: string[];
}

const AddTopology = (props: Props) => {
  const theme = useTheme<any>();
  const [data, setData] = useState<TypeTopologyAssetData[]>(topologyAssetData);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const anchorRef = useRef<HTMLElement | HTMLDivElement | any | null>(null);

  const handleClose = (event: any): void => {
    if (anchorRef.current?.contains(event.target) ?? false) {
      return;
    }
    setModalIsOpen(false);
  };

  return (
    <Grid container spacing={1}>
      <Grid item md={4} sm={12} xs={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            p: "1rem",
            ...theme.typography.darkModeBg4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
            }}
          >
            <Typography variant="h5">Available Assets:</Typography>
            <Box
              sx={{
                display: "flex",
                gap: ".5rem",
                flexWrap: "wrap",
              }}
            >
              <FilterListIcon sx={{}} />
              <Typography variant="caption">FILTER</Typography>
              <CustomSearch
                id="filled-start-adornment"
                placeholder="search"
                sx={{ margin: "auto" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        sx={{
                          mt: "2px",
                          fontSize: "1rem",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
          {/* box card */}

          <PerfectScrollBar>
            <Box
              sx={{
                height: "100vh",
                px: "1rem",
              }}
            >
              {data.map((items: TypeTopologyAssetData) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: "2rem",
                      gap: "1rem",
                      cursor: "pointer",
                      flexDirection: "row",
                      p: "1rem",
                      borderRadius: "8px",
                      ...theme.typography.darkModeBg3,
                      flexWrap: "wrap",
                    }}
                    key={items.id}
                  >
                    <Box sx={{}}>
                      <Avatar
                        src={MockGem}
                        variant="square"
                        sx={{
                          width: "6rem",
                          height: "4rem",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".7rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography variant="h5">{items.title}</Typography>
                      <Box
                        sx={{
                          display: "flex",
                          gap: ".3rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <Chip label={items.filter[0]} size="small" />
                        <Chip label={items.filter[1]} size="small" />
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </PerfectScrollBar>
        </Box>
      </Grid>
      <Divider />
      <Grid item md={8} sm={12} xs={12}>
        <Box
          sx={{
            ...theme.typography.darkModeBg4,
            p: "1rem",
          }}
        >
          <Typography variant="h5"> Select a device</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ flex: "1 1 auto" }}>
              <Timeline position="right">
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: "auto 0" }}>
                    <Typography variant="subtitle1">Device</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator sx={{ cursor: "pointer" }}>
                    <TimelineConnector />
                    <TimelineDot>
                      <DateRangeIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ m: "auto 0", cursor: "pointer" }}>
                    <Button
                      size="small"
                      endIcon={
                        <Add
                          sx={{ m: "auto 0" }}
                          onClick={() => setModalIsOpen(true)}
                        />
                      }
                    >
                      Manage
                    </Button>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: "auto 0" }}>
                    <Typography variant="subtitle1">Chamber</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ m: "auto 0", cursor: "pointer" }}>
                    <Button size="small" endIcon={<Add sx={{ m: "auto 0" }} />}>
                      Manage
                    </Button>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: "auto 0" }}>
                    <Typography variant="subtitle1">Device</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <DateRangeIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ m: "auto 0", cursor: "pointer" }}>
                    <DoubleArrow sx={{ fontSize: "1.3rem" }} />
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: "auto 0" }}>
                    <Typography variant="subtitle1">Chamber</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ m: "auto 0", cursor: "pointer" }}>
                    <DoubleArrow sx={{ fontSize: "1.3rem" }} />
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: "auto 0" }}>
                    <Typography variant="subtitle1">Device</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <DateRangeIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ m: "auto 0", cursor: "pointer" }}>
                    <DoubleArrow sx={{ fontSize: "1.3rem" }} />
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ m: "auto 0" }}>
                    <Typography variant="subtitle1">Software</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <WidgetsOutlinedIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ m: "auto 0", cursor: "pointer" }}>
                    <DoubleArrow sx={{ fontSize: "1.3rem" }} />
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    <Typography variant="subtitle1">Software</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <WidgetsOutlinedIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ m: "auto 0", cursor: "pointer" }}>
                    <DoubleArrow sx={{ fontSize: "1.3rem" }} />
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Box>

            {/* ----------------------Popper------------------------------ */}
            {/* <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
              <Popper
                placement="bottom-end"
                open={true}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [200, 100],
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
                          border={false}
                          elevation={16}
                          content={false}
                          boxShadow
                          shadow={theme.shadows[16]}
                        >
                          <Box sx={{ height: "10rem", background: "red" }}>
                            hi
                          </Box>
                        </MainCard>
                      </ClickAwayListener>
                    </Paper>
                  </Transitions>
                )}
              </Popper>
            </Box> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AddTopology;
