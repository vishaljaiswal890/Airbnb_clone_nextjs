"use client";
import React from "react";
import Navbar from "@/components/base/Navbar";
import { useRouter } from "next/navigation";

const handleClick = () => {
  const router = useRouter();
  router.push("/");
};
const Trips = async () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-black font-bold text-3xl mb-4">Trips</h1>
        <hr className="border border-gray-300 my-2 w-full"></hr>
        <h1 className="text-black font-semibold text-2xl mx-2 pt-4">
          No Trips booked...Yet!
        </h1>
        <h2 className="text-black text-xl mx-2 pt-4">
          Time to dust off your bags and start planning your next adventure
        </h2>
        <button
          className="bg-primary text-white font-semibold text-lg px-4 py-2 mt-6 mx-2 rounded hover:bg-primary/90 border border-primary"
          onClick={handleClick}
        >
          Start Searching
        </button>
        <hr className="border border-gray-300 my-2 w-full my-6"></hr>
      </div>
    </div>
  );
};

export default Trips;
