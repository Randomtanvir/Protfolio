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

    // ✅ New fields
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    highlightBio: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);
