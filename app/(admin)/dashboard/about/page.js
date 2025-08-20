"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "../_components/DashboardSidebar";
import Image from "next/image";

import { ImageUploadIcon } from "@/svg/Icon";
import AboutForm from "./_components/AboutForm";
import AboutInfoForm from "./_components/AboutInfoForm";
import SkillsForm from "./_components/SkillsForm";
import TechnologiesForm from "./_components/TechnologiesForm";

export default function AboutPage() {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 mt-10">
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
                {/* About Form */}
                <AboutForm />

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
                <AboutInfoForm />

                {/* Social Links */}
                <TechnologiesForm />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
