import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ServicesForm = () => {
  const [formData, setFormData] = useState({
    serviceName: "",
    serviceBio: "",
    technology: "",
    serviceIconUrl: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.serviceName.trim()) {
      newErrors.serviceName = "Service name is required";
    } else if (formData.serviceName.length < 3) {
      newErrors.serviceName = "Service name must be at least 3 characters";
    }

    if (!formData.serviceBio.trim()) {
      newErrors.serviceBio = "Service description is required";
    } else if (formData.serviceBio.length < 20) {
      newErrors.serviceBio = "Description must be at least 20 characters";
    } else if (formData.serviceBio.length > 500) {
      newErrors.serviceBio = "Description must not exceed 500 characters";
    }

    if (!formData.technology.trim()) {
      newErrors.technology = "Technology stack is required";
    }

    if (
      formData.serviceIconUrl &&
      !/^https?:\/\/.+\.(jpg|jpeg|png|gif|svg|webp)$/i.test(
        formData.serviceIconUrl
      )
    ) {
      newErrors.serviceIconUrl = "Please enter a valid image URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      alert("Service added successfully!");
      handleReset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      serviceName: "",
      serviceBio: "",
      technology: "",
      serviceIconUrl: "",
    });
    setErrors({});
  };

  const addTechnology = (tech) => {
    const technologies = formData.technology
      ? formData.technology.split(", ")
      : [];
    if (!technologies.includes(tech)) {
      const newValue =
        technologies.length > 0 ? `${formData.technology}, ${tech}` : tech;
      setFormData((prev) => ({ ...prev, technology: newValue }));
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
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md sm:shadow-lg transition-colors">
      <div className="space-y-6">
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
            name="serviceName"
            value={formData.serviceName}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 sm:py-3 border rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors dark:bg-gray-800 dark:text-white dark:border-gray-700 ${
              errors.serviceName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g. Full Stack Web Development"
          />
          {errors.serviceName && (
            <p className="text-sm text-red-500">{errors.serviceName}</p>
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
            name="serviceBio"
            value={formData.serviceBio}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-2 sm:py-3 border rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none dark:bg-gray-800 dark:text-white dark:border-gray-700 ${
              errors.serviceBio ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Describe your service in detail. What do you offer? What problems do you solve?"
          />
          {errors.serviceBio && (
            <p className="text-sm text-red-500">{errors.serviceBio}</p>
          )}
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {formData.serviceBio.length}/500 characters
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
            name="technology"
            value={formData.technology}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 sm:py-3 border rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors dark:bg-gray-800 dark:text-white dark:border-gray-700 ${
              errors.technology ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g. React, Node.js, MongoDB, AWS"
          />
          {errors.technology && (
            <p className="text-sm text-red-500">{errors.technology}</p>
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
              name="serviceIconUrl"
              value={formData.serviceIconUrl}
              onChange={handleInputChange}
              className={`flex-1 px-4 py-2 sm:py-3 border rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors dark:bg-gray-800 dark:text-white dark:border-gray-700 ${
                errors.serviceIconUrl ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="https://example.com/icon.png"
            />
            {formData.serviceIconUrl && !errors.serviceIconUrl && (
              <div className="w-12 h-12 border rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                <img
                  src={formData.serviceIconUrl}
                  alt="Service icon preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )}
          </div>
          {errors.serviceIconUrl && (
            <p className="text-sm text-red-500">{errors.serviceIconUrl}</p>
          )}
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t dark:border-gray-700">
          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            disabled={isSubmitting}
            className="px-6"
          >
            Reset
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-6 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleSubmit}
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
    </div>
  );
};

export default ServicesForm;
