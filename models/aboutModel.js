import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "ABOUT ME",
      trim: true,
    },
    headLine: {
      type: String,
      default: "",
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: String,
      required: true,
      trim: true,
    },
    education: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    aboutImg: {
      required: false,
      type: String,
    },
    // Technologies as array of strings (cleaner than comma-separated)
    technology: {
      type: [String],
      default: [],
    },

    // Skills with progress bars
    skills: [
      {
        name: {
          type: String,
          required: true,
        },
        percentage: {
          type: Number,
          required: true,
          min: 0,
          max: 100,
        },
        color: {
          type: String,
          default: "#3b82f6", // fallback blue
        },
      },
    ],

    // Skill icons (image URLs)
    skillsIcons: [
      {
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const About =
  mongoose.models.About || mongoose.model("About", AboutSchema);
