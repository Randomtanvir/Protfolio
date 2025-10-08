"use client";
import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";
import { getAllProjects } from "@/utils/project";

const stat = {
  title: "Projects",
  value: "25",
  change: "+5",
  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  color: "purple",
};

const ProjectsAnalytics = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const project = await getAllProjects();
        setProject(project);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStats();
  }, [setProject]);

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
            {project?.filter((p) => {
              return p.status === "complete";
            }).length || 0}
          </span>
          <span className={`text-sm font-medium text-${stat.color}-500`}>
            +
            {project?.filter((p) => {
              return p.status === "working";
            }).length || 0}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsAnalytics;
