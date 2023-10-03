import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import CustomFilter from "../../../ui-component/CustomUIComp/CustomFilter";
import CustomCard from "../../../ui-component/CustomUIComp/CustomCard";
import { styled, useTheme } from "@mui/material/styles";
import colors from "../../../assets/scss/_themes-vars.module.scss";
import { TransitionProps } from "@mui/material/transitions";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DragDrop from "../../components/DragDrop";
import { testSuiteData } from "../../../mockData";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../store/reducer";
import {
  setSelectTestData,
  setSetupTestNull,
  setTestSuiteDetail,
} from "../../../features/setupTestSlice";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

import MainCard from "../../../ui-component/cards/MainCard";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface TestSuiteTypos {
  id: string;
  title: string;
  details: string;
}

const SetupaTest = (): ReactElement => {
  const theme = useTheme<any>();
  const color = colors;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [testSuites, setTestSuites] = useState<TestSuiteTypos[]>(testSuiteData);

  const { selectTestSuite, dutConfigData } = useSelector((state: AppState) => state.setupTest);
  const dispatch: AppDispatch = useDispatch();
  const handlePopupClose = () => dispatch(setSelectTestData(null));

  useEffect(() => {
    // dispatch(setSetupTestNull());
    dutConfigData ? setIsOpen(false) : setIsOpen(true)
  }, []);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <CustomFilter
            heading={"Select a Test Suite"}
            title={"Filter by test suite: "}
            showScheduleBtn={true}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
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
            {testSuites.map((test: TestSuiteTypos) => {
              return (
                <CustomCard
                  key={test.id}
                  testSuiteData={test}
                  selectBtnVal={""}
                />
              );
            })}
          </Box>
        </Grid>

        {/* -------------------------------------------------- Drag Drop Dialog Box--------------------------------------------- */}

        <Dialog
          PaperProps={{
            style: {
              maxWidth: "90rem",
              ...theme.typography.darkModeBg4,
            },
          }}
          sx={{ width: "100%", height: "100%" }}
          open={!!selectTestSuite}
        >
          <Box sx={{ textAlign: "right" }}>
            <Button size="small" onClick={handlePopupClose}>
              <CloseOutlinedIcon sx={{ color: "red" }} />
            </Button>
          </Box>

          <DialogTitle
            sx={{
              pt: "0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
              Test Suite Details
            </Typography>
            <ArrowRightOutlinedIcon />
            <Typography variant="body1" sx={{ ml: ".4rem", mt: ".1rem" }}>
              {selectTestSuite?.title}
            </Typography>
          </DialogTitle>

          <Divider orientation="horizontal" />

          <DialogContent
            sx={{
              pb: "1rem",
              overflow: "hidden",
            }}
          >
            <Typography variant="subtitle1" sx={{}}>
              Test Blocks
            </Typography>
          </DialogContent>

          <DialogContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <DragDrop />
          </DialogContent>
        </Dialog>

{/* ----------------------------------------------------- Dialog Box--------------------------------------- */}

<Dialog
          PaperProps={{
            style: {
              maxWidth: "90rem",
              ...theme.typography.darkModeBg4,
            },
          }}
          sx={{ width: "100%", height: "100%", backdropFilter: 'blur(8px)' }}
          open={isOpen}
        >
          <Box sx={{ textAlign: "right" }}>
            <Button size="small" onClick={() => navigate('/')}>
              <CloseOutlinedIcon sx={{ color: "red" }} />
            </Button>
          </Box>

          <DialogTitle
            sx={{
              pt: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: 'center'
            }}
          >
            <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
            How do you want to start ?
            </Typography>
          
          </DialogTitle>

          <Divider orientation="horizontal" />

          <DialogContent
            sx={{
              pb: "1rem",
              overflow: "hidden",
              display: 'flex',
              gap: "2rem"
            }}
          >
           <Button variant="contained">Schedule a test</Button>
           <Button variant="contained" onClick={() => navigate('/tests/setup-phase')}>Configure from scratch</Button>
          </DialogContent>
        </Dialog>

      </Grid>
    </>
  );
};

export default SetupaTest;
