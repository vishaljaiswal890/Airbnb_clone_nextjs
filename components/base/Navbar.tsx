import React from "react";
import BrandLogo from "./BrandLogo";
import { MenuIcon, Search } from "lucide-react";
import NavMenu from "./NavMenu";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-2 border-b-[1px]">
      <div className="hidden md:block">
        <a href="/">
          <BrandLogo />
        </a>
      </div>
      <div className="w-full md:w-auto">
        <div className=" hidden md:flex items-center space-x-2 border rounded-3xl p-2 cursor-pointer">
          <span className="text-sm pl-2">Anywhere</span>
          <span>|</span>
          <span className="text-sm">Any week</span>
          <span>|</span>
          <span className="text-sm text-gray-400">Add Guest</span>
          <span className="bg-brand text-white rounded-full p-2">
            <Search height={17} width={17} />
          </span>
        </div>
        <MobileNav />
      </div>
      <div className="hidden md:flex items-center space-x-4 cursor-pointer">
        <Link href="/Home/AddHome">Airbnb your home</Link>
        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
