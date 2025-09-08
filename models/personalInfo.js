import mongoose from "mongoose";

const PersonalInfoSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    heroImg: {
      type: String, // store uploaded image URL
      required: false,
    },
    profession: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    stack: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    stackBio: {
      type: String,
      trim: true,
      default: "",
    },
    extraRole: {
      type: String,
      trim: true,
      default: "",
    },
    extraBio: {
      type: String,
      trim: true,
      default: "",
    },
    companiesWorked: {
      type: Number,
      default: 0,
    },
    completeProjects: {
      type: Number,
      default: 0,
    },
    experienceYears: {
      type: Number,
      default: 0,
    },
    bio: {
      type: String,
      trim: true,
      default: "",
    },
    socialLinks: [
      {
        platform: { type: String, required: false },
        username: { type: String, required: false },
        icon: { type: String, trim: true },
      },
    ],
    skills: [
      {
        name: { type: String, required: false },
        url: { type: String, required: false }, // optional proficiency percentage
      },
    ],
  },
  { timestamps: true }
);

export const PersonalInfo =
  mongoose.models.PersonalInfo ||
  mongoose.model("PersonalInfo", PersonalInfoSchema);
