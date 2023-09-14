import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { ReactElement, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Icon123 } from "@tabler/icons";
import { useNavigate } from "react-router";
import { TestSuiteTypos } from "../../views/pages/tests/SetupaTest";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../store/reducer";
import {
  setActiveTopologies,
  setDutConfigData,
  setNavigatingSetupTest,
} from "../../features/setupTestSlice";
import { TopologiesTypo } from "../../views/pages/manage/Inventory";
import { TaskTypos } from "../../views/components/DragDrop";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CustomSelectOption from "./CustomSelectOption";
import NetworkCheckOutlinedIcon from "@mui/icons-material/NetworkCheckOutlined";
import {
  channel1Data,
  channel2Data,
  ssid1Data,
  ssid2Data,
} from "../../mockData";
interface Props {
  title: string;
  routeTo?: string;
  data?: TestSuiteTypos | null;
  blockData?: TaskTypos[] | null;
  viewBy: string;
}

const PhaseCard = (props: Props): ReactElement => {
  const theme = useTheme<any>();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [showDUTModal, setShowDUTModal] = useState<boolean>(false);
  const [byPass, setByPass] = useState<boolean>(false);

  const [sshCheckValue, setSshCheckValue] = useState<string>("");
  const [channel1Value, setChannel1Value] = useState<any>();
  const [channel2Value, setChannel2Value] = useState<any>();
  const [ssid1Value, setSsid1value] = useState<any>();
  const [ssid2Value, setSsid2value] = useState<any>();

  const { title, routeTo, data, viewBy } = props;
  const { testBlockData, selectTopoloy, dutConfigData } = useSelector(
    (state: AppState) => state.setupTest
  );

  console.log(sshCheckValue, "chann");

  return (
    <>
      <Card
        sx={{
          minWidth: "20rem",
          ...theme.typography.darkModeBg3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ alignSelf: "center", height: "40%" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>

        {/* Test Suite Card Content */}
        {viewBy === "testSuite" ? (
          !!data ? (
            <>
              <CardContent
                sx={{
                  alignSelf: "flex-start",
                  height: "50%",
                  width: "20rem",
                  whiteSpace: "wrap",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ mb: "1rem", ml: "1rem" }}
                >
                  {data.title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ mb: "1rem", ml: "1rem" }}
                >
                  {data.details}
                </Typography>
                <Divider orientation="horizontal" />
                <Box
                  sx={{
                    display: "flex",
                    mt: "1rem",
                    ml: "1rem",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  {testBlockData != null ? (
                    testBlockData?.map((data: TaskTypos) => (
                      <Chip
                        key={data.id}
                        label={data.title}
                        variant="outlined"
                      />
                    ))
                  ) : (
                    <Typography>No task data</Typography>
                  )}
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  height: "20%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Button variant="outlined">Reset</Button>
                <Button variant="outlined">Edit</Button>
              </CardActions>
            </>
          ) : (
            <CardActions
              sx={{
                height: "60%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  navigate("/tests/setup-a-test");
                }}
              >
                Select
              </Button>
            </CardActions>
          )
        ) : (
          ""
        )}

        {/* Topology Card Content */}

        {viewBy === "topology" ? (
          !!selectTopoloy ? (
            <>
              <CardContent
                sx={{
                  alignSelf: "flex-start",
                  height: "50%",
                  width: "20rem",
                  whiteSpace: "wrap",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ mb: "1rem", ml: "1rem" }}
                >
                  {selectTopoloy.title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ mb: "1rem", ml: "1rem" }}
                >
                  {selectTopoloy.deviceName}
                </Typography>{" "}
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ mb: "1rem", ml: "1rem" }}
                >
                  {selectTopoloy.reservationName}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  height: "20%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Button variant="outlined">Reset</Button>
                <Button variant="outlined">Edit</Button>
              </CardActions>
            </>
          ) : (
            <CardActions
              sx={{
                height: "60%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  dispatch(setNavigatingSetupTest());
                  dispatch(setActiveTopologies(null));
                  !!routeTo && navigate(routeTo);
                }}
              >
                Select
              </Button>
            </CardActions>
          )
        ) : (
          ""
        )}

        {/* DUT Configurations */}
        {viewBy === "DUT" ? (
          !!dutConfigData ? (
            <>
              <CardContent
                sx={{
                  alignSelf: "flex-start",
                  height: "50%",
                  width: "20rem",
                  whiteSpace: "wrap",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ mb: "1rem", ml: "1rem" }}
                >
                  {dutConfigData?.sshCheckValue}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ mb: "1rem", ml: "1rem" }}
                >
                  {dutConfigData?.channel1Value}
                </Typography>{" "}
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ mb: "1rem", ml: "1rem" }}
                >
                  {dutConfigData?.channel2Value}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ mb: "1rem", ml: "1rem" }}
                >
                  {dutConfigData?.ssid1Value}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ mb: "1rem", ml: "1rem" }}
                >
                  {dutConfigData?.ssid2Value}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  height: "20%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Button variant="outlined">Reset</Button>
                <Button variant="outlined">Edit</Button>
              </CardActions>
            </>
          ) : (
            <CardActions
              sx={{
                height: "60%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  setShowDUTModal(true);
                  setSshCheckValue("");
                  setChannel1Value(null);
                  setChannel2Value(null);
                  setSsid1value(null);
                  setSsid2value(null);
                }}
                disabled={!selectTopoloy}
              >
                Select
              </Button>
            </CardActions>
          )
        ) : (
          ""
        )}
      </Card>

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
        aria-describedby="alert-dialog-slide-description"
        open={showDUTModal}
      >
        <Box sx={{ textAlign: "right" }}>
          <Button size="small" onClick={() => setShowDUTModal(false)}>
            <CloseOutlinedIcon sx={{ color: "red" }} />
          </Button>
        </Box>

        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            pt: "0",
          }}
        >
          <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
            DUT Configuration
          </Typography>
        </DialogTitle>

        <Divider orientation="horizontal" />

        <DialogContent>
          <Stack direction="row" alignItems="center" spacing={1} mb=".5rem">
            <Typography variant="h6">SSH Check</Typography>
            <HelpOutlineOutlinedIcon color="primary" />
          </Stack>
          <TextField
            id="standard-basic"
            label="WAN IP Address"
            variant="outlined"
            sx={{
              ...theme.typography.customInput,
              width: "10rem",
              mr: "1rem",
            }}
            value={sshCheckValue}
            onChange={(event) => setSshCheckValue(event.target.value)}
            size="small"
          />
          <span title="Checked">
            <NetworkCheckOutlinedIcon color="primary" />
          </span>
        </DialogContent>

        <DialogContent>
          <Stack direction="row" alignItems="center" spacing={1} mb=".5rem">
            <Typography variant="h6">Channels</Typography>
            <HelpOutlineOutlinedIcon color="primary" />
          </Stack>
          <Stack spacing={2}>
            <CustomSelectOption
              name={"Channel I"}
              label={"2.4GHz Channel 1"}
              value={channel1Value ?? ""}
              options={channel1Data}
              onChange={(event) => setChannel1Value(event.target.value)}
            />
            <CustomSelectOption
              name={"Channel II"}
              label={"5GHz Channel 1"}
              value={channel2Value ?? ""}
              options={channel2Data}
              onChange={(event) => setChannel2Value(event.target.value)}
            />
          </Stack>
        </DialogContent>

        <DialogContent>
          <Stack direction="row" alignItems="center" spacing={1} mb=".5rem">
            <Typography variant="h6">SSIDs</Typography>
            <FormControlLabel
              sx={{
                display: "block",
                "& .MuiSwitch-track": {
                  border: "1px solid #2196f3",
                },
                "& .MuiSwitch-thumb": {
                  border: ".5px solid #2196f3",
                },
              }}
              control={
                <Switch
                  checked={byPass}
                  onChange={() => setByPass((value) => !value)}
                  name="bypass"
                  color="primary"
                />
              }
              label="ByPass SSID Scan"
            />
          </Stack>
          <Stack spacing={2}>
            <CustomSelectOption
              name={"SSID I"}
              label={"2.4GHz SSID 1"}
              value={ssid1Value}
              options={ssid1Data}
              onChange={(event) => setSsid1value(event.target.value)}
              disabled={byPass}
            />
            <CustomSelectOption
              name={"SSID II"}
              label={"5GHz SSID 1"}
              value={ssid2Value}
              onChange={(event) => setSsid2value(event.target.value)}
              options={ssid2Data}
              disabled={byPass}
            />
          </Stack>
        </DialogContent>

        <Divider orientation="horizontal" />

        <DialogContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <Button variant="contained">Back</Button>
            <Button variant="contained">Rescan</Button>
            <Button
              variant="contained"
              onClick={() => {
                const dutPayload = byPass
                  ? {
                      sshCheckValue,
                      channel1Value,
                      channel2Value,
                    }
                  : {
                      sshCheckValue,
                      channel1Value,
                      channel2Value,
                      ssid1Value,
                      ssid2Value,
                    };
                dispatch(setDutConfigData(dutPayload));
                setShowDUTModal(false);
              }}
              disabled={!sshCheckValue || !channel1Value || !channel2Value}
            >
              Next
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhaseCard;
