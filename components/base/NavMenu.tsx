import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";

const NavMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <MenuIcon />
      </PopoverTrigger>
      <PopoverContent className="mr-6">
        <ul>
          <SignupModal />
          <LoginModal />
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default NavMenu;
