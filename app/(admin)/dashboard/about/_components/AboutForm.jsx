"use client";

import React from "react";
import { useForm } from "react-hook-form";
const AboutForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "ABOUT ME",
      headLine: "Creative Developer & Designer",
    },
  });

  const fields = [
    { label: "Title", name: "title", type: "text" },
    { label: "Head Line", name: "headLine", type: "text" },
  ];

  const onSubmit = (data) => {
    console.log("Personal Info Submitted:", data);
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
        {fields.map((field) => (
          <div key={field.name}>
            <label className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
              {field.label}
            </label>
            <input
              {...register(field.name, { required: true })}
              type={field.type}
              className="w-full px-3 py-2 text-gray-900 dark:text-white bg-transparent border rounded-lg border-gray-200 dark:border-gray-700 hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
              placeholder={`Enter your ${field.label.toLowerCase()}`}
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="px-4 py-2 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AboutForm;
