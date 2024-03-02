import mongoose, { Schema } from "mongoose";

const listingSchema: Schema = new Schema({
    title: String,
    countries: String,
    state: String,
    city: String,
    price: Number,
    image: Buffer,
    description: String,
    categories: [String]
}, { timestamps: true });

const Listing = mongoose.models.listing || mongoose.model('listing', listingSchema);
export default Listing;