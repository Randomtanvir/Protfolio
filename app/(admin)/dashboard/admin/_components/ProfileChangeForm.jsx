"use client";
import React, { useState } from "react";
import { User, Mail, Camera, Save, FileText } from "lucide-react";
import { useForm } from "react-hook-form";

const ProfileChangeForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "John Doe",
      email: "john.doe@example.com",
      profileImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      resume: null,
    },
  });

  const profileImage = watch("profileImage");
  const resumeFile = watch("resume");

  const onProfileSubmit = async (data) => {
    console.log("Submitted:", data);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setValue("profileImage", e.target.result, { shouldValidate: true });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onProfileSubmit)}
        className="
          bg-white/90 dark:bg-white/10 
          backdrop-blur-lg border border-gray-200 dark:border-white/20 
          rounded-2xl p-8 shadow-xl dark:shadow-2xl
        "
      >
        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Profile Information
          </h2>
        </div>

        <div className="space-y-6">
          {/* Profile Image */}
          <div className="text-center">
            <div className="relative inline-block">
              <img
                src={profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-teal-600 shadow-lg"
              />
              <label className="absolute bottom-0 right-0 bg-teal-600 hover:bg-purple-600 text-white p-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-110">
                <Camera className="w-4 h-4" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="
                w-full rounded-lg px-4 py-3 
                border border-gray-300 dark:border-white/20 
                bg-white dark:bg-white/5
                text-gray-900 dark:text-white 
                placeholder-gray-400
                focus:border-blue-500 focus:ring-2 focus:ring-blue-400/30
                transition-all duration-300
              "
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="
                  w-full rounded-lg pl-12 pr-4 py-3 
                  border border-gray-300 dark:border-white/20 
                  bg-white dark:bg-white/5
                  text-gray-900 dark:text-white 
                  placeholder-gray-400
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-400/30
                  transition-all duration-300
                "
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              Upload Resume (PDF)
            </label>

            <label
              htmlFor="resume-upload"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed 
              border-gray-300 dark:border-white/20 rounded-xl cursor-pointer 
              hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-white/5 
              transition-all duration-300 group"
            >
              <FileText className="w-10 h-10 text-gray-400 group-hover:text-blue-500 mb-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Drag & drop your resume here, or{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  browse
                </span>
              </span>
              <input
                id="resume-upload"
                type="file"
                accept="application/pdf"
                {...register("resume", { required: "Resume is required" })}
                className="hidden"
              />
            </label>

            {/* Error Message */}
            {errors.resume && (
              <p className="text-red-500 dark:text-red-400 text-sm mt-2">
                {errors.resume.message}
              </p>
            )}

            {/* Preview file name */}
            {resumeFile && resumeFile.length > 0 && (
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                ✅ Selected:{" "}
                <span className="font-medium">{resumeFile[0]?.name}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="
              w-full bg-gradient-to-r from-blue-500 to-teal-600 
              hover:from-blue-600 hover:to-teal-700 
              text-white font-bold py-3 px-6 rounded-lg 
              transition-all duration-300 flex items-center justify-center gap-2 
              disabled:opacity-50
            "
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Save className="w-5 h-5" />
            )}
            {isLoading ? "Saving..." : "Save Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileChangeForm;
