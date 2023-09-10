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
import React, { ReactElement, useState } from "react";
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
  setTestSuiteDetail,
} from "../../../features/setupTestSlice";

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
        <Grid item xs={12} md={12}>
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
              overflow: "initial",
              minHeight: "10rem",
              maxWidth: "55rem",
              width: "70%",
              ...theme.typography.darkModeBg4,
            },
          }}
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
            <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
              Test Suite Details: {selectTestSuite?.title}
            </Typography>
          </DialogTitle>

          <Divider orientation="horizontal" />

          <DialogContent
            sx={{
              pb: "0",
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "1rem" }}>
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

          <Divider orientation="horizontal" />

          <DialogContent>
            <Stack justifyContent="flex-end" direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(setTestSuiteDetail(selectTestSuite));
                  navigate("/tests/setup-phase");
                }}
              >
                Next
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
      </Grid>
    </>
  );
};

export default SetupaTest;
