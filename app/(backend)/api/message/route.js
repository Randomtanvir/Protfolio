import { NextResponse } from "next/server";
import connectMongo from "@/db/db";
import { Message } from "@/models/messageModel";

export async function POST(request) {
  await connectMongo();

  // get data from request
  // check data validity
  // create a new message in db

  try {
    const body = await request.json();
    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const message = await Message.create(body);

    if (!message) {
      return NextResponse.json(
        { success: false, message: "Failed to save message." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully",
        data: message,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error handling message:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  await connectMongo();

  try {
    // Parse URL and query parameters
    const { searchParams } = new URL(request.url);

    // 🔍 Search query (by name or email)
    const search = searchParams.get("search") || "";

    // 🔧 Build query condition
    const query = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    // 🧠 Fetch messages (sorted newest first)
    const messages = await Message.find(query).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, count: messages.length, data: messages },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
