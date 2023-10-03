import { configureStore } from "@reduxjs/toolkit";
import reducer, { setupStore } from "./reducer";

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = setupStore();
const persister = "Free";

export { store, persister };
