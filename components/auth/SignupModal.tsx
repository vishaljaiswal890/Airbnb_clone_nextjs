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
import { useRouter } from "next/navigation";
import { login } from "@/app/redux/UiSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/UiStore";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const SignupModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [showOTPInput, setShowOTPInput] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  const handleContinue = async (e: any) => {
    e.preventDefault();
    if (emailRegex.test(email)) {
      setEmailError("");
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, name }),
        });
        if (response.ok) {
          setShowOTPInput(true);
        } else {
          throw new Error("Failed to send OTP");
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
      }
    } else {
      setEmailError("Invalid email address");
    }
  };

  const onOtpSubmit = async (otp: any) => {
    try {
      const response: any = await fetch("/api/signup/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, otp }),
      });

      if (response.ok) {
        console.log("Signup successful");
        dispatch(login(response?.body?.token));
      } else {
        throw new Error("Failed to signup");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    router.refresh();
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
                        placeholder="Enter your name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        max={10}
                        min={10}
                      />
                      <Input
                        className="w-full mt-2"
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
