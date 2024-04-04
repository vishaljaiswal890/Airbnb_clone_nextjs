import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export async function sendOTPByEmail(generatedOTP: number, email: string) {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailData = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP verification by Airbnb",
    html: `<div>Your OTP is ${generatedOTP}</div>`,
  };

  try {
    const info = await transport.sendMail(mailData);
    console.log("Email sent:", info);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
