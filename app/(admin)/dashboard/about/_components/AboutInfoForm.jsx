"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AboutInfoForm = ({ aboutInfo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: aboutInfo?.fullName || "John Doe",
      bio:
        aboutInfo?.bio ||
        "A passionate developer with a knack for creating elegant solutions.",
      experience: aboutInfo?.experience || "",
      education: aboutInfo?.education || "",
      location: aboutInfo?.location || "",
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      const response = await fetch("/api/about", {
        method: "PATCH",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        toast.success(result.message || "Profile updated successfully");
      } else {
        toast.error(result.message || "Failed to update profile");
      }
    } catch (error) {
      console.log(error.message || "Something went wrong in about form");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
    >
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Full Name
        </label>
        <input
          type="text"
          {...register("fullName", { required: "Full name is required" })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="Enter your full name"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Bio
        </label>
        <textarea
          {...register("bio", { required: "Bio is required" })}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
          placeholder="Write something about yourself..."
        />
        {errors.bio && (
          <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
        )}
      </div>

      {/* Experience */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Experience
        </label>
        <input
          type="text"
          {...register("experience", { required: "Experience is required" })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="e.g. 3+ years of web development"
        />
        {errors.experience && (
          <p className="text-red-500 text-sm mt-1">
            {errors.experience.message}
          </p>
        )}
      </div>

      {/* Education */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Education
        </label>
        <input
          type="text"
          {...register("education", { required: "Education is required" })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="e.g. B.Sc in Computer Science"
        />
        {errors.education && (
          <p className="text-red-500 text-sm mt-1">
            {errors.education.message}
          </p>
        )}
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Location
        </label>
        <input
          type="text"
          {...register("location", { required: "Location is required" })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="Enter your location"
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
        )}
      </div>

      {/* Submit */}
      <div className="flex mt-4 justify-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="px-6 rounded-sm bg-[#6e46ffd0] hover:bg-[#6e46ff] text-white"
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Saving...</span>
            </div>
          ) : (
            "➤ Save Profile"
          )}
        </Button>
      </div>
    </form>
  );
};

export default AboutInfoForm;
