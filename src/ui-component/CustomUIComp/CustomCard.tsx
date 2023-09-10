import {
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
    <>
      {!!testSuiteData ? (
        <Card
          sx={{
            ...theme.typography.darkModeBg3,
            width: 250,
            maxHeight: 320,
            borderRadius: "3%",
            transition: "transform 0.4s ease-in-out",
            // "&:hover": {
            //   transform: "translateY(5px) rotate(0deg) scale(1.03)",
            //   boxShadow:
            //     "0 10px 15px -3px rgba(0, 0, 0, 0.1),   0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            // },
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="div">
              {testSuiteData?.title}
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
              // background: "white",
              // border: "1px solid grey",
            }}
          >
            <Typography gutterBottom variant="body1" component="div">
              {testSuiteData?.details}
            </Typography>

            <Button onClick={() => dispatch(setSelectTestData(testSuiteData))}>
              Select
            </Button>
          </CardContent>
        </Card>
      ) : viewBy === "topologies" ? (
        <Card
          sx={{
            ...theme.typography.darkModeBg3,
            width: 250,
            maxHeight: 320,
            borderRadius: "3%",
            transition: "transform 0.4s ease-in-out",
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
            ...theme.typography.darkModeBg3,
            width: 250,
            maxHeight: 320,
            borderRadius: "3%",
            transition: "transform 0.4s ease-in-out",
            // "&:hover": {
            //   transform: "translateY(5px) rotate(0deg) scale(1.03)",
            //   boxShadow:
            //     "0 10px 15px -3px rgba(0, 0, 0, 0.1),   0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            // },
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
              // background: "white",
              // border: "1px solid grey",
            }}
          >
            <Typography gutterBottom variant="body1" component="div">
              {topolgiesData?.deviceName}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              {topolgiesData?.reservationName}
            </Typography>

            <Button>Nothing</Button>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default CustomCard;
