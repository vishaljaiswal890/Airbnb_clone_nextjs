"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Wishlist = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();
  const handleClick = () => {
    setIsModalOpen(true);
    router.push("/wishlists");
  };

  return (
    <div>
      <li
        className="rounded-md p-2 cursor-pointer hover:bg-gray-200"
        onClick={handleClick}
      >
        Wishlist
      </li>
    </div>
  );
};

export default Wishlist;
