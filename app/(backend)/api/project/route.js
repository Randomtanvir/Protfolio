import connectMongo from "@/db/db";
import { Project } from "@/models/projectModel";
import { uploadToCloudinary } from "@/utils/cloudinary";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connectMongo();

  // get data from request body
  // check if data is valid
  // check image upload or url
  // when upload image -> upload to cloudinary and get the url
  // when upload imageulr -> use the url directly
  // check every field are required or not => no need for now
  // create new project

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

    const project = {
      title: body.title,
      description: body.description,
      progress: body.progress || "0",
      status: body.status || "working",
      liveLink: body.liveLink || "",
      sourceCode: body.sourceCode || "",
      image: body.image || body.imageUrl || "",
      technologyUrls: body.technologyUrls || [],
    };

    // Create new service
    const newProject = await Project.create(project);

    return NextResponse.json(
      {
        success: true,
        message: "Project created successfully",
        data: newProject,
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
    const projects = await Project.find({});
    return NextResponse.json(
      { success: true, data: projects },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
