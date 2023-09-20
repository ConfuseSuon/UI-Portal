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
import React, { ReactElement, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import PhaseCard from "../../../ui-component/CustomUIComp/PhaseCard";
import { useNavigate } from "react-router";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../store/reducer";
import { setSetupTestNull } from "../../../features/setupTestSlice";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

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
  const { testSuiteDetail, selectTopoloy, testBlockData, dutConfigData } =
    useSelector((state: AppState) => state.setupTest);

  useEffect(() => {
    if (!testSuiteDetail) {
      navigate("/tests/setup-a-test");
    }
  }, []);

  const [openPopup, setOpenPopup] = useState(false);
  const handlePopupClose = () => setOpenPopup(false);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontSize: "1.2rem" }}
          >
            Testing
          </Typography>
          <ArrowRightOutlinedIcon />
          <Typography variant="body1" sx={{ ml: ".4rem", mt: ".1rem" }}>
            {" "}
            {testSuiteDetail?.title}{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Box
          sx={{
            borderRadius: "7px",
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
            p: "1rem",
            ...theme.typography.darkModeBg4,
          }}
        >
          <PhaseCard
            title={"Topology"}
            routeTo={"/manage/topologies"}
            viewBy={"topology"}
          />
          <PhaseCard title={"DUT Configuratios"} viewBy={"DUT"} />
          <PhaseCard
            title={"Test Suite"}
            data={testSuiteDetail}
            blockData={testBlockData}
            viewBy={"testSuite"}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
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
            sx={{ ...theme.typography.diabledButton }}
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

        {/* <DialogContent sx={{ display: "flex", gap: "4rem" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <Typography variant="subtitle1">Topology :</Typography>
            <Typography variant="subtitle1">Topology :</Typography>
            <Typography variant="subtitle1">Topology :</Typography>
            <Typography variant="subtitle1">Topology :</Typography>
            <Typography variant="subtitle1">Topology :</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2.9rem",
              mt: ".5rem",
            }}
          >
            <Typography variant="body1">Topology </Typography>
            <Typography variant="body1">Topology </Typography>
            <Typography variant="body1">Topology </Typography>
            <Typography variant="body1">Topology </Typography>
            <Typography variant="body1">Topology </Typography>
          </Box>
        </DialogContent> */}

        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: "10rem",
            }}
          >
            <Typography variant="subtitle1">Topology :</Typography>{" "}
          </Box>
          <Box sx={{}}>
            <Typography variant="body1">{selectTopoloy?.title}</Typography>{" "}
          </Box>
        </DialogContent>

        <DialogContent
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: "10rem",
              textAlign: "left",
            }}
          >
            <Typography variant="subtitle1">DUT :</Typography>{" "}
          </Box>
          <Box sx={{ display: "flex", gap: ".8rem", flexWrap: "wrap" }}>
            <Typography variant="body1">
              {dutConfigData?.sshCheckValue}
            </Typography>
            <Typography variant="body1">
              {dutConfigData?.channel1Value}
            </Typography>{" "}
            <Typography variant="body1">
              {dutConfigData?.channel2Value}
            </Typography>{" "}
            <Typography variant="body1">{dutConfigData?.ssid1Value}</Typography>{" "}
            <Typography variant="body1">{dutConfigData?.ssid2Value}</Typography>{" "}
          </Box>
        </DialogContent>

        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: "10rem",
              textAlign: "left",
            }}
          >
            <Typography variant="subtitle1">Test Suite :</Typography>{" "}
          </Box>
          <Box sx={{}}>
            <Typography variant="body1">{testSuiteDetail?.title}</Typography>{" "}
          </Box>
        </DialogContent>

        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: "10rem",
              textAlign: "left",
            }}
          >
            <Typography variant="subtitle1">Reserved By :</Typography>{" "}
          </Box>
          <Box sx={{}}>
            <Typography variant="body1">
              {selectTopoloy?.reservationName}
            </Typography>{" "}
          </Box>
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
