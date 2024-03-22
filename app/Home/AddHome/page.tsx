"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/base/Navbar";
import Counter from "./../../../components/common/Counter";
import Image from "next/image";
import AddHomeForm from "@/components/AddHomeForm";
import Cookies from "js-cookie";
import { login } from "@/app/redux/UiSlice";
import { RootState, AppDispatch } from "@/app/redux/UiStore";
import { useSelector, useDispatch } from "react-redux";

const generateRandomNumber = (): number => {
  const min: number = 2000;
  const max: number = 25000;

  return Math.floor(Math.random() * (max - min) + min);
};

const Page: React.FC = () => {

  const uiRedux = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = Cookies.get('token');
    if(token){
      console.log("useEffeect")
      console.log(token)
      dispatch(login(token as string));
    } 
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="container mt-2 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
          <div>
            <h1 className="text-brand font-bold text-7xl mt-4">Airbnb It</h1>
            <p className=" text-3xl font-semibold text-black">You could earn</p>
            <div className="flex items-center space-x-4">
              <Counter num={generateRandomNumber()} />
              <span className="text-3xl font-semibold"> /per night</span>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <Image
                src="/images/home_img.jpeg"
                alt="room"
                width={200}
                height={200}
                className="rounded-3xl p-2 object-cover"
              />
              <Image
                src="/images/home_img1.jpeg"
                alt="room1"
                width={200}
                height={200}
                className="rounded-3xl p-2 object-cover"
              />
            </div>
          </div>
          <div>
            <AddHomeForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
