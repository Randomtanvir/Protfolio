import { NextResponse } from "next/server";
import { PersonalInfo } from "@/models/personalInfo";
import { uploadToCloudinary } from "@/utils/cloudinary";
import connectMongo from "@/db/db";

export async function PATCH(request) {
  await connectMongo();

  try {
    const formData = await request.formData();
    const body = {};

    // Extract text fields (ignore heroImg here)
    for (const [key, value] of formData.entries()) {
      if (key === "heroImg") continue;
      body[key] = value;
    }

    // Parse socialLinks if sent
    if (body.socialLinks) {
      try {
        body.socialLinks = JSON.parse(body.socialLinks);
      } catch (err) {
        console.warn("Failed to parse socialLinks:", err);
      }
    }
    // Parse skills if sent
    if (body.skills) {
      try {
        body.skills = JSON.parse(body.skills);
      } catch (err) {
        console.warn("Failed to parse skills:", err);
      }
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

    // Save to MongoDB (upsert = create if not exists)
    const newPersonalInfo = await PersonalInfo.findOneAndUpdate(
      {},
      { $set: body },
      { new: true, upsert: true }
    );

    return NextResponse.json(
      {
        success: true,
        message: "Profile updated successfully",
        data: newPersonalInfo,
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

export const GET = async () => {
  await connectMongo();
  try {
    const personalInfo = await PersonalInfo.findOne({});
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
};
