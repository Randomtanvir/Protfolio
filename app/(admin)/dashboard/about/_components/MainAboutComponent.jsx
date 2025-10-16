"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ImageUploadIcon } from "@/svg/Icon";
import DashboardSidebar from "../../_components/DashboardSidebar";
import AboutForm from "./AboutForm";
import SkillsForm from "./SkillsForm";
import AboutInfoForm from "./AboutInfoForm";
import TechnologiesForm from "./TechnologiesForm";
import toast from "react-hot-toast";

const MainAboutComponent = ({ aboutInfo }) => {
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("aboutImg", e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target.result); // save image as base64
      };
      reader.readAsDataURL(file);
    }

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="fixed top-0 left-0 z-40 lg:z-50">
        <DashboardSidebar />
      </div>

      <main className="min-h-screen w-full lg:pl-64">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
            >
              <div className="w-full sm:w-auto mb-4 sm:mb-0">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white">
                  About Page Management
                </h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Manage your profile, bio, and skills
                </p>
              </div>

              {/* Upload Button */}
              <Button
                variant="outline"
                className={`${loading ? "bg-gray-500" : "bg-green-500"}
                           ${
                             loading
                               ? "hover:bg-gray-500"
                               : "hover:bg-green-600"
                           } w-full sm:w-auto flex items-center justify-center gap-2 `}
                onClick={() => fileInputRef.current.click()} // 👈 trigger file picker
              >
                <ImageUploadIcon />
                Update Photo
              </Button>
              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                disabled={loading}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </motion.div>

            {/* Profile Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
              {/* Left Column - Personal Info and Availability */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-4 space-y-4 sm:space-y-6"
              >
                {/* About Form */}
                <AboutForm aboutInfo={aboutInfo} />

                {/* Availability Card */}
                <SkillsForm aboutInfo={aboutInfo} />
              </motion.div>

              {/* Right Column - Bio, Social Links and Avatar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-8 space-y-4 sm:space-y-6"
              >
                {/* Avatar Card */}
                <div className="bg-white dark:bg-gray-800  rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="relative mx-auto w-32 h-32 sm:w-96 sm:h-96 group">
                    <div className="relative w-full h-full overflow-hidden ">
                      <Image
                        src={
                          avatar || aboutInfo?.aboutImg || "/default-avatar.png"
                        }
                        alt="Profile"
                        className="object-cover"
                        fill
                        // sizes="(max-width: 768px) 128px, 160px"
                      />
                    </div>
                  </div>
                </div>

                {/* Bio Card */}
                <AboutInfoForm aboutInfo={aboutInfo} />

                {/* Social Links */}
                <TechnologiesForm aboutInfo={aboutInfo} />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainAboutComponent;
