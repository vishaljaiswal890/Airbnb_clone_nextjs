import nodemailer from 'nodemailer';

export async function sendOTPByEmail(generatedOTP: number, email: string) {
    var transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "bandukr099@gmail.com",
            pass: "obfqasxogjhryvmh"
        }
    });

    const mailData = {
        from: "bandukr099@gmail.com",
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
