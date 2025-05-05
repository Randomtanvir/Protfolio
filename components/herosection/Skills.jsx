"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "html",
    "css",
    "javascript",
    "react",
    "next",
    "node",
    "git",
    "github",
    "sass",
    "tailwind-css",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-6 sm:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl transition-all group-hover:blur-2xl" />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-4 flex items-center justify-center border border-white/20 dark:border-gray-700/20 transition-transform group-hover:scale-110 cursor-pointer">
                <img
                  src={`/img/skills-${skill}.svg`}
                  alt={skill}
                  className="w-6 h-6 object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-xs mt-6">
          Visit the projects section to see the work done with these web
          technologies.
        </p>
      </div>
    </motion.div>
  );
};

export default Skills;
