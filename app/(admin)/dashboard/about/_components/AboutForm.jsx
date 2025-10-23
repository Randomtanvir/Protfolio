"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const AboutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "ABOUT ME",
      headLine: "Creative Developer & Designer",
    },
  });

  const fields = [
    { label: "Title", name: "title", type: "text" },
    { label: "Head Line", name: "headLine", type: "text" },
  ];

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    // Handle form submission, e.g., send data to backend
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
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Personal Information
      </h3>

      <div className="space-y-4">
        {/* dinamic */}
        {fields?.map((field) => (
          <div key={field.name}>
            <label className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
              {field.label}
            </label>
            <input
              {...register(field.name, {
                required: `${field.label} is required`,
              })}
              type={field.type}
              className="w-full px-3 py-2 text-gray-900 dark:text-white bg-transparent border rounded-lg border-gray-200 dark:border-gray-700 hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
              placeholder={`Enter your ${field.label.toLowerCase()}`}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[field.name].message}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4">
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
            " ✔️  Save"
          )}
        </Button>
      </div>
    </form>
  );
};

export default AboutForm;
