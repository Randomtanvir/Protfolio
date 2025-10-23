import connectMongo from "@/db/db";
import { Project } from "@/models/projectModel";
import { uploadToCloudinary } from "@/utils/cloudinary";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  await connectMongo();
  const { id } = params;

  try {
    // Parse request body
    const formData = await request.formData();
    const body = {};
    for (const [key, value] of formData.entries()) {
      if (key === "image") continue;
      body[key] = value;
    }
    // Handle image upload or URL
    if (formData.get("imageOption") === "upload") {
      const imageFile = formData.get("image");
      // Upload imageFile to Cloudinary or any other image hosting service
      if (imageFile && imageFile.size > 0) {
        const uploadedUrl = await uploadToCloudinary(
          imageFile,
          "project-images"
        );
        body.image = uploadedUrl;
      }
    } else if (formData.get("imageOption") === "url") {
      body.image = formData.get("imageUrl");
    }
    if (body.technologyUrls) {
      try {
        body.technologyUrls = JSON.parse(body.technologyUrls);
      } catch (err) {
        console.warn("Failed to parse TechnologyUrls:", err);
      }
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );

    if (!updatedProject) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "Project updated successfully",
        data: updatedProject,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  await connectMongo();
  const { id } = await params;
  try {
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};

export const PUT = async (request, { params }) => {
  await connectMongo();
  const { id } = await params;
  try {
    const body = await request.json();
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );
    if (!updatedProject) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "Project updated successfully",
        data: updatedProject,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};
