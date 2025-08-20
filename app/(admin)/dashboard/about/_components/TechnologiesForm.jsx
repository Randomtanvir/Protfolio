"use client";

import { Button } from "@/components/ui/button";
import { useForm, useFieldArray } from "react-hook-form";

const TechnologiesForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      technology: "",
      skillsIcons: [{ url: "" }], // dynamic array
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skillsIcons",
  });

  const onSubmit = async (data) => {
    try {
      console.log("Form submitted:", data);
      alert("✅ Service added successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const addTechnology = (tech) => {
    const currentValue = document.querySelector("#technology").value;
    const technologies = currentValue ? currentValue.split(", ") : [];
    if (!technologies.includes(tech)) {
      const newValue =
        technologies.length > 0 ? `${currentValue}, ${tech}` : tech;
      setValue("technology", newValue);
    }
  };

  const techOptions = [
    "React",
    "Vue.js",
    "Angular",
    "Node.js",
    "Python",
    "PHP",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Laravel",
    "Django",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "Docker",
    "Kubernetes",
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
    >
      <div className="space-y-6">
        {/* Technology */}
        <div className="space-y-2">
          <label
            htmlFor="technology"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Technology Stack *
          </label>
          <input
            id="technology"
            {...register("technology", {
              required: "Technology stack is required",
            })}
            className={`w-full px-4 py-2 sm:py-3 border rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors dark:bg-gray-800 dark:text-white dark:border-gray-700 ${
              errors.technology ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g. React, Node.js, MongoDB, AWS"
          />
          {errors.technology && (
            <p className="text-sm text-red-500">{errors.technology.message}</p>
          )}

          <div className="flex flex-wrap gap-2 mt-2">
            {techOptions.slice(0, 6).map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => addTechnology(tech)}
                className="px-3 py-1 text-xs sm:text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
              >
                + {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Icon URLs */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Skill Icon URLs
          </label>

          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-3">
              <input
                {...register(`skillsIcons.${index}.url`, {
                  pattern: {
                    value: /^https?:\/\/.+\.(jpg|jpeg|png|gif|svg|webp)$/i,
                    message: "Please enter a valid image URL",
                  },
                })}
                className={`flex-1 px-4 py-2 sm:py-3 border rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 ${
                  errors.skillsIcons?.[index]?.url
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="https://example.com/icon.svg"
              />

              <Button
                type="button"
                variant="outline"
                onClick={() => remove(index)}
                className="px-3 py-2"
              >
                ✕
              </Button>
            </div>
          ))}

          {errors.skillsIcons &&
            errors.skillsIcons.map(
              (err, index) =>
                err?.url && (
                  <p key={index} className="text-sm text-red-500">
                    {err.url.message}
                  </p>
                )
            )}

          <Button
            type="button"
            variant="secondary"
            onClick={() => append({ url: "" })}
            className="mt-2"
          >
            + Add Icon
          </Button>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t dark:border-gray-700">
          <Button
            type="button"
            variant="outline"
            onClick={() => reset()}
            disabled={isSubmitting}
            className="px-6"
          >
            Reset
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-6 bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Saving...</span>
              </div>
            ) : (
              "Save Service"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TechnologiesForm;
