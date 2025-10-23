"use client";
import { Button } from "@/components/ui/button";
import { CirclePlus, Trash } from "lucide-react";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";

const SkillsForm = ({ aboutInfo }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      skills: aboutInfo?.skills || [
        { name: "", percentage: "", color: "#000000" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("skills", JSON.stringify(data.skills));

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
      className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 backdrop-blur-sm
                 rounded-2xl p-6 sm:p-8 border 
                 shadow-lg space-y-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Core Skills
      </h2>

      {fields?.map((field, index) => (
        <div
          key={field.id}
          className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center"
        >
          {/* Skill Name */}
          <div className="sm:col-span-2">
            <input
              type="text"
              {...register(`skills.${index}.name`, {
                required: "Skill name is required",
              })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
                         focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Skill Name"
            />
            {errors.skills?.[index]?.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.skills[index].name.message}
              </p>
            )}
          </div>

          {/* Percentage */}
          <div>
            <input
              type="number"
              {...register(`skills.${index}.percentage`, {
                required: "Percentage is required",
                min: { value: 0, message: "Min is 0" },
                max: { value: 100, message: "Max is 100" },
              })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
             focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
             bg-white dark:bg-gray-800 text-gray-900 dark:text-white
             [appearance:textfield] 
             [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="%"
            />
            {errors.skills?.[index]?.percentage && (
              <p className="text-red-500 text-sm mt-1">
                {errors.skills[index].percentage.message}
              </p>
            )}
          </div>

          {/* Color Picker */}
          <div className="flex items-center">
            <input
              type="color"
              {...register(`skills.${index}.color`, { required: true })}
              className="w-12 h-10 cursor-pointer rounded-md border border-gray-300 dark:border-gray-700"
            />
          </div>
        </div>
      ))}

      {/* Add / Remove Buttons */}
      <div className="flex gap-3 items-center mt-4">
        <button
          type="button"
          onClick={() => append({ name: "", percentage: "", color: "#000000" })}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md"
        >
          <CirclePlus />
        </button>
        <button
          type="button"
          onClick={() => remove(fields.length - 1)}
          disabled={fields.length === 0}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md disabled:opacity-50"
        >
          <Trash />
        </button>
      </div>

      {/* Submit */}
      <div className="flex justify-center">
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
            " ✔️  Save Skills"
          )}
        </Button>
      </div>
    </form>
  );
};

export default SkillsForm;
