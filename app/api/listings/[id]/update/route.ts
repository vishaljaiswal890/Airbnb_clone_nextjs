import { connectDB } from "@/helper/db";
import Listing from "@/model/listingModel";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(request: NextRequest, { params }: any) {

    connectDB();
    try {
        const { id } = params;
        const body = await request.json();
        const data = await Listing.findByIdAndUpdate({ _id: id }, {
            title: body.title,
            countries: body.countries,
            state: body.state,
            city: body.city,
            price: body.price,
            image: body.image,
            description: body.description,
            categories: body.categories

        });

        return NextResponse.json({ message: 'Successfully updated' }, data);

    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }

}
