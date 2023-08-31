import { useDispatch, useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

// routing
import Routes from "./routes";

// defaultTheme
import themes from "./themes";

// project imports
import NavigationScroll from "./layout/NavigationScroll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppDispatch, AppState } from "./store/reducer";
import { useEffect } from "react";
import { getUserAuthCredentials } from "./features/authSlice";
import { useNavigate } from "react-router";
// ==============================|| APP ||============================== //
type RootState = {
  customization: any;
};
const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const { userInfo, dataOnLocalStorage } = useSelector(
    (state: AppState) => state.auth
  );
  const navigate = useNavigate();
  const localStorageData = localStorage.getItem("key");

  const keepAuthorizingUser = async () => {
    if (localStorageData != null) {
      const parseData = JSON.parse(localStorageData);
      const token = parseData.access_tokenLocal;
      await dispatch(getUserAuthCredentials(token));
      if (!userInfo) {
        return navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    keepAuthorizingUser();
  }, []);

  const customization = useSelector((state: RootState) => state.customization);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
          <ToastContainer />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
