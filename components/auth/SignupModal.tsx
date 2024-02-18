"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";
import Image from "next/image";
import CountrySelector from "./CountrySelector";
import { Button } from "../ui/button";
import OTPInput from "./OTPInput"; // Import your OTPInput component

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const SignupModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [showOTPInput, setShowOTPInput] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");

  const handleContinue = (e: any) => {
    e.preventDefault();
    if (emailRegex.test(email)) {
      setEmailError("");
      setShowOTPInput(true); // Show OTP input component
    } else {
      setEmailError("Invalid email address");
    }
  };

  const onOtpSubmit = async (otp: string) => {
    try {
      // Make an HTTP POST request to the API route
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      // Check if the request was successful
      if (response.ok) {
        console.log("Signup successful");
        // Handle any further actions, such as redirecting the user
      } else {
        // If the response is not OK, throw an error
        throw new Error("Failed to signup");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle the error appropriately
    }
  };

  return (
    <>
      <AlertDialog open={isModalOpen}>
        <AlertDialogTrigger asChild>
          <li
            className="rounded-md p-2 cursor-pointer hover:bg-gray-200"
            onClick={() => setIsModalOpen(true)}
          >
            Sign up
          </li>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle asChild>
              <div className="flex items-center justify-between">
                <span>Sign up</span>
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
                {!showOTPInput ? (
                  <div>
                    <div className="mt-5">
                      <Input
                        className="w-full"
                        placeholder="Enter your email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        max={10}
                        min={10}
                      />
                      <span className="text-red-400">{emailError}</span>{" "}
                    </div>
                    <div className="mt-5">
                      <Button
                        className="bg-brand w-full"
                        onClick={handleContinue}
                      >
                        Continue
                      </Button>
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
                  </div>
                ) : (
                  <OTPInput length={6} onSubmit={onOtpSubmit} />
                )}
              </form>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default SignupModal;
