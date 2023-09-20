import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { ReactElement } from "react";
import CardCoverImg from "../../assets/43563-removebg-preview.png";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router";
import { TestSuiteTypos } from "../../views/pages/tests/SetupaTest";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../store/reducer";
import {
  setActiveTopologies,
  setSelectTestData,
  setSelectTopologyData,
} from "../../features/setupTestSlice";
import { TopologiesTypo } from "../../views/pages/manage/Inventory";

interface Props {
  selectBtnVal?: string | boolean;
  testSuiteData?: TestSuiteTypos | null;
  topolgiesData?: TopologiesTypo | null;
  selectTestSuite?: any;
  viewBy?: string | null;
  setIsShow?: any;
}

const CustomCard = (props: Props): ReactElement => {
  const navigate = useNavigate();
  const theme = useTheme<any>();

  const {
    selectBtnVal,
    selectTestSuite,
    testSuiteData,
    topolgiesData,
    viewBy,
    setIsShow,
  } = props;

  const dispatch: AppDispatch = useDispatch();
  const { navigatingSetupTest } = useSelector(
    (state: AppState) => state.setupTest
  );

  return (
    <React.Fragment>
      {!!testSuiteData ? (
        <Card
          sx={{
            ...theme.typography.dashboardCard,
            borderRadius: "3%",
            transition: "transform 0.4s ease-in-out",
            minWidth: "15rem",
            maxWidth: "19rem",
            flex: "1 1 auto",
            maxHeight: "320",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5">{testSuiteData?.title}</Typography>
          </CardContent>
          <CardMedia
            component="img"
            width="90rem"
            height="80rem"
            image={CardCoverImg}
            sx={{
              objectFit: "contain",
            }}
          />
          <CardContent
            sx={{
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="body1">
              {testSuiteData?.details}
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 0,
            }}
          >
            <Button onClick={() => dispatch(setSelectTestData(testSuiteData))}>
              Select
            </Button>
          </CardContent>
        </Card>
      ) : viewBy === "topologies" ? (
        <Card
          sx={{
            ...theme.typography.dashboardCard,
            borderRadius: "3%",
            transition: "transform 0.4s ease-in-out",
            minWidth: "15rem",
            maxWidth: "19rem",
            flex: "1 1 auto",
            maxHeight: "320",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="div">
              {topolgiesData?.title}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="100"
            image={CardCoverImg}
            sx={{
              objectFit: "contain",
            }}
          />
          <CardContent
            sx={{
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="body1" component="div">
              {topolgiesData?.deviceName}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              {topolgiesData?.reservationName}
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 0,
            }}
          >
            {navigatingSetupTest && (
              <Button
                onClick={() => {
                  dispatch(setSelectTopologyData(topolgiesData));
                }}
              >
                Select
              </Button>
            )}

            <Button
              onClick={() => dispatch(setActiveTopologies(topolgiesData))}
            >
              View
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card
          sx={{
            ...theme.typography.dashboardCard,
            borderRadius: "3%",
            transition: "transform 0.4s ease-in-out",
            minWidth: "15rem",
            maxWidth: "19rem",
            flex: "1 1 auto",
            maxHeight: "320",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5">{topolgiesData?.title}</Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="100"
            image={CardCoverImg}
            sx={{
              objectFit: "contain",
            }}
          />
          <CardContent
            sx={{
              textAlign: "center",
              // background: "white",
              // border: "1px solid grey",
            }}
          >
            <Typography gutterBottom variant="body1">
              {topolgiesData?.deviceName}
            </Typography>
            <Typography gutterBottom variant="body1">
              {topolgiesData?.reservationName}
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 0,
            }}
          >
            <Button>Nothing</Button>
          </CardContent>
        </Card>
      )}
    </React.Fragment>
  );
};

export default CustomCard;
