import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
      trim: true,
    },
    serviceBio: {
      type: String,
      required: true,
      trim: true,
    },
    serviceIconUrl: {
      type: String,
      required: true,
    },
    technology: {
      type: [String], // e.g., ["React", "Vue.js", "Angular"]
      default: [],
    },
    status: {
      type: String,
      enum: ["active", "draft"],
      default: "draft",
    },
    iconColor: {
      type: String,
      default: "#000000", // Default to black if no color is provided
    },
    blobColor1: {
      type: String,
      default: "#ff7e5f", // Example gradient color 1
    },
    blobColor2: {
      type: String,
      default: "#feb47b", // Example gradient color 2
    },
  },
  { timestamps: true }
);

export const Service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);
