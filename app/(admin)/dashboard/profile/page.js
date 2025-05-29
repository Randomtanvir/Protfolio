"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "../_components/DashboardSidebar";
import Image from "next/image";

export default function ProfilePage() {
  const fileInputRef = useRef(null);
  const [profile, setProfile] = useState({
    personalInfo: {
      name: "Tanvir Ahmad",
      title: "Full Stack Developer",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      website: "https://johndoe.dev",
      avatar: "/avatar-placeholder.jpg"
    },
    social: {
      github: "github.com/johndoe",
      linkedin: "linkedin.com/in/johndoe",
      twitter: "twitter.com/johndoe",
      instagram: "instagram.com/johndoe"
    },
    bio: "Passionate full-stack developer with expertise in React, Next.js, and Node.js. Love building beautiful and functional web applications.",
    availability: {
      status: "Available for freelance",
      workHours: "40 hours/week",
      timezone: "UTC-8",
      rate: "$100/hour"
    }
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile(prev => ({
          ...prev,
          personalInfo: {
            ...prev.personalInfo,
            avatar: e.target.result
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const updatePersonalInfo = (field, value) => {
    setProfile(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const updateSocial = (platform, value) => {
    setProfile(prev => ({
      ...prev,
      social: {
        ...prev.social,
        [platform]: value
      }
    }));
  };

  const updateAvailability = (field, value) => {
    setProfile(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [field]: value
      }
    }));
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
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Update Photo
              </Button>
              <input
                type="file"
                ref={fileInputRef}
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
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    {Object.entries(profile.personalInfo).map(([key, value]) => (
                      key !== "avatar" && (
                        <div key={key} className="group">
                          <label className="text-sm text-gray-500 dark:text-gray-400 capitalize block mb-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </label>
                          <input
                            className="w-full px-3 py-2 text-gray-900 dark:text-white bg-transparent border rounded-lg border-gray-200 dark:border-gray-700 hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                            value={value}
                            onChange={(e) => updatePersonalInfo(key, e.target.value)}
                          />
                        </div>
                      )
                    ))}
                  </div>
                </div>

                {/* Availability Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Availability</h3>
                  <div className="space-y-4">
                    {Object.entries(profile.availability).map(([key, value]) => (
                      <div key={key} className="group">
                        <label className="text-sm text-gray-500 dark:text-gray-400 capitalize block mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </label>
                        <input
                          className="w-full px-3 py-2 text-gray-900 dark:text-white bg-transparent border rounded-lg border-gray-200 dark:border-gray-700 hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                          value={value}
                          onChange={(e) => updateAvailability(key, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Bio, Social Links and Avatar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-8 space-y-4 sm:space-y-6"
              >
                {/* Avatar Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                  <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 group">
                    <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-700">
                      <Image
                        src={profile.personalInfo.avatar}
                        alt="Profile"
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 128px, 160px"
                      />
                    </div>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Bio Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Bio</h3>
                  <textarea
                    className="w-full min-h-[8rem] text-gray-900 dark:text-white bg-transparent border rounded-lg border-gray-200 dark:border-gray-700 p-3 hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all resize-none"
                    value={profile.bio}
                    onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                    placeholder="Write something about yourself..."
                  />
                </div>

                {/* Social Links */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Links</h3>
                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    {Object.entries(profile.social).map(([platform, value]) => (
                      <div key={platform}>
                        <label className="text-sm text-gray-500 dark:text-gray-400 capitalize block mb-1">
                          {platform}
                        </label>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400 whitespace-nowrap">{platform}.com/</span>
                          <input
                            className="flex-1 min-w-0 px-3 py-2 text-gray-900 dark:text-white bg-transparent border rounded-lg border-gray-200 dark:border-gray-700 hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                            value={value.replace(`${platform}.com/`, "")}
                            onChange={(e) => updateSocial(platform, `${platform}.com/${e.target.value}`)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}