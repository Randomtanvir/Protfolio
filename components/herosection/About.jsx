"use client";
import React from "react";
import { motion } from "framer-motion";
import ResumeDownloader from "../ResumeDownloader";

const About = ({ profileInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-2"
    >
      <div
        className="relative bg-zinc-200/50 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20
                min-h-[600px] lg:min-h-[700px] xl:h-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Header */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-4"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {profileInfo?.bio}
            </motion.p>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <HighlightSkills
              color="blue"
              icon="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              name={profileInfo?.stack}
              desc={profileInfo?.stackBio}
            />
            <HighlightSkills
              color="purple"
              icon="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              name={profileInfo?.extraRole}
              desc={profileInfo?.extraBio}
            />
          </div>

          {/* Download CV Button */}
          <ResumeDownloader />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

const HighlightSkills = ({ color, icon, name, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative group"
    >
      <div
        className={`absolute inset-0 bg-${color}-500/10 rounded-2xl blur-xl transition-all duration-300 group-hover:bg-${color}-500/20`}
      />
      <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20 dark:border-gray-700/20">
        <div className="flex items-center space-x-4">
          <div
            className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex items-center justify-center`}
          >
            <svg
              className={`w-6 h-6 text-${color}-500`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={icon}
              />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
