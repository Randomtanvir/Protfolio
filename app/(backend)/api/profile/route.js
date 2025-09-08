import { NextResponse } from "next/server";
import { PersonalInfo } from "@/models/personalInfo";
import { uploadToCloudinary } from "@/utils/cloudinary";
import connectMongo from "@/db/db";

export async function POST(request) {
  await connectMongo();

  try {
    const formData = await request.formData();
    const body = {};

    // Extract fields
    for (const [key, value] of formData.entries()) {
      if (key === "heroImg") continue; // handle file separately
      body[key] = value;
    }

    // Handle image upload
    const heroImgFile = formData.get("heroImg");
    if (heroImgFile && heroImgFile.size > 0) {
      const uploadedUrl = await uploadToCloudinary(
        heroImgFile,
        "personal-info"
      );
      body.heroImg = uploadedUrl;
    }

    // Save to MongoDB
    const newPersonalInfo = new PersonalInfo(body);
    const savedData = await newPersonalInfo.save();

    return NextResponse.json(
      { success: true, data: savedData },
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

// export async function PATCH(request) {
//   try {
//     const body = await request.json();
//     const { id, ...updateFields } = body;

//     if (!id) {
//       return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
//     }

//     const updatedData = await PersonalInfo.findByIdAndUpdate(id, updateFields, {
//       new: true, // return the updated document
//     });

//     if (!updatedData) {
//       return NextResponse.json({ success: false, message: "PersonalInfo not found" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, data: updatedData }, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ success: false, message: error.message }, { status: 500 });
//   }
// }
