import connectMongo from "@/db/db";
import { NextResponse } from "next/server";
import { ServiceContent } from "@/models/servicesContentModel";

export async function PATCH(request) {
  await connectMongo();

  try {
    const body = await request.json();

    // Save to MongoDB (upsert = create if not exists)
    const serviceContent = await ServiceContent.findOneAndUpdate(
      {},
      { $set: body },
      { new: true, upsert: true }
    );

    return NextResponse.json(
      {
        success: true,
        message: "Service Content updated successfully",
        data: serviceContent,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  await connectMongo();
  try {
    const serviceContent = await ServiceContent.findOne({});
    return NextResponse.json(
      { success: true, data: serviceContent },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
