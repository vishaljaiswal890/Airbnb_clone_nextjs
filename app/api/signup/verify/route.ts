// import { NextRequest, NextResponse } from "next/server";
// import Otp from "@/model/otpModel";
// import User from "@/model/userModel";
// import jwt from "jsonwebtoken";

// export async function POST(request: NextRequest) {
//     try {
//         const body = await request.json();
//         const data = await Otp.findOne({ email: body.email });

//         if (!data) {
//             return NextResponse.json({ message: 'USER NOT FOUND' })
//         }
//         else {
//             if (data.otp == body.otp) {
//                 const token = jwt.sign({ email: body.email }, process.env.TOKEN_SECRET as string);
//                 await User.create({
//                     name: body.name,
//                     email: body.email
//                 })
//                 const response = NextResponse.json({ message: 'USER REGISTERED SUCCESSFULLY' });
//                 response.cookies.set('token', token, {
//                     httpOnly: true,
//                     maxAge: 86400
//                 })
//                 return response;
//             }
//             else {
//                 return NextResponse.json({ message: 'Verification failed' });
//             }
//         }
//     } catch (error: any) {
//         if (error.code == '11000') {
//             return NextResponse.json({ message: 'USER REGISTERED ALREADY' })
//         }
//         return NextResponse.json(error)
//     }
// }

import { NextRequest, NextResponse } from "next/server";
import Otp from "@/model/otpModel";
import User from "@/model/userModel";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await Otp.findOne({ email: body.email });

    if (!data) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    } else {
      if (data.otp !== body.otp) {
        return NextResponse.json(
          { message: "OTP verification failed" },
          { status: 400 }
        );
      }

      const token = jwt.sign({ email: body.email }, process.env.TOKEN_SECRET!);
      await User.create({ name: body.name, email: body.email });

      const response = NextResponse.json({
        message: "User registered successfully",
        token: token,
      });
      return response;
    }
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "User already registered" },
        { status: 409 }
      );
    } else {
      console.error("Error:", error);
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }
}
