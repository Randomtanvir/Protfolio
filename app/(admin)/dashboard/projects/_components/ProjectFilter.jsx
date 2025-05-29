// app/dashboard/projects/_components/ProjectFilter.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const filters = [
  { label: "All", value: "all" },
  { label: "In Progress", value: "in-progress" },
  { label: "Completed", value: "completed" },
  { label: "On Hold", value: "on-hold" },
];

const ProjectFilter = ({ filter, setFilter, searchQuery, setSearchQuery }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200/10 rounded-2xl p-4">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {filters.map((item) => (
          <motion.button
            key={item.value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(item.value)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filter === item.value
                ? "bg-blue-500 text-white"
                : "bg-gray-100/10 text-gray-600 dark:text-gray-300 hover:bg-gray-100/20"
            }`}
          >
            {item.label}
          </motion.button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative w-full md:w-64">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search projects..."
          className="w-full px-4 py-2 bg-white/5 border border-gray-200/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          className="absolute right-3 top-2.5 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProjectFilter;