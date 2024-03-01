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
import Cookies from "js-cookie";
import Dashboard from "../auth/Dashboard";
import Logout from "../auth/Logout";

const NavMenu = () => {
  const uiRedux = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch<AppDispatch>();

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
              <Dashboard />
              <Logout />
            </>
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default NavMenu;
