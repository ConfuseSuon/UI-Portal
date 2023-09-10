import { PreloadedState, combineReducers } from "redux";
// reducer import
import { configureStore } from "@reduxjs/toolkit";
import customizationReducer from "./customizationReducer";
import authReducer from "../features/authSlice";
import setupTestSlice from "../features/setupTestSlice";

// ==============================|| COMBINE REDUCER ||============================== //

const rootReducer = combineReducers({
  customization: customizationReducer,
  auth: authReducer,
  setupTest: setupTestSlice,
});

export function setupStore(preloadedState?: PreloadedState<AppState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredPaths: ["auth.user"], // Specify the path to non-serializable data
          isSerializable: (value: any) => true,
        },
      }),
  });
}

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
