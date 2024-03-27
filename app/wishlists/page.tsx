"use client";
import React from "react";
import Navbar from "@/components/base/Navbar";

const Wishlist = async () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-black font-bold text-3xl mb-4">Wishlists</h1>
        <hr className="border border-gray-300 my-2 w-full"></hr>
        <h1 className="text-black font-semibold text-2xl mx-2 pt-4">
          Create your first wishlist
        </h1>
        <h2 className="text-black text-xl mx-2 pt-4">
          As you search, click the heart icon to save your favourite places and
          Experiences to a wishlist.
        </h2>
        <hr className="border border-gray-300 my-2 w-full my-6"></hr>
      </div>
    </div>
  );
};

export default Wishlist;
