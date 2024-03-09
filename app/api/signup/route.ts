import { NextRequest, NextResponse } from "next/server";
import User from "@/model/userModel";
import Otp from "@/model/otpModel";
import { sendOTPByEmail } from "../../../Config/emailsender";
import { connectDB } from "@/helper/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(body.email, body.name, otp);
    await connectDB();
    await Otp.create({
      email: body.email,
      name: body.name,
      otp: otp,
    });

    const isSend = await sendOTPByEmail(otp, body.email);

    if (isSend) {
      return NextResponse.json({ message: "OTP sent successfully" });
    } else {
      return NextResponse.json({ message: "OTP sent faliure" });
    }
  } catch (error) {
    console.log(error);
  }
}
