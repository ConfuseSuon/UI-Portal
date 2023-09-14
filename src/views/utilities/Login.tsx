import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { ReactElement, useEffect } from "react";
import logo from "../../assets/Amniverse.svg";
import jwtDecode from "jwt-decode";
import {
  CredentialResponse,
  GoogleLogin,
  useGoogleLogin,
} from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../store/reducer";
// import { getUserAuthCredentials } from "../../features/authSlice";
import { useNavigate } from "react-router";
import {
  UnauthenticatedTemplate,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import { LoginRequestTypo, loginRequest } from "../../msAuthConfig";

interface TypecCredentialResponset {
  clientId: string;
  credential: string;
  select_by: string;
}

const Login = (): ReactElement | void => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const msAuthenticated = useIsAuthenticated();
  const { isAuthenticated } = useSelector((state: AppState) => state.auth);

  // const login = useGoogleLogin({
  //   onSuccess: async (codeResponse) => {
  //     const { access_token } = codeResponse;
  //     await dispatch(getUserAuthCredentials(access_token));
  //   },
  //   onError: (error) => console.log("Login Failed:", error),
  // });

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     return navigate("/");
  //   }
  // }, [isAuthenticated]);

  const { instance } = useMsal();

  const handleMsLogin = () => {
    instance.loginRedirect(loginRequest as LoginRequestTypo).catch((e) => {
      console.log(e);
    });
  };

  return msAuthenticated ? (
    navigate("/")
  ) : (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", width: "100vw" }}
    >
      <Grid
        item
        sx={{
          minWidth: "25rem",
          minHeight: "10rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          //   border: "1px solid red",
        }}
      >
        <Box>
          <img src={logo} alt="" height="120" />
        </Box>
        <Card
          sx={{
            width: "100%",
            minHeight: "10rem",
            p: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "0.6rem",
            background: "transparent",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "#2196f3", fontSize: "1.5rem", fontWeight: "400" }}
          >
            Login With Microsoft
          </Typography>
          {/* <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={() => login()}
          >
            Login With Google
          </Button> */}
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={() => handleMsLogin()}
          >
            Login{" "}
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
