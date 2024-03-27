"use client";
import router, { useRouter } from "next/navigation";
import React, { useState } from "react";

const Trips = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();
  const handleClick = () => {
    setIsModalOpen(true);
    router.push("/Trips");
  };

  return (
    <div>
      <li
        className="rounded-md p-2 cursor-pointer hover:bg-gray-200"
        // onClick={() => setIsModalOpen(true)}
        onClick={handleClick}
      >
        Trips
      </li>
    </div>
  );
};

export default Trips;
