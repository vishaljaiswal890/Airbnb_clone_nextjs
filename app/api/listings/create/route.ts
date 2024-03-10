import { connectDB } from "@/helper/db";
import Listing from "@/model/listingModel";
import { NextRequest, NextResponse } from "next/server";


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