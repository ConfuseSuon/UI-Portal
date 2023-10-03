import ReactDOM from "react-dom/client";

// third party
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// project imports
import App from "./App";

import { store } from "./store";

// style + assets
import "./assets/scss/style.scss";
import config from "./config";
SwitchAccessShortcutAdd;
import { StrictMode } from "react";
import { SwitchAccessShortcutAdd } from "@mui/icons-material";

// ==============================|| REACT DOM RENDER  ||============================== //
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={config.basename}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
