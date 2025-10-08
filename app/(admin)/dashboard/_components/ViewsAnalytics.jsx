"use client";
import React from "react";
import { motion } from "framer-motion";

const stat = {
  title: "Total Views",
  value: "12.5k",
  change: "+12%",
  icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
  color: "blue",
};

const ViewsAnalytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
    >
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/20 via-${stat.color}-500/10 to-transparent rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100`}
      />

      {/* Card Content */}
      <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200/10 rounded-2xl p-6 overflow-hidden">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl bg-${stat.color}-500/10 flex items-center justify-center mb-4`}
        >
          <svg
            className={`w-6 h-6 text-${stat.color}-500`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={stat.icon}
            />
          </svg>
        </div>

        {/* Stats */}
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
          {stat.title}
        </h3>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {stat.value}
          </span>
          <span className={`text-sm font-medium text-${stat.color}-500`}>
            {stat.change}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewsAnalytics;
