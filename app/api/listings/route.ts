import { NextRequest, NextResponse } from "next/server";
import Listing from "@/model/listingModel";
import { connectDB } from "@/helper/db";

connectDB();
export async function GET(request: NextRequest) {

    try {
        const listingData = await Listing.find({});
        return NextResponse.json(listingData);
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
}