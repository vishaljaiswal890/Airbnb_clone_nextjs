import mongoose, { Schema } from "mongoose";

const otpSchema: Schema = new Schema({
    email: {
        type: String,
        unique: true
    },
    otp: Number,
    createdAt: {
        type: Date,
        expires: '3500',
        default: Date.now()
    }
})

const Otp = mongoose.models.otp || mongoose.model('otp', otpSchema);
export default Otp;