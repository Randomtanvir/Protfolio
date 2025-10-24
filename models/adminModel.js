import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePicture: {
      type: String, // Cloudinary/S3 URL or path
      required: false,
    },
    resume: {
      type: String, // URL of uploaded resume (PDF, DOCX, etc.)
      required: false,
    },
  },

  { timestamps: true }
);

export const Admin =
  mongoose.models.Admin || mongoose.model("Admin", adminSchema);
