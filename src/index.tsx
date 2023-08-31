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
import { GoogleOAuthProvider } from "@react-oauth/google";

// ==============================|| REACT DOM RENDER  ||============================== //

// const container = document.getElementById('root');
// createRoot(container!) if you use TypeScript
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId="1023724644077-q076m2vg0sd99n4qertbb11r7u0sj4mh.apps.googleusercontent.com">
    <Provider store={store}>
      <BrowserRouter basename={config.basename}>
        <App />
      </BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
