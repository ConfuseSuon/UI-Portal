import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const googleCredentialUrl = "https://www.googleapis.com/oauth2/v1/userinfo?";

const validEmail = ["sonu.pun@amniltech.com"];

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

// export const getUserAuthCredentials = createAsyncThunk(
//   "v1/userinfo",
//   async (id: string) => {
//     try {
//       const { data } = await axios.get(`${googleCredentialUrl}${id}`, {
//         headers: {
//           Authorization: `Bearer ${id}`,
//           Accept: "application/json",
//         },
//       });
//       return { data, id };
//     } catch (error) {
//       console.error("Fetching user google credential", error);
//     }
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // handleLogout: (state) => {
    //   state.isAuthenticated = false;
    //   localStorage.clear();
    // },
    toggleDarkMode: (state, { payload }) => {
      state.darkMode = !state.darkMode;
    },
    setUserData: (state, { payload }) => {
      state.userInfo = payload;
      state.isAuthenticated = true;
      console.log(state.userInfo, "fdk");
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getUserAuthCredentials.pending, (state, action) => {})
  //     .addCase(getUserAuthCredentials.fulfilled, (state, { payload }) => {
  //       const authorizeEmail = validEmail.some(
  //         (email) => email == payload?.data.email
  //       );
  //       if (authorizeEmail) {
  //         state.userInfo = payload?.data;
  //         state.access_token = payload?.id;
  //         const localStorageValue = {
  //           userInfoLocal: state.userInfo,
  //           access_tokenLocal: state.access_token,
  //         };
  //         localStorage.setItem("key", JSON.stringify(localStorageValue));
  //         state.dataOnLocalStorage = localStorageValue;
  //         state.isAuthenticated = true;
  //       } else {
  //         state.isAuthenticated = false;
  //         toast.error("403 Unauthorized Access !", state.toastify);
  //       }
  //     })
  //     .addCase(getUserAuthCredentials.rejected, (state, { payload }) => {
  //       console.error("Rejecte on builder", payload);
  //     });
  // },
});

export const { toggleDarkMode, setUserData } = authSlice.actions;
export default authSlice.reducer;
