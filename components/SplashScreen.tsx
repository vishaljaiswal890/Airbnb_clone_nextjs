"use client";
import { AppDispatch, RootState } from "@/app/redux/UiStore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./base/Navbar";
import Cateogories from "./common/Cateogories";
import Cookies from "js-cookie";
import { login } from "@/app/redux/UiSlice";

export default function SplashScreen({token}:any) {
  const uiRedux = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if(token){
      console.log("useEffeect")
      console.log(token)
      dispatch(login(token as string));
    } 
    console.log(token)
  }, []);
  return (
    !uiRedux.isCheckingLogin && token && (
      <>
        <div>
          <Navbar />
          <Cateogories />
        </div>
      </>
    )
  );
}
