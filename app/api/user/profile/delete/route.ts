import { NextRequest, NextResponse } from "next/server";
import User from "@/model/userModel";
import { connectDB } from "@/helper/db";
import jwt, { JwtPayload } from 'jsonwebtoken'

export async function DELETE(request: NextRequest) {
    connectDB();
    try {
        const token = await request.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json({ message: 'Token is not found' });
        }
        const data = jwt.verify(token, process.env.TOKEN_SECRET as string) as JwtPayload;
        if (data) {
            await User.findOneAndDelete({ email: data.email });

            return NextResponse.json({ message: 'Delete successfully' });
        }
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 200 });
    }
}