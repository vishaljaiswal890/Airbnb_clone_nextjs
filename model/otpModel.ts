import mongoose, { Schema } from "mongoose";

const otpSchema: Schema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  otp: String, // Change type to String
  createdAt: {
    type: Date,
    expires: "5000",
    default: Date.now(),
  },
});

const Otp = mongoose.models.otp || mongoose.model("otp", otpSchema);
export default Otp;
