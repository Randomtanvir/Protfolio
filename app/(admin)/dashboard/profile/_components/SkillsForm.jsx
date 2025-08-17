"use client";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const SkillsForm = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      skills: [
        { name: "React", url: "https://react.dev" },
        { name: "Next.js", url: "https://nextjs.org" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = (data) => {
    console.log("Skills Submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 space-y-4"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Skills
      </h3>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="space-y-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
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
          className="px-4 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default SkillsForm;
