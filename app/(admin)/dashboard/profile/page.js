"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "../_components/DashboardSidebar";
import Image from "next/image";
import SocialLinkForm from "./_components/SocialLinkForm";
import PersonalInfoForm from "./_components/PersonalInfoForm";
import AboutMeForm from "./_components/AboutMeForm";
import SkillsForm from "./_components/SkillsForm";
import { ImageUploadIcon } from "@/svg/Icon";

export default function ProfilePage() {
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target.result); // save image as base64
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardSidebar />

      <main className="min-h-screen w-full lg:pl-64 pb-8">
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
                  Profile Settings
                </h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Manage your personal information and preferences
                </p>
              </div>

              {/* Upload Button */}
              <Button
                variant="outline"
                className="w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => fileInputRef.current.click()} // 👈 trigger file picker
              >
                <ImageUploadIcon />
                Update Photo
              </Button>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
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
                {/* Personal Info Card */}
                <PersonalInfoForm />

                {/* Availability Card */}
                <SkillsForm />
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
                        src={avatar || "/default-avatar.png"}
                        alt="Profile"
                        className="object-cover"
                        fill
                        // sizes="(max-width: 768px) 128px, 160px"
                      />
                    </div>
                  </div>
                </div>

                {/* Bio Card */}
                <AboutMeForm />

                {/* Social Links */}
                <SocialLinkForm />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
