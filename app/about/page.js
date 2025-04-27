"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  {
    name: "UI Design",
    level: "90%",
    color: "bg-gradient-to-r from-blue-500 to-blue-400",
  },
  {
    name: "Product Design",
    level: "80%",
    color: "bg-gradient-to-r from-purple-500 to-purple-400",
  },
  {
    name: "User Research",
    level: "85%",
    color: "bg-gradient-to-r from-indigo-500 to-indigo-400",
  },
  {
    name: "Coding",
    level: "60%",
    color: "bg-gradient-to-r from-cyan-500 to-cyan-400",
  },
  {
    name: "No Code Tools",
    level: "65%",
    color: "bg-gradient-to-r from-teal-500 to-teal-400",
  },
];

const skillMap = [
  ["HTML", "CSS", "JAVASCRIPT", "REACT", "NEXT.JS"],
  ["NODE", "EXPRESS", "REST API", "POSTGRES"],
  ["TAILWIND CSS", "FRAMER MOTION", "TYPESCRIPT"],
  ["UI/UX DESIGN", "PRODUCT DESIGN", "FIGMA", "ADOBE XD"],
  ["UI/UX", "PRODUCT DESIGN", "FIGMA", "ADOBE XD"],
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-sm uppercase tracking-wider text-blue-500 dark:text-blue-400 font-semibold mb-3">
                ABOUT ME
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent">
                Creative Developer & Designer
              </h3>
            </motion.div>

            {/* About Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl filter blur-3xl" />
                <div className="relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-gray-700/20">
                  <div className="aspect-square relative rounded-2xl overflow-hidden">
                    <Image
                      src="/img/about-perfil.png"
                      alt="Profile"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20">
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                  >
                    Hi, I'm Tanvir Ahmad
                  </motion.h4>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                  >
                    A passionate web developer and designer with a keen eye for
                    creating beautiful, functional, and user-centered digital
                    experiences. With a background in both design and
                    development, I bridge the gap between aesthetics and
                    functionality.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">
                          Experience
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          3+ years of web development
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-purple-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">
                          Education
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          B.Sc in Computer Science
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-indigo-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">
                          Location
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Dhaka, Bangladesh
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full filter blur-3xl"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-sm uppercase tracking-wider text-blue-500 dark:text-blue-400 font-semibold mb-3">
                MY SKILLSET
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent">
                Web Design & Development
              </h3>
            </motion.div>

            {/* Progress Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="space-y-8 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Core Skills
                </h4>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-900 dark:text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full ${skill.color} rounded-full shadow-lg`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skill Map */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl filter blur-3xl" />
                <div className="relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 h-full">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Technologies
                  </h4>
                  <div className="grid gap-4">
                    {skillMap.map((row, rowIndex) => (
                      <motion.div
                        key={rowIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: rowIndex * 0.1 }}
                        className="flex flex-wrap gap-3"
                      >
                        {row.map((skill, index) => (
                          <motion.div
                            key={skill}
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "rgba(59, 130, 246, 0.1)",
                            }}
                            className="px-4 py-2 bg-gray-100/80 dark:bg-gray-700/50 rounded-full text-sm font-medium text-gray-900 dark:text-white border border-gray-200/50 dark:border-gray-600/20 transition-all duration-200"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "figma",
                "react",
                "next",
                "node",
                "javascript",
                "typescript",
              ].map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl transition-all group-hover:blur-2xl" />
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-4 flex items-center justify-center border border-white/20 dark:border-gray-700/20 transition-transform group-hover:scale-110 cursor-pointer">
                    <Image
                      src={`/img/skills-${tool}.svg`}
                      alt={tool}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full filter blur-3xl"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
