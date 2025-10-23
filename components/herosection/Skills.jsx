"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = ({ profileInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="relative bg-zinc-200/50 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Skills
        </h2>
        <div
          className="
    grid grid-cols-4 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-5
    gap-4 sm:gap-6
    place-items-center
    transition-colors duration-300
  "
        >
          {profileInfo?.skills?.length > 0 &&
            profileInfo?.skills?.map((skill, index) => (
              <motion.div
                key={skill?._id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl transition-all group-hover:blur-2xl" />
                <div
                  className="
    relative w-8 h-8 flex items-center justify-center rounded-full
    bg-green-500/10 dark:bg-green-400/10
    ring-1 ring-green-500/20 dark:ring-green-400/20
    backdrop-blur-md transition-colors duration-300
  "
                >
                  <img
                    src={skill?.url || `/img/skills/${skill}.svg`}
                    alt={skill?.name}
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
