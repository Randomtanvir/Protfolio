import { NextResponse } from "next/server";
import { uploadToCloudinary } from "@/utils/cloudinary";
import connectMongo from "@/db/db";
import { About } from "@/models/aboutModel";

export async function PATCH(request) {
  await connectMongo();

  try {
    const formData = await request.formData();
    const body = {};

    // Extract text fields (ignore aboutImg here)
    for (const [key, value] of formData.entries()) {
      if (key === "aboutImg") continue;
      body[key] = value;
    }

    // Parse socialLinks if sent
    if (body.skillsIcons) {
      try {
        body.skillsIcons = JSON.parse(body.skillsIcons);
      } catch (err) {
        console.warn("Failed to parse skillsIcons:", err);
      }
    }
    // Parse skills if sent
    if (body.skills) {
      try {
        body.skills = JSON.parse(body.skills);
      } catch (err) {
        console.warn("Failed to parse skillsIcons:", err);
      }
    }

    // Handle image upload
    const heroImgFile = formData.get("aboutImg");
    if (heroImgFile && heroImgFile.size > 0) {
      const uploadedUrl = await uploadToCloudinary(heroImgFile, "about-info");
      body.aboutImg = uploadedUrl;
    }

    // Save to MongoDB (upsert = create if not exists)
    const newPersonalInfo = await About.findOneAndUpdate(
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
    const aboutInfo = await About.findOne({});
    return NextResponse.json(
      { success: true, data: aboutInfo },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};
