import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    progress: {
      type: String,
      default: "0", // can store percentage as string like "50"
    },
    status: {
      type: String,
      enum: ["planning", "working", "completed", "onHold"],
      default: "planning",
    },
    liveLink: {
      type: String,
      trim: true,
    },
    sourceCode: {
      type: String,
      trim: true,
    },
    image: {
      type: String, // store uploaded image URL
      default: "",
    },
    imageOption: {
      type: String,
      enum: ["upload", "url"],
      default: "upload",
    },
    technologyUrls: [
      {
        url: { type: String, trim: true },
      },
    ],
  },
  { timestamps: true }
);

export const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
