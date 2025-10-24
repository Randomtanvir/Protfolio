import connectMongo from "@/db/db";
import { Admin } from "@/models/adminModel";
import { uploadToCloudinary } from "@/utils/cloudinary";
import { NextResponse } from "next/server";

export const PATCH = async (req) => {
  await connectMongo();

  try {
    const formData = await req.formData();
    const body = {};

    // Extract all text fields except file inputs
    for (const [key, value] of formData.entries()) {
      if (key === "profilePicture" || key === "resume") continue;
      body[key] = value;
    }

    // 🖼️ Handle profile picture upload
    const profilePicture = formData.get("profilePicture");
    if (profilePicture && profilePicture.size > 0) {
      const uploadedUrl = await uploadToCloudinary(
        profilePicture,
        "profile-img"
      );
      body.profilePicture = uploadedUrl;
    }

    // 📄 Handle resume upload manually
    const resume = formData.get("resume");
    if (resume && resume.size > 0) {
      const uploadedResume = await uploadToCloudinary(resume, "resumes"); // ✅ await
      body.resume = uploadedResume;
    }

    // 🧾 Update admin info
    const newAdminInfo = await Admin.findOneAndUpdate(
      {},
      { $set: body },
      { new: true, upsert: true, select: "-password" }
    );

    return NextResponse.json(
      {
        success: true,
        message: "Profile updated successfully",
        data: newAdminInfo,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Server Error",
      },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  await connectMongo();

  try {
    const body = await req.json();
    const { currenntPass, newPass, confirmPass } = body;

    // All field are needed
    if (!currenntPass || !newPass || !confirmPass) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    if (newPass.length > 6 || confirmPass.length < 6) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at 6 Character",
        },
        { status: 400 }
      );
    }

    // 1. Check if newPass equals confirmPass
    if (newPass !== confirmPass) {
      return NextResponse.json(
        {
          success: false,
          message: "Confirm Password does not match",
        },
        { status: 400 }
      );
    }

    // findthe user and verify current PasswordChangeForm

    const admin = await Admin.findOne({});

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Admin not found" },
        { status: 404 }
      );
    }
    if (currenntPass !== admin.password) {
      return NextResponse.json(
        {
          success: false,
          message: "Current Password does not match",
        },
        { status: 400 }
      );
    }
    // 3. Hash the newPass and update the database
    // verify current password
    // const isMatch = await bcrypt.compare(currenntPass, admin.password);
    // if (!isMatch) {
    //   return NextResponse.json({ success: false, message: "Current password is incorrect" }, { status: 400 });
    // }

    // // hash new password
    // const hashedPassword = await bcrypt.hash(newPass, 10);

    // // update
    // admin.password = hashedPassword;
    // await admin.save();

    admin.password = confirmPass;
    await admin.save();

    return NextResponse.json({
      success: true,
      message: "Password changed.",
    });
  } catch (error) {
    console.error("Password update error:", error); // Log the error for debugging

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 } // Use 500 Internal Server Error status
    );
  }
};
