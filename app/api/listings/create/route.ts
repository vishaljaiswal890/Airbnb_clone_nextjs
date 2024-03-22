import { connectDB } from "@/helper/db";
import Listing from "@/model/listingModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const {
      title,
      countries,
      state,
      city,
      price,
      image,
      description,
      categories,
    } = await request.json();

    await connectDB();

    // Create a new listing with the provided data
    await Listing.create({
      title,
      countries,
      state,
      city,
      price,
      image,
      description,
      categories,
    });

    // Return success response
    return NextResponse.json({ message: "HOME ADDED SUCCESSFULLY" });
  } catch (error: any) {
    console.error("Error creating listing:", error);

    // Return error response with 500 status code
    return NextResponse.json(
      { message: "ERROR IN ADDING", error: error.message },
      { status: 500 }
    );
  }
}
