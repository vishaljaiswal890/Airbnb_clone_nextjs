import { sendOTPByEmail } from "@/Config/emailsender";
import { connectDB } from "@/helper/db";
import otpModel from "@/model/otpModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const otp = Math.floor(100000 + Math.random() * 900000);

        await connectDB();
        await otpModel.create({
            email: body.email,
            otp: otp,
        })

        const isSend = await sendOTPByEmail(otp, body.email);

        if (isSend) {
            return NextResponse.json({ message: 'OTP SEND SUCCESFULLY' });
        }
        else {
            console.log('Resend the otp')
        }
    } catch (error) {
        return NextResponse.json(error);
    }
}