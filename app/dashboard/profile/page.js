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
      name: "John Doe",
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
    <div className="min-h-screen">
      <DashboardSidebar />
      
      <div className="ml-64 min-h-screen p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                Profile Settings
              </h1>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Manage your personal information and preferences
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Avatar and Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1 space-y-8"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 space-y-6">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src={profile.personalInfo.avatar}
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <input
                    className="w-full text-center text-xl font-bold text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                    value={profile.personalInfo.name}
                    onChange={(e) => updatePersonalInfo("name", e.target.value)}
                    placeholder="Your Name"
                  />
                  <input
                    className="w-full text-center text-gray-600 dark:text-gray-400 bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                    value={profile.personalInfo.title}
                    onChange={(e) => updatePersonalInfo("title", e.target.value)}
                    placeholder="Your Title"
                  />
                </div>
              </div>

              {/* Availability Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Availability</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500 dark:text-gray-400">Status</label>
                    <input
                      className="w-full text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                      value={profile.availability.status}
                      onChange={(e) => updateAvailability("status", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 dark:text-gray-400">Work Hours</label>
                    <input
                      className="w-full text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                      value={profile.availability.workHours}
                      onChange={(e) => updateAvailability("workHours", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 dark:text-gray-400">Rate</label>
                    <input
                      className="w-full text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                      value={profile.availability.rate}
                      onChange={(e) => updateAvailability("rate", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact, Bio, and Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-500 dark:text-gray-400">Email</label>
                    <input
                      className="w-full text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                      value={profile.personalInfo.email}
                      onChange={(e) => updatePersonalInfo("email", e.target.value)}
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 dark:text-gray-400">Phone</label>
                    <input
                      className="w-full text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                      value={profile.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 dark:text-gray-400">Location</label>
                    <input
                      className="w-full text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                      value={profile.personalInfo.location}
                      onChange={(e) => updatePersonalInfo("location", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 dark:text-gray-400">Website</label>
                    <input
                      className="w-full text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                      value={profile.personalInfo.website}
                      onChange={(e) => updatePersonalInfo("website", e.target.value)}
                      type="url"
                    />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Bio</h3>
                <textarea
                  className="w-full h-32 text-gray-900 dark:text-white bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all resize-none"
                  value={profile.bio}
                  onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                  placeholder="Write something about yourself..."
                />
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-500 dark:text-gray-400">GitHub</label>
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">github.com/</span>
                      <input
                        className="flex-1 text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                        value={profile.social.github.replace("github.com/", "")}
                        onChange={(e) => updateSocial("github", `github.com/${e.target.value}`)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</label>
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">linkedin.com/in/</span>
                      <input
                        className="flex-1 text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                        value={profile.social.linkedin.replace("linkedin.com/in/", "")}
                        onChange={(e) => updateSocial("linkedin", `linkedin.com/in/${e.target.value}`)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 dark:text-gray-400">Twitter</label>
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">twitter.com/</span>
                      <input
                        className="flex-1 text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                        value={profile.social.twitter.replace("twitter.com/", "")}
                        onChange={(e) => updateSocial("twitter", `twitter.com/${e.target.value}`)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 dark:text-gray-400">Instagram</label>
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">instagram.com/</span>
                      <input
                        className="flex-1 text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                        value={profile.social.instagram.replace("instagram.com/", "")}
                        onChange={(e) => updateSocial("instagram", `instagram.com/${e.target.value}`)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}