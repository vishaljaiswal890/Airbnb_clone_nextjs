"use client";
import React, {
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface OTPInputProps {
  email: string;
  length?: number; // Optional parameter
  onSubmit: (otp: number) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({
  email,
  length = 4,
  onSubmit = () => {},
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    //allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onSubmit(combinedOtp);

    //focus next input
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    //validation for checking if any index is empty or not so that not to skip
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      //focus previous input
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOtpSubmit = () => {};

  return (
    <div>
      {otp.map((value: string, index: number) => (
        <input
          key={index}
          type="text"
          ref={(input) =>
            (inputRefs.current[index] = input as HTMLInputElement)
          }
          value={value}
          onChange={(e) => handleChange(e, index)}
          onClick={handleClick}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-8 h-10 m-5 text-center text-xl border-2 border-red-300 rounded-md"
        />
      ))}
      <Button className="bg-brand w-full" onClick={handleOtpSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default OTPInput;
