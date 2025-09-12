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
  },
  { timestamps: true }
);

export const Service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);
