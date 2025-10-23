"use client";

import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import {
  Plus,
  X,
  Upload,
  Link,
  Code,
  Monitor,
  Image as ImageIcon,
} from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CreateProjectForm = ({
  isEdit,
  project,
  setIsEdit,
  setProject,
  setOpenModal,
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: project?.title || "",
      description: project?.description || "",
      progress: project?.progress || 0,
      status: project?.status || "working",
      technologyUrls: project?.technologyUrls || [{ url: "" }],
      liveLink: project?.liveLink || "",
      sourceCode: project?.sourceCode || "",
      imageOption: "upload", // default upload option
      image: project?.image || null,
      imageUrl: project?.image || "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "technologyUrls",
  });

  const [imagePreview, setImagePreview] = useState(project?.image || null);
  const watchImage = watch("image");
  const watchOption = watch("imageOption");
  const watchImageUrl = watch("imageUrl");

  const onSubmit = async (data) => {
    // Create a FormData object to handle file upload
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "image" && value) {
        formData.append("image", value);
      } else if (typeof value === "object" && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    });
    try {
      const response = await fetch(
        isEdit ? `/api/project/${project?._id}` : "/api/project",
        {
          method: isEdit ? "PATCH" : "POST",
          body: formData,
        }
      );

      // Handle response as needed
      const res = await response.json();
      if (res.success) {
        toast.success(res.message || "Project created successfully!");
        router.refresh();
        reset();
        setOpenModal(false);
        setIsEdit(false);
        setProject({});
        setImagePreview(null);
      } else {
        toast.error(res.message || "Failed to create project.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while creating the project.");
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-white dark:bg-gray-800 rounded-xl max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Project Title <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("title", {
                    required: "Project title is required",
                  })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                    errors.title
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="Enter project title"
                />
                {errors.title && (
                  <p className="text-sm text-red-500">{errors.title.message}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none ${
                    errors.description
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="Describe your project"
                />
                {errors.description && (
                  <p className="text-sm text-red-500">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Progress & Status */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 ">
                    Progress (%)
                  </label>
                  <input
                    type="number"
                    {...register("progress", { min: 0, max: 100 })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] 
             [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  {errors.progress && (
                    <p className="text-sm text-red-500">
                      {errors.progress.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("status", { required: "Status is required" })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="working">🚀 In Progress</option>
                    <option value="complete">✅ Completed</option>
                  </select>
                  {errors.status && (
                    <p className="text-sm text-red-500">
                      {errors.status.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Live Link */}
              <div>
                <label className=" text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
                  <Link className="w-4 h-4" /> Live Project URL (optional)
                </label>
                <input
                  {...register("liveLink", {
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message: "Enter a valid URL",
                    },
                  })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="https://your-live-project.com"
                />
                {errors.liveLink && (
                  <p className="text-sm text-red-500">
                    {errors.liveLink.message}
                  </p>
                )}
              </div>

              {/* Code Link */}
              <div>
                <label className=" text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
                  <Link className="w-4 h-4" /> Source Code URL (optional)
                </label>
                <input
                  {...register("sourceCode", {
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message: "Enter a valid URL",
                    },
                  })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="https://github.com/your-repo"
                />
                {errors.sourceCode && (
                  <p className="text-sm text-red-500">
                    {errors.sourceCode.message}
                  </p>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Image Option Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Project Image
                </label>
                <div className="flex gap-4 my-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="upload"
                      {...register("imageOption")}
                      defaultChecked
                    />
                    Upload Image
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="url"
                      {...register("imageOption")}
                    />
                    Use Image URL
                  </label>
                </div>

                {/* Conditional Fields */}
                {watchOption === "upload" ? (
                  <Controller
                    control={control}
                    name="image"
                    render={({ field }) => (
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            field.onChange(e.target.files[0]);
                            const file = e.target.files[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = (ev) =>
                                setImagePreview(ev.target.result);
                              reader.readAsDataURL(file);
                            }
                          }}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors bg-gray-50 dark:bg-gray-700 min-h-[180px] flex items-center justify-center">
                          {imagePreview ? (
                            <img
                              src={imagePreview}
                              className="w-full h-40 object-cover rounded-lg"
                            />
                          ) : (
                            <div className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400">
                              <Upload className="w-6 h-6" />
                              <p>Click to upload project image</p>
                              <p className="text-xs">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  />
                ) : (
                  <div>
                    <input
                      {...register("imageUrl", {
                        pattern: {
                          value: /^https?:\/\/.+/,
                          message: "Enter a valid image URL",
                        },
                      })}
                      onChange={(e) => setImagePreview(e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="https://your-image-link.com/project.png"
                    />
                    {watchImageUrl && (
                      <img
                        src={watchImageUrl}
                        alt="Preview"
                        className="mt-3 w-full h-40 object-cover rounded-lg"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Technology URLs */}
              <div>
                <label className=" text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
                  <Code className="w-4 h-4" /> Technology Stack URLs
                </label>
                <div className="space-y-2 mt-2">
                  {fields?.map((field, index) => (
                    <div key={field.id} className="flex gap-2 items-center">
                      <input
                        {...register(`technologyUrls.${index}.url`, {
                          pattern: {
                            value: /^https?:\/\/.+/,
                            message: "Enter a valid URL",
                          },
                        })}
                        className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        placeholder="https://technology-website.com"
                      />
                      {fields.length > 1 && (
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500"
                        >
                          <X />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => append({ url: "" })}
                    className="flex items-center justify-center gap-1 px-3 py-2 border-2 border-dashed rounded-lg text-gray-600 dark:text-gray-400 hover:border-blue-500 dark:hover:border-blue-400 w-full mt-2"
                  >
                    <Plus className="w-4 h-4" /> Add URL
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => {
                reset();
                setImagePreview(null);
              }}
              className="px-6 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Loading..."
              ) : (
                <>
                  <Monitor className="w-4 h-4" />{" "}
                  {isEdit ? "Update Project" : "Create Project"}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectForm;
