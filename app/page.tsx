"use client";
import React from "react";
import { Provider } from "react-redux";
import { makeStore } from "./redux/UiStore";
import Home from "./Home/page";

const page = () => {
  return <Home />;
};

export default page;
