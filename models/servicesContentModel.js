import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
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

export const ServiceContent =
  mongoose.models.ServiceContent ||
  mongoose.model("ServiceContent", ServiceSchema);
