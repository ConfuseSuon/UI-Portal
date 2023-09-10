import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { ReactElement, useState } from "react";
import { useTheme } from "@mui/material/styles";
import PhaseCard from "../../../ui-component/CustomUIComp/PhaseCard";
import { useNavigate } from "react-router";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../store/reducer";
import { setSetupTestNull } from "../../../features/setupTestSlice";

const PhaseDivider = (): ReactElement => {
  const theme = useTheme<any>();

  return (
    <Divider
      sx={{
        ...theme.typography.darkModeBg3,
        width: "1px",
        mt: "10rem",
        height: "14rem",
        transform: "rotate(90deg)",
      }}
    />
  );
};

const SetupPhase = (): ReactElement => {
  const theme = useTheme<any>();
  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();
  const { testSuiteDetail, selectTopoloy } = useSelector(
    (state: AppState) => state.setupTest
  );

  const [openPopup, setOpenPopup] = useState(false);
  const handlePopupClose = () => setOpenPopup(false);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Box sx={{}}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontSize: "1.2rem" }}
          >
            Testing For : <span style={{ marginLeft: ".4rem" }} />{" "}
            {testSuiteDetail?.title}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={12}>
        <Box
          sx={{
            height: "70vh",
            borderRadius: "7px",
            display: "flex",
            justifyContent: "space-around",
            p: "1rem",
            ...theme.typography.darkModeBg4,
          }}
        >
          <PhaseCard
            title={"Topology"}
            routeTo={"/manage/topologies"}
            selectTopoloy={selectTopoloy}
          />
          <PhaseDivider />
          <PhaseCard title={"DUT Configuratios"} />
          <PhaseDivider />
          <PhaseCard title={"Test Suite"} data={testSuiteDetail} />
        </Box>
      </Grid>
      <Grid item xs={12} md={12}>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/tests/setup-a-test")}
          >
            Back
          </Button>

          <Button variant="contained">Clear</Button>
          <Button
            variant="contained"
            onClick={() => {
              selectTopoloy && setOpenPopup(true);
            }}
            disabled={!selectTopoloy}
          >
            Next
          </Button>
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
        style={{
          backdropFilter: "blur(2px)",
        }}
        aria-describedby="alert-dialog-slide-description"
        open={openPopup}
      >
        <Box sx={{ textAlign: "right" }}>
          <Button size="small" onClick={handlePopupClose}>
            <CloseOutlinedIcon sx={{ color: "red" }} />
          </Button>
        </Box>

        <DialogTitle sx={{ pt: 0 }}>
          <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
            Confirm test configuration details
          </Typography>
        </DialogTitle>
        <Divider orientation="horizontal" sx={{ background: "black" }} />

        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "5rem",
            gap: "2rem",
          }}
        >
          <Typography variant="subtitle1">Topology :</Typography>{" "}
          <Typography variant="body1">{selectTopoloy?.title}</Typography>{" "}
        </DialogContent>

        <DialogContent
          sx={{
            textAlign: "center",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            height: "5rem",
            gap: "2rem",
          }}
        >
          <Typography variant="subtitle1">DUT :</Typography>{" "}
        </DialogContent>

        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "5rem",
            gap: "2rem",
          }}
        >
          <Typography variant="subtitle1">Test Suite :</Typography>{" "}
          <Typography variant="body1">{testSuiteDetail?.title}</Typography>{" "}
        </DialogContent>

        <DialogContent
          sx={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            height: "5rem",
            gap: "2rem",
          }}
        >
          <Typography variant="subtitle1">Reserved By :</Typography>{" "}
          <Typography variant="body1">
            {selectTopoloy?.reservationName}
          </Typography>{" "}
        </DialogContent>

        <DialogContent
          sx={{
            textAlign: "center",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            height: "7rem",
            gap: "2rem",
          }}
        >
          <Typography variant="subtitle1">Note:</Typography>
          <TextField
            label="Multiline Text"
            multiline
            fullWidth
            variant="outlined"
          />
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
          <Button variant="contained">Back</Button>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/tests/my-tests");
              dispatch(setSetupTestNull());
            }}
          >
            Start
          </Button>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default SetupPhase;
