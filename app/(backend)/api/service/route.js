import connectMongo from "@/db/db";
import { Service } from "@/models/serviceModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connectMongo();

  try {
    const body = await request.json();
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { success: false, message: "Request body is required" },
        { status: 400 }
      );
    }
    // Create new service
    const newService = await Service.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Service created successfully",
        data: newService,
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
    const personalInfo = await Service.find({});
    return NextResponse.json(
      { success: true, data: personalInfo },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
