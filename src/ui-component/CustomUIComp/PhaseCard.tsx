import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { ReactElement, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Icon123 } from "@tabler/icons";
import { useNavigate } from "react-router";
import { TestSuiteTypos } from "../../views/pages/tests/SetupaTest";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/reducer";
import {
  setActiveTopologies,
  setNavigatingSetupTest,
} from "../../features/setupTestSlice";
import { TopologiesTypo } from "../../views/pages/manage/Inventory";

interface Props {
  title: string;
  routeTo?: string;
  data?: TestSuiteTypos | null;
  selectTopoloy?: TopologiesTypo | null;
}

const PhaseCard = (props: Props): ReactElement => {
  const theme = useTheme<any>();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { title, routeTo, data, selectTopoloy } = props;

  return (
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

      {!!data ? (
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
      ) : !!selectTopoloy ? (
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
            disabled={!!routeTo ? false : true}
          >
            Select
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default PhaseCard;
