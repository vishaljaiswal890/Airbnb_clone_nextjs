import { NextRequest, NextResponse } from "next/server";
import Otp from "@/model/otpModel";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const data = await Otp.findOne({ email: body.email });

        //name ka field bana padega frontend per

        if (!data) {
            return NextResponse.json({ message: 'USER NOT FOUND' })
        }
        else {
            if (data.otp === body.otp) {
                const token = jwt.sign({ email: data.email }, 'airbnb')
                const response = NextResponse.json({ message: 'Verification success' });
                response.cookies.set('token', token, {
                    httpOnly: true,
                    maxAge: 86400
                })
                return response;
            }
            else {
                return NextResponse.json({ message: 'Verification failed' });
            }
        }

    } catch (error) {
        return NextResponse.json(error)
    }
}