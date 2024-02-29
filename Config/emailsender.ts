import nodemailer from 'nodemailer';

export async function sendOTPByEmail(generatedOTP: number, email: string) {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "7b81d6ff4533ab",
            pass: "c431e5c6d6b44c"
        }
    });

    const mailData = {
        from: "7b81d6ff4533ab",
        to: email,
        subject: 'Your OTP verification by Airbnb',
        html: `<div>Your OTP is ${generatedOTP}</div>`,
    };

    try {
        const info = await transport.sendMail(mailData);
        console.log('Email sent:', info);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}
