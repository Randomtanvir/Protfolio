"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";

const ServiceContentForm = ({ onSubmit, defaultValues }) => {
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues || {
      title: "",
      description: "",
      highlightBio: "",
    },
  });

  const onFormSubmit = (data) => {
    console.log("Form Data Submitted: ", data);
    // You can add your submission logic here
    setIsEdit(false); // Disable edit mode after submission
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-black/10 dark:border-white/10 shadow-lg">
      {/* Header with edit button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Service Content
        </h2>
        <button
          type="button"
          onClick={() => setIsEdit((prev) => !prev)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <Pencil className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Title
          </label>
          <input
            type="text"
            disabled={!isEdit}
            {...register("title", { required: "Title is required" })}
            className={`w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
              focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white
              ${!isEdit ? "opacity-70 cursor-not-allowed" : ""}`}
            placeholder="Enter service title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </label>
          <textarea
            disabled={!isEdit}
            {...register("description", {
              required: "Description is required",
            })}
            rows={4}
            className={`w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
              focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none
              ${!isEdit ? "opacity-70 cursor-not-allowed" : ""}`}
            placeholder="Write a short description..."
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Highlight Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Highlight Bio
          </label>
          <textarea
            disabled={!isEdit}
            {...register("highlightBio")}
            rows={3}
            className={`w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
              focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none
              ${!isEdit ? "opacity-70 cursor-not-allowed" : ""}`}
            placeholder="Special highlights or bio..."
          />
        </div>

        {/* Submit Button */}
        {isEdit && (
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 
                text-white font-medium transition-all duration-200 shadow-md"
            >
              Save Service
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ServiceContentForm;
