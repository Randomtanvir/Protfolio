import { NextResponse } from "next/server";
import connectMongo from "@/db/db";
import { Message } from "@/models/messageModel";

export async function GET(request, { params }) {
  await connectMongo();
  const { id } = await params;
  try {
    const message = await Message.findById(id);
    if (!message) {
      return NextResponse.json(
        { success: false, message: "Message not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: message }, { status: 200 });
  } catch (error) {
    console.error("Error fetching message:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  await connectMongo();
  const { id } = await params;
  try {
    const message = await Message.findByIdAndDelete(id);
    if (!message) {
      return NextResponse.json(
        { success: false, message: "Message not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Message deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  await connectMongo();
  const { id } = await params;
  try {
    const message = await Message.findByIdAndUpdate(
      id,
      { read: true },
      { new: true }
    );
    if (!message) {
      return NextResponse.json(
        { success: false, message: "Message not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: message }, { status: 200 });
  } catch (error) {
    console.error("Error updating message:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
