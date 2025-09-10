"use client";

import { Save } from "lucide-react";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";

export default function SocialLinksForm({ profile }) {
  const [loading, setLoading] = React.useState(false);
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      socialLinks: profile?.socialLinks || [
        { platform: "", username: "", icon: "" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialLinks",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    // 👉 Create FormData to send to API
    const formData = new FormData();
    formData.append("socialLinks", JSON.stringify(data.socialLinks));

    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        body: formData,
      });
      const result = await res.json(); // ✅ parse JSON from stream
      if (result.success) {
        toast.success(result.message);
        console.log("✅ Saved in DB:", result.data);
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
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Social Links
      </h3>

      <div className="grid grid-cols-1 gap-6">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="space-y-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            {/* Platform */}
            <input
              {...register(`socialLinks.${index}.platform`)}
              defaultValue={field.platform}
              className="w-full px-3 py-2 text-sm text-gray-900 dark:text-white bg-transparent border rounded-lg border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none"
              placeholder="Platform (e.g. facebook, twitter)"
            />

            {/* Username / URL */}
            <input
              {...register(`socialLinks.${index}.username`)}
              defaultValue={field.username}
              className="w-full px-3 py-2 text-sm text-gray-900 dark:text-white bg-transparent border rounded-lg border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none"
              placeholder="https://example.com/username"
            />

            {/* Icon */}
            <div className="flex items-center gap-2">
              <input
                {...register(`socialLinks.${index}.icon`)}
                defaultValue={field.icon}
                className="flex-1 px-3 py-2 text-sm text-gray-900 dark:text-white bg-transparent border rounded-lg border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:outline-none"
                placeholder="icon name (e.g. facebook, twitter)"
              />

              {/* Remove Button */}
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500 text-sm px-2"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => append({ platform: "", username: "", icon: "" })}
          className="px-3 py-1.5 text-sm rounded-lg border bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          + Add Link
        </button>
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
}
