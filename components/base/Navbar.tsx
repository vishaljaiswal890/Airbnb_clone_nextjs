import React from "react";
import BrandLogo from "./BrandLogo";
import { MenuIcon, Search } from "lucide-react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-2 border-b-[1px]">
      <div>
        <BrandLogo />
      </div>
      <div className="flex items-center space-x-2 border rounded-2xl p-2 cursor-pointer">
        <span className="text-sm pl-2">Anywhere</span>
        <span>|</span>
        <span className="text-sm">Any week</span>
        <span>|</span>
        <span className="text-sm text-gray-400">Add Guest</span>
        <span className="bg-brand text-white rounded-full p-2">
          <Search height={17} width={17} />
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <span>Add your home</span>
        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
