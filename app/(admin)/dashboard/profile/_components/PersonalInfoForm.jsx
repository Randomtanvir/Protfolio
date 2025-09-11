"use client";

import { Save } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const PersonalInfoForm = ({ profile }) => {
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: profile?.fullName || "",
      profession: profile?.profession || "",
      stack: profile?.stack || "",
      stackBio: profile?.stackBio || "",
      extraRole: profile?.extraRole || "",
      extraBio: profile?.extraBio || "",
      experienceYears: profile?.experienceYears || 0,
      completeProjects: profile?.completeProjects || 0,
      companiesWorked: profile?.companiesWorked || 0,
    },
  });

  const fields = [
    { label: "Full Name", name: "fullName", type: "text" },
    { label: "Profession", name: "profession", type: "text" },
    { label: "Stack", name: "stack", type: "text" },
    { label: "Stack Bio", name: "stackBio", type: "text" },
    { label: "Extra Role", name: "extraRole", type: "text" },
    { label: "Extra Bio", name: "extraBio", type: "text" },
    { label: "Years of Experience", name: "experienceYears", type: "number" },
    { label: "Completed Projects", name: "completeProjects", type: "number" },
    { label: "Companies Worked At", name: "companiesWorked", type: "number" },
  ];

  const onSubmit = async (data) => {
    setLoading(true);
    // 👉 Create FormData to send to API
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("profession", data.profession);
    formData.append("stack", data.stack);
    formData.append("stackBio", data.stackBio);
    formData.append("extraRole", data.extraRole);
    formData.append("extraBio", data.extraBio);
    formData.append("experienceYears", data.experienceYears);
    formData.append("completeProjects", data.completeProjects);
    formData.append("companiesWorked", data.companiesWorked);

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
      className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Personal Information
      </h3>

      <div className="space-y-4">
        {/* dinamic */}
        {fields.map((field) => (
          <div key={field.name}>
            <label className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
              {field.label}
            </label>
            <input
              {...register(field.name, { required: true })}
              type={field.type}
              className="w-full px-3 py-2 text-gray-900 dark:text-white bg-transparent border rounded-lg border-gray-200 dark:border-gray-700 hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
              placeholder={`Enter your ${field.label.toLowerCase()}`}
            />
          </div>
        ))}
      </div>

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

export default PersonalInfoForm;
