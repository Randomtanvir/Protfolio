"use client";

import { Pocket, Save } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AboutMeForm = ({ profile }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      bio:
        profile?.bio ||
        "Passionate developer with a knack for creating dynamic web applications.",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    // 👉 Create FormData to send to API
    const formData = new FormData();
    formData.append("bio", data.bio);

    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        body: formData,
      });
      const result = await res.json(); // ✅ parse JSON from stream
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message || "Failed to update bio");
      }
    } catch (error) {
      console.log("bio-error :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
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
          disabled={loading}
          className={`px-4 py-2 flex gap-2 items-center text-sm rounded-sm font-medium ${
            loading ? "bg-gray-500" : "bg-[#6e46ffd0]"
          } ${
            loading ? "hover:bg-gray-500" : "hover:bg-[#6e46ff]"
          } text-white hover:text-gray-200 cursor-pointer transition-all`}
        >
          Save
          <Save size={16} />
        </button>
      </div>
    </form>
  );
};

export default AboutMeForm;
