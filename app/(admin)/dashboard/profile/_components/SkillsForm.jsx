"use client";
import { Save } from "lucide-react";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";

const SkillsForm = ({ profile }) => {
  const [loading, setLoading] = React.useState(false);
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      skills: profile?.skills || [{ name: "", url: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    // 👉 Create FormData to send to API
    const formData = new FormData();
    formData.append("skills", JSON.stringify(data.skills));

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
      className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 space-y-4"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Skills
      </h3>

      <div className="max-h-96 overflow-auto">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="space-y-2 p-3 mb-1 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            {/* Skill Name */}
            <input
              {...register(`skills.${index}.name`, { required: true })}
              defaultValue={field.name}
              className="flex-1 px-3 py-2 text-gray-900 dark:text-white bg-transparent border rounded-lg border-gray-200 dark:border-gray-700 hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
              placeholder="Skill Name"
            />

            {/* Skill URL */}
            <input
              {...register(`skills.${index}.url`)}
              defaultValue={field.url}
              className="flex-1 px-3 py-2 text-gray-900 dark:text-white bg-transparent border rounded-lg border-gray-200 dark:border-gray-700 hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
              placeholder="https://imageUrl.com/skill"
            />

            {/* Remove button */}
            <button
              type="button"
              onClick={() => remove(index)}
              className="px-3 py-2 text-red-500 cursor-pointer hover:text-red-500 transition-all"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Add & Save buttons */}
      <div className="flex flex-wrap gap-2 mt-2">
        <button
          type="button"
          onClick={() => append({ name: "", url: "" })}
          className="px-3 py-1.5 text-sm rounded-lg border bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          + Add Skill
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
};

export default SkillsForm;
