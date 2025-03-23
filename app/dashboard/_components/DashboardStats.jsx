// components/dashboard/DashboardStats.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    title: "Total Views",
    value: "12.5k",
    change: "+12%",
    icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
    color: "blue"
  },
  {
    title: "Projects",
    value: "25",
    change: "+5",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    color: "purple"
  },
  {
    title: "Messages",
    value: "48",
    change: "+8",
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
    color: "indigo"
  },
  {
    title: "Engagement",
    value: "89%",
    change: "+2.5%",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "pink"
  }
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative group"
        >
          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/20 via-${stat.color}-500/10 to-transparent rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100`} />
          
          {/* Card Content */}
          <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200/10 rounded-2xl p-6 overflow-hidden">
            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl bg-${stat.color}-500/10 flex items-center justify-center mb-4`}>
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
      ))}
    </div>
  );
};

export default DashboardStats;