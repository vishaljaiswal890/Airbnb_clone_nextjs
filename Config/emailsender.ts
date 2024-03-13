import nodemailer from "nodemailer";

export async function sendOTPByEmail(generatedOTP: number, email: string) {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "481c2e67629348",
      pass: "8ea1840cd82906",
    },
  });

  const mailData = {
    from: "481c2e67629348",
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
