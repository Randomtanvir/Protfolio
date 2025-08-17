"use client";

import React from "react";
import { useForm } from "react-hook-form";

const AboutMeForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      bio: "Passionate full-stack developer with expertise in React, Next.js, and Node.js. Love building beautiful and functional web applications.",
    },
  });

  const onSubmit = (data) => {
    console.log("Bio Submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Bio
      </h3>

      <textarea
        {...register("bio", { required: true })}
        className="w-full min-h-[8rem] text-gray-900 dark:text-white bg-transparent border rounded-lg border-gray-200 dark:border-gray-700 p-3 hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all resize-none"
        placeholder="Write something about yourself..."
      />

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

export default AboutMeForm;
