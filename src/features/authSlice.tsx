import { createSlice } from "@reduxjs/toolkit";

interface TypeInitialState {
  isAuthenticated: boolean;
  userInfo: null | any;
  access_token: string | undefined | void;
  dataOnLocalStorage: object;
  darkMode: boolean;
  toastify: any;
}

export interface TypeUserInfo {
  id?: string;
  email: string;
  verified_email?: boolean;
  name: string;
  given_name?: string;
  family_name?: string;
  picture: string;
  locale?: string;
  hd?: string;
}

const initialState: TypeInitialState = {
  isAuthenticated: false,
  userInfo: null,
  access_token: "",
  toastify: {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  },
  darkMode: false,
  dataOnLocalStorage: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleDarkMode: (state, { payload }) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = authSlice.actions;
export default authSlice.reducer;
