"use client";
import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isRejected,
} from "@reduxjs/toolkit";
import { stat } from "fs";
import Cookies from "js-cookie";

type UiState = {
  email: string;
  user: any;
  isLoggedIn: boolean;
  isCheckingLogin: boolean;
  token: string;
};

const initialState: UiState = {
  email: "",
  user: null as any, // Empty user :,
  isLoggedIn: false,
  isCheckingLogin: false,
  token: Cookies.get("token") || "", // Initialize token from cookies
};

const UiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isCheckingLogin = true;
      if (action.payload) {
        console.log("If")
        state.isLoggedIn = true;
        state.isCheckingLogin = false;
        state.token = action.payload;
      } else {
        console.log("else")
        state.isLoggedIn = false;
        state.isCheckingLogin = false;
      }
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
      Cookies.remove("token"); // Remove token from cookies
    },
  },
});

export const { login, logout } = UiSlice.actions;
export default UiSlice.reducer;
