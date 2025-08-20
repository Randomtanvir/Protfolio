"use client";
import React from "react";
import { useForm } from "react-hook-form";

const AboutInfoForm = ({ defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues || {
      fullName: "Hi, I'm Tanvir Ahmad",
      bio: "A passionate web developer and designer with a keen eye for creating beautiful, functional, and user-centered digital experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality.",
      experience: "3+ years of web development",
      education: "B.Sc in Computer Science",
      location: "Dhaka, Bangladesh",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log("Form Submitted:", data))}
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
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-2 mt-8 rounded-lg bg-blue-600 hover:bg-blue-700 
                     text-white font-medium transition-all duration-200 shadow-md"
        >
          Save Profile
        </button>
      </div>
    </form>
  );
};

export default AboutInfoForm;
