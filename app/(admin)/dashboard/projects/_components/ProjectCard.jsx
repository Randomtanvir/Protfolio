"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ project, delay, onEdit, onDelete, onStatusUpdate }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState(false);

  const statusColors = {
    "completed": "bg-green-500/10 text-green-500",
    "in-progress": "bg-blue-500/10 text-blue-500",
    "on-hold": "bg-yellow-500/10 text-yellow-500",
    "draft": "bg-gray-500/10 text-gray-500"
  };

  const statusOptions = [
    { value: "draft", label: "Draft" },
    { value: "in-progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
    { value: "on-hold", label: "On Hold" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200/10 rounded-2xl overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {project.title}
            </h3>
            <div className="relative">
              <button
                onClick={() => setShowStatusMenu(!showStatusMenu)}
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  statusColors[project.status]
                } hover:opacity-80 transition-opacity`}
              >
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Status Menu */}
              <AnimatePresence>
                {showStatusMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-40 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200/10 z-10"
                  >
                    {statusOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          onStatusUpdate(option.value);
                          setShowStatusMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm ${
                          option.value === project.status
                            ? "bg-blue-500/10 text-blue-500"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/10"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Actions Menu */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </motion.button>

            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200/10 z-10"
                >
                  <button
                    onClick={() => {
                      onEdit();
                      setShowMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100/10"
                  >
                    Edit Project
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this project?")) {
                        onDelete();
                      }
                      setShowMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-500/10"
                  >
                    Delete Project
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Progress
            </span>
            <span className="text-sm font-medium text-blue-500">
              {project.progress}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${project.progress}%` }}
              transition={{ duration: 1, delay: delay + 0.3 }}
              className="h-full bg-blue-500 rounded-full"
            />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gray-100/10 text-gray-600 dark:text-gray-300 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Team & Deadline */}
        <div className="flex justify-between items-center">
          <div className="flex -space-x-2">
            {project.team.map((member, index) => (
              <Image
                key={index}
                src={member.avatar}
                alt={member.name}
                width={32}
                height={32}
                className="rounded-full border-2 border-white dark:border-gray-800"
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Due {new Date(project.deadline).toLocaleDateString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;