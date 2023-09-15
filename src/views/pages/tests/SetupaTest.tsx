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
  const [isOpen, setIsOpen] = useState(false);
  const [testSuites, setTestSuites] = useState<TestSuiteTypos[]>(testSuiteData);

  const { selectTestSuite } = useSelector((state: AppState) => state.setupTest);
  const dispatch: AppDispatch = useDispatch();
  const handlePopupClose = () => dispatch(setSelectTestData(null));

  useEffect(() => {
    dispatch(setSetupTestNull());
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
              px: "1rem",
              py: "1rem",
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              gap: "3rem",
              alignItems: "flex-start",
              [theme.breakpoints.down("sm")]: {
                justifyContent: "center",
                gap: "1.5rem",
              },
              // [theme.breakpoints.down("xs")]: {
              //   flexDirection: "column",
              //   justifyContent: "center",
              //   gap: "1.5rem",
              // },
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

        {/* --------------------------------------------------Dialog Box--------------------------------------------- */}

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
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "1.1rem" }}>
              Test Suite Details:{" "}
              <span style={{ fontWeight: "400", fontSize: "1rem" }}>
                {selectTestSuite?.title}
              </span>
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
      </Grid>
    </>
  );
};

export default SetupaTest;
