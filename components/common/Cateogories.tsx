import { categories } from "@/Config/Cateogories";
import Image from "next/image";
import React from "react";

function Cateogories() {
  return (
    <div className="flex items-center space-x-8 whitespace-nowrap px-10 my-3 overflow-x-auto pb-4 ">
      {categories.map((item) => (
        <div className="flex items-center flex-col">
          <Image src={item.icon} width={20} height={20} alt={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Cateogories;
