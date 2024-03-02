import { NextRequest, NextResponse } from "next/server";
import Otp from "@/model/otpModel";
import User from "@/model/userModel";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const data = await Otp.findOne({ email: body.email });

        if (!data) {
            return NextResponse.json({ message: 'USER NOT FOUND' })
        }
        else {
            if (data.otp == body.otp) {
                const token = jwt.sign({ email: body.email }, process.env.TOKEN_SECRET as string);
                await User.create({
                    name: body.name,
                    email: body.email
                })
                const response = NextResponse.json({ message: 'USER REGISTERED SUCCESSFULLY' });
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
    } catch (error: any) {
        if (error.code == '11000') {
            return NextResponse.json({ message: 'USER REGISTERED ALREADY' })
        }
        return NextResponse.json(error)
    }
}