import { useMsal } from "@azure/msal-react";
import { graphConfig } from "../../msAuthConfig";
import { ReactElement, useEffect, useState } from "react";
import { loginRequest } from "../../msAuthConfig";
import { setUserData } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AppDispatch, AppState } from "../../store/reducer";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";

const Callback = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();
  const { isAuthenticated } = useSelector((state: AppState) => state.auth);
  const [isloading, setIsLoading] = useState<true | false>(false);

  async function callMsGraph(accessToken: string) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
      method: "GET",
      headers: headers,
    };

    return fetch(graphConfig.graphMeEndpoint, options)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  function RequestProfileData() {
    setIsLoading(true);
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken)
          .then((response) => {
            dispatch(setUserData(response));
            setIsLoading(false);
            navigate("/");
          })
          .catch((e) => {
            console.error(e, "error while login on callback");
            navigate("/login");
          });
      });
  }

  useEffect(() => {
    RequestProfileData();
  }, []);

  return (
    isloading && (
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{ px: "1rem", py: "1rem" }}
          startIcon={<CircularProgress size={30} sx={{ color: "white" }} />}
        >
          <Typography variant="h6" sx={{ ml: "0.5rem", color: "white" }}>
            Entering UI Portal
          </Typography>
        </Button>
      </Box>
    )
  );
};

export default Callback;
