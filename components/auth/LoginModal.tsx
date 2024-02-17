"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";
import Image from "next/image";
import CountrySelector from "./CountrySelector";
import { Button } from "../ui/button";

const LoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <AlertDialog open={isModalOpen}>
        <AlertDialogTrigger asChild>
          <li
            className="rounded-md p-2 cursor-pointer hover:bg-gray-200"
            onClick={() => setIsModalOpen(true)}
          >
            Login
          </li>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle asChild>
              <div className="flex items-center justify-between">
                <span>Login</span>
                <span
                  className="cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                >
                  X
                </span>{" "}
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <form>
                <h1 className="text-lg font-bold">Welcome to Airbnb</h1>
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <CountrySelector />
                    <Input
                      className="ml-2"
                      placeholder="Phone Number"
                      id="number"
                      max={10}
                      min={10}
                    />
                    <span className="text-red-400"></span>
                  </div>
                </div>
                <div className="mt-5">
                  <Button className="bg-brand w-full">Continue</Button>
                </div>
                <h1 className="text-center mt-5 font-bold">-- OR --</h1>
                <Button variant="outline" className="w-full mt-2">
                  <Image
                    src="/images/google.png"
                    alt="logo"
                    width={20}
                    height={20}
                    className="mr-5"
                  />
                  Continue with google
                </Button>
              </form>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default LoginModal;
