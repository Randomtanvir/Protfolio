"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "../_components/DashboardSidebar";
import Image from "next/image";

export default function AboutPage() {
  const fileInputRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [isPublished, setIsPublished] = useState(true);
  const [profileImage, setProfileImage] = useState("/your-default-image.jpg"); // Replace with your default image
  const [bioData, setBioData] = useState({
    name: "Your Name",
    title: "Full Stack Developer",
    email: "your.email@example.com",
    location: "Your Location",
    bio: "I am a passionate web developer and designer with a keen eye for creating beautiful, functional, and user-centered digital experiences. With expertise in both design and development, I bridge the gap between aesthetics and functionality."
  });

  const [skills, setSkills] = useState([
    { 
      id: 1,
      name: "Full Stack Developer", 
      desc: "Specialized in React & Next.js", 
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", 
      color: "blue",
      progress: 90
    },
    { 
      id: 2,
      name: "UI/UX Designer", 
      desc: "Creating engaging interfaces", 
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", 
      color: "purple",
      progress: 85
    }
  ]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Handle saving changes to your backend
    console.log("Saving changes...", {
      bioData,
      skills,
      profileImage
    });
  };

  const handleDeleteSkill = (skillId) => {
    setSkills(skills.filter(skill => skill.id !== skillId));
  };

  const handleAddSkill = () => {
    const newSkill = {
      id: Date.now(),
      name: "New Skill",
      desc: "Skill description",
      icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
      color: "green",
      progress: 0
    };
    setSkills([...skills, newSkill]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 mt-10">
      <div className="fixed top-0 left-0 z-40 lg:z-50">
        <DashboardSidebar />
      </div>
      
      <main className="min-h-screen w-full lg:pl-64">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
            >
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                  About Page Management
                </h1>
                <p className="mt-1 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                  Manage your profile, bio, and skills
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4 sm:mt-0">
                <Button
                  variant="outline"
                  onClick={handleAddSkill}
                  className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add New Skill
                </Button>
                <Button 
                  onClick={handleSave}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Save Changes
                </Button>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
              {/* Profile Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-1"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Profile Image */}
                    <div className="w-full sm:w-1/3 md:w-1/4">
                      <div className="relative mx-auto w-40 h-40 group">
                        <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-700">
                          <Image
                            src={profileImage}
                            alt="Profile"
                            fill
                            className="object-cover"
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
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </div>

                      <div className="space-y-5">
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                          <input
                            type="text"
                            value={bioData.name}
                            onChange={(e) => setBioData({ ...bioData, name: e.target.value })}
                            className="w-full mt-2 px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                          <input
                            type="text"
                            value={bioData.title}
                            onChange={(e) => setBioData({ ...bioData, title: e.target.value })}
                            className="w-full mt-2 px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                          <input
                            type="email"
                            value={bioData.email}
                            onChange={(e) => setBioData({ ...bioData, email: e.target.value })}
                            className="w-full mt-2 px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
                          <input
                            type="text"
                            value={bioData.location}
                            onChange={(e) => setBioData({ ...bioData, location: e.target.value })}
                            className="w-full mt-2 px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Bio Information */}
                    <div className="w-full sm:w-2/3 md:w-3/4 space-y-4">
                      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                        Bio & About Content
                      </h2>
                      <textarea
                        value={bioData.bio}
                        onChange={(e) => setBioData({ ...bioData, bio: e.target.value })}
                        className="w-full h-[calc(100vh-24rem)] p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-700 dark:text-gray-300 transition-all"
                        placeholder="Enter your bio and about content..."
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Skills Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-2"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">Skills</h2>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {isPublished ? 'Published' : 'Draft'}
                      </span>
                      <button
                        onClick={() => setIsPublished(!isPublished)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${
                          isPublished ? 'bg-blue-600' : 'bg-gray-400'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                            isPublished ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <AnimatePresence>
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 }}
                          className="group bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600 p-4 sm:p-6 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-lg ${
                                skill.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                                skill.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                                'bg-green-100 dark:bg-green-900/30'
                              }`}>
                                <svg className={`w-6 h-6 ${
                                  skill.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                                  skill.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                                  'text-green-600 dark:text-green-400'
                                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={skill.icon} />
                                </svg>
                              </div>
                              <input
                                className="font-medium text-lg text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                                value={skill.name}
                                onChange={(e) => {
                                  const updatedSkills = [...skills];
                                  updatedSkills[index].name = e.target.value;
                                  setSkills(updatedSkills);
                                }}
                              />
                            </div>
                            <button
                              onClick={() => handleDeleteSkill(skill.id)}
                              className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-500 dark:hover:text-red-400 rounded-lg"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                          <input
                            className="w-full text-sm text-gray-600 dark:text-gray-400 bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none mb-4 transition-all"
                            value={skill.desc}
                            onChange={(e) => {
                              const updatedSkills = [...skills];
                              updatedSkills[index].desc = e.target.value;
                              setSkills(updatedSkills);
                            }}
                          />
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                              <span>Progress</span>
                              <span>{skill.progress}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 dark:bg-gray-600 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-300 ${
                                  skill.color === 'blue' ? 'bg-blue-500 dark:bg-blue-400' :
                                  skill.color === 'purple' ? 'bg-purple-500 dark:bg-purple-400' :
                                  'bg-green-500 dark:bg-green-400'
                                }`}
                                style={{ width: `${skill.progress}%` }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
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