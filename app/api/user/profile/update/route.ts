import { NextRequest, NextResponse } from "next/server";
import User from "@/model/userModel";
import { connectDB } from "@/helper/db";
import jwt, { JwtPayload } from 'jsonwebtoken'

export async function PUT(request: NextRequest) {
    connectDB();
    try {
        const token = await request.cookies.get('token')?.value;
        const body = await request.json();
        if (!token) {
            return NextResponse.json({ message: 'Token is not found' });
        }
        const data = jwt.verify(token, process.env.TOKEN_SECRET as string) as JwtPayload;
        if (data) {
            const user = await User.findOneAndUpdate({ email: data.email }, {
                name: body.name,
                image: body.image,
                address: body.address
            });

            return NextResponse.json({ message: 'Update successfully' }, user);
        }
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 200 });
    }
}