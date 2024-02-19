import { Search, SlidersHorizontal } from "lucide-react";
import React from "react";

const MobileNav = () => {
  return (
    <div className="m-3 md:hidden">
      <div className="flex justify-between items-center border rounded-3xl px-3 py-1">
        <div className="flex  items-center">
          <Search />
          <div className="flex flex-col ml-5">
            <span className="text-sm font-semibold">Anywhere</span>
            <span className="text-sm">Any week . Any guest</span>
          </div>
        </div>
        <SlidersHorizontal />
      </div>
    </div>
  );
};

export default MobileNav;
