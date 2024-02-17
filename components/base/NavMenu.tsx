import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";
import LoginModal from "../auth/LoginModal";

const NavMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <MenuIcon />
      </PopoverTrigger>
      <PopoverContent className="mr-6">
        <ul>
          <li className="rounded-md p-2 cursor-pointer hover:bg-gray-200">
            Sign up
          </li>
          <LoginModal />
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default NavMenu;
