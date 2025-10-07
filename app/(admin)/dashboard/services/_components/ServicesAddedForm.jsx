"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

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

const ServicesForm = ({
  service,
  isEdit,
  setService,
  setIsEdit,
  setOpenServiceModal,
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: isEdit
      ? {
          serviceName: service?.serviceName || "",
          serviceBio: service?.serviceBio || "",
          serviceIconUrl: service?.serviceIconUrl || "",
          technology: service?.technology || "",
          iconColor: service?.iconColor || "#000000",
          blobColor1: service?.blobColor1 || "#ff7e5f",
          blobColor2: service?.blobColor2 || "#feb47b",
        }
      : {
          serviceName: "",
          serviceBio: "",
          serviceIconUrl: "",
          technology: "",
          iconColor: "",
          blobColor1: "#",
          blobColor2: "#",
        },
  });

  const serviceName = watch("serviceName");
  const serviceBio = watch("serviceBio");
  const serviceIconUrl = watch("serviceIconUrl");
  const technology = watch("technology");

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        isEdit ? `/api/service/${service._id}` : "/api/service",
        {
          method: isEdit ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.success) {
        toast.success(result.message);
        router.refresh();
        reset();
        setService({}); // reset after submit
        setIsEdit(false); // close edit mode
        setOpenServiceModal(false);
      } else {
        toast.error("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  const addTechnology = (tech) => {
    const techs = technology ? technology.split(", ") : [];
    if (!techs.includes(tech)) {
      const newValue = techs.length > 0 ? `${technology}, ${tech}` : tech;
      setValue("technology", newValue);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md sm:shadow-lg transition-colors">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Service Name */}
        <div className="space-y-2">
          <label
            htmlFor="serviceName"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Service Name *
          </label>
          <input
            id="serviceName"
            {...register("serviceName", {
              required: "Service name is required",
              minLength: {
                value: 3,
                message: "Service name must be at least 3 characters",
              },
            })}
            className={`w-full px-4 py-2 sm:py-3 border rounded-lg text-sm sm:text-base 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors 
              dark:bg-gray-800 dark:text-white dark:border-gray-700 ${
                errors.serviceName ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="e.g. Full Stack Web Development"
          />
          {errors.serviceName && (
            <p className="text-sm text-red-500">{errors.serviceName.message}</p>
          )}
        </div>

        {/* Service Bio */}
        <div className="space-y-2">
          <label
            htmlFor="serviceBio"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Service Description *
          </label>
          <textarea
            id="serviceBio"
            rows={4}
            {...register("serviceBio", {
              required: "Service description is required",
              minLength: {
                value: 20,
                message: "Description must be at least 20 characters",
              },
              maxLength: {
                value: 500,
                message: "Description must not exceed 500 characters",
              },
            })}
            className={`w-full px-4 py-2 sm:py-3 border rounded-lg text-sm sm:text-base 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors 
              resize-none dark:bg-gray-800 dark:text-white dark:border-gray-700 ${
                errors.serviceBio ? "border-red-500" : "border-gray-300"
              }`}
            placeholder="Describe your service in detail. What do you offer? What problems do you solve?"
          />
          {errors.serviceBio && (
            <p className="text-sm text-red-500">{errors.serviceBio.message}</p>
          )}
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {serviceBio.length}/500 characters
          </p>
        </div>

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
            className={`w-full px-4 py-2 sm:py-3 border rounded-lg text-sm sm:text-base 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors 
              dark:bg-gray-800 dark:text-white dark:border-gray-700 ${
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
                className="px-3 py-1 text-xs sm:text-sm bg-blue-50 dark:bg-blue-900/30 
                  text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-100 
                  dark:hover:bg-blue-800 transition-colors"
              >
                + {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Service Icon URL */}
        <div className="space-y-2">
          <label
            htmlFor="serviceIconUrl"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Service Icon URL
          </label>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              id="serviceIconUrl"
              {...register("serviceIconUrl", {
                pattern: {
                  value: /^https?:\/\/.+\.(jpg|jpeg|png|gif|svg|webp)$/i,
                  message: "Please enter a valid image URL",
                },
              })}
              className={`flex-1 px-4 py-2 sm:py-3 border rounded-lg text-sm sm:text-base 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors 
                dark:bg-gray-800 dark:text-white dark:border-gray-700 ${
                  errors.serviceIconUrl ? "border-red-500" : "border-gray-300"
                }`}
              placeholder="https://example.com/icon.png"
            />
            {serviceIconUrl && !errors.serviceIconUrl && (
              <div className="w-12 h-12 border rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                <img
                  src={serviceIconUrl}
                  alt="Service icon preview"
                  className="w-full h-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            )}
          </div>
          {errors.serviceIconUrl && (
            <p className="text-sm text-red-500">
              {errors.serviceIconUrl.message}
            </p>
          )}
        </div>

        {/* {colour } */}

        <div className="flex flex-wrap gap-6">
          <div className="space-y-2">
            <label
              htmlFor="iconColor"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Icon Color
            </label>
            <input
              type="color"
              id="iconColor"
              {...register("iconColor")}
              className={`w-16 h-10 p-0 border rounded-lg cursor-pointer 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors 
              dark:bg-gray-800 dark:border-gray-700`}
              title="Choose your color"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="blobColor1"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Blob Color 1
            </label>
            <input
              type="color"
              id="blobColor1"
              {...register("blobColor1")}
              className={`w-16 h-10 p-0 border rounded-lg cursor-pointer 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors
              dark:bg-gray-800 dark:border-gray-700`}
              title="Choose your color"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="blobColor2"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Blob Color 2
            </label>
            <input
              type="color"
              id="blobColor2"
              {...register("blobColor2")}
              className={`w-16 h-10 p-0 border rounded-lg cursor-pointer 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors
              dark:bg-gray-800 dark:border-gray-700`}
              title="Choose your color"
            />
          </div>
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
            ) : isEdit ? (
              "Update"
            ) : (
              "Save Service"
            )}
          </Button>{" "}
        </div>
      </form>
    </div>
  );
};

export default ServicesForm;
