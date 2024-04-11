import { NextRequest, NextResponse } from "next/server";
import User from "@/model/userModel";
import { connectDB } from "@/helper/db";
import jwt, { JwtPayload } from 'jsonwebtoken'

export async function GET(request: NextRequest) {
    connectDB();
    try {
        const token = await request.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json({ message: 'Token is not found' });
        }
        const data = jwt.verify(token, process.env.TOKEN_SECRET as string) as JwtPayload;
        if (data) {

            const user = await User.findOne({ email: data.email });
            return NextResponse.json({ user }, { status: 200 });
        }


    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}