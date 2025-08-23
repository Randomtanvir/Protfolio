"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const About = () => {
  const skills = [
    {
      name: "Full Stack Developer",
      desc: "Specialized in React & Next.js",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      color: "blue",
    },
    {
      name: "UI/UX Designer",
      desc: "Creating engaging interfaces",
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: "purple",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-2"
    >
      <div
        className="relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20
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
              I am a passionate web developer and designer with a keen eye for
              creating beautiful, functional, and user-centered digital
              experiences. With expertise in both design and development, I
              bridge the gap between aesthetics and functionality.
            </motion.p>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-${skill.color}-500/10 rounded-2xl blur-xl transition-all duration-300 group-hover:bg-${skill.color}-500/20`}
                />
                <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20 dark:border-gray-700/20">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-${skill.color}-500/10 flex items-center justify-center`}
                    >
                      <svg
                        className={`w-6 h-6 text-${skill.color}-500`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={skill.icon}
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

            {/* Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
            >
              <Button className="relative w-full px-8 py-4 font-medium text-white overflow-hidden rounded-xl group/btn">
                {/* Animated Background */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 transition-all duration-700 group-hover/btn:scale-110"
                  style={{
                    backgroundSize: "200% 100%",
                    animation: "gradientShift 8s linear infinite",
                  }}
                />

                {/* Content Container */}
                <div className="relative flex items-center justify-center space-x-3">
                  {/* Text with Shine Effect */}
                  <span className="relative">
                    <span className="relative z-10">Download CV</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-45 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                  </span>

                  {/* Animated Icon */}
                  <motion.div
                    initial={{ y: 0 }}
                    whileHover={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      className="w-5 h-5 transform transition-transform duration-300 group-hover/btn:translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </motion.div>
                </div>
              </Button>
            </motion.div>

            {/* Add keyframes for gradient animation */}
            <style jsx global>{`
              @keyframes gradientShift {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
            `}</style>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
