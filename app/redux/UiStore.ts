"use client";
import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./UiSlice";
export const makeStore = configureStore({
  reducer: {
    ui: UiSlice,
  },
});
export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
