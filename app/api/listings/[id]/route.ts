import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/helper/db";
import Listing from "@/model/listingModel";


export async function GET(request: NextRequest, { params }: any) {
    try {

        connectDB();

        const { id } = params;
        const data = await Listing.findById(id);

        if (!data) {
            return NextResponse.json({ message: "Listing not found" }, { status: 404 });
        }
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
