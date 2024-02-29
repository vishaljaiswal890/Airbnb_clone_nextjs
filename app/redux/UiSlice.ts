"use client";
import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isRejected,
} from "@reduxjs/toolkit";

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
  token: "",
};

const UiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export const { login, logout } = UiSlice.actions;
export default UiSlice.reducer;
