import mongoose, { Schema } from "mongoose";

const userModel: Schema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: String
}, { timestamps: true });

const User = mongoose.models.users || mongoose.model('users', userModel);
export default User;
