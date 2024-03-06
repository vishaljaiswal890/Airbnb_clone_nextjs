import { NextRequest, NextResponse } from "next/server";
import Listing from "@/model/listingModel";
import { connectDB } from "@/helper/db";

export async function POST(request: NextRequest) {
    try {
        const { title, countries, state, city, price, image, description, categories } = await request.json();

        await connectDB();
        await Listing.create({
            title,
            countries,
            state,
            city,
            price,
            image,
            description,
            categories
        });
        return NextResponse.json({ message: 'ADD SUCCESSFULLY' });
    } catch (error) {
        return NextResponse.json({ message: 'ERROR IN ADDING' }, { status: 500 });
    }
}


export async function GET(request: NextRequest) {

    try {
        const listingData = await Listing.find({});
        return NextResponse.json(listingData);
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}