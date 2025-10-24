import { v2 as cloudinary } from "cloudinary";

// Cloudinary configuration (একবারই করতে হবে)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function fileToBuffer(file) {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function uploadToCloudinary(file, folder = "uploads") {
  if (!file) {
    throw new Error("No file provided for upload.");
  }

  // 1. ফাইলটিকে Buffer-এ রূপান্তর করা
  const buffer = await fileToBuffer(file);
  const isPDF = file.type === "application/pdf";
  const uploadOptions = {
    folder,
    resource_type: isPDF ? "raw" : "auto",
  };

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      uploadOptions,
      (error, result) => {
        if (error) {
          console.error("Cloudinary upload failed:", error);
          reject(new Error("Failed to upload file to Cloudinary."));
        } else {
          // secure_url ব্যবহার করা হলো, যা HTTPS URL দেবে।
          resolve(result.secure_url);
        }
      }
    );

    // 4. আপলোড শুরু করা
    uploadStream.end(buffer);
  });
}
