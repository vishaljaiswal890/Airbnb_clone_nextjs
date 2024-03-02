"use client";
import React, { useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/UiStore";
import { login } from "@/app/redux/UiSlice"; // Assuming login action is imported from your Redux slice
import Cookies from "js-cookie";

const NavMenu = () => {
  const uiRedux = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   const token = Cookies.get("token");
  //   if (token) {
  //     dispatch(login(token));
  //   }
  // }, [dispatch]);

  // console.log("Nav")
  return (
    <Popover>
      <PopoverTrigger asChild>
        <MenuIcon />
      </PopoverTrigger>
      <PopoverContent className="mr-6">
        <ul>
          {!uiRedux.isLoggedIn ? (
            <>
              <SignupModal />
              <LoginModal />
            </>
          ) : (
            <>
              <div>
                <h1>LoggedIn</h1>
              </div>
            </>
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default NavMenu;
