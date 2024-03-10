import { connectDB } from "@/helper/db";
import Listing from "@/model/listingModel";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }: any) {

    connectDB();
    try {
        const { id } = params;
        await Listing.findOneAndDelete({ _id: id });
        return NextResponse.json({ message: 'Successfully deleted' });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}