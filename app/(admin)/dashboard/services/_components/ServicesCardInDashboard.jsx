"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";

const ServicesCardInDashboard = ({ service }) => {
  const [isDraft, setIsDraft] = useState(service?.status === "draft");

  return (
    <div className="relative group rounded-2xl p-8 overflow-hidden border border-black/10 dark:border-white/10 backdrop-blur-sm bg-white/70 dark:bg-gray-900/60">
      {/* Toggle Switch in top-right */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <Switch
          id={`status-${service.id}`}
          className="z-10"
          checked={!isDraft}
          onCheckedChange={(checked) => setIsDraft(!checked)}
        />
        <label
          htmlFor={`status-${service.id}`}
          className="text-sm text-gray-700 dark:text-gray-300"
        >
          {isDraft ? "Draft" : "Active"}
        </label>
      </div>

      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 dark:from-white/10 dark:to-white/5" />

      {/* Icon Container */}
      <div className="relative mb-6">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-20 group-hover:opacity-30 blur-lg transition-opacity" />
        <div className="relative bg-white/10 dark:bg-white/5 rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg
            className="w-8 h-8 text-blue-500 dark:text-blue-400 transition-colors group-hover:text-blue-400 dark:group-hover:text-blue-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={service.icon}
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          {service.description}
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2">
          {service.skills.map((skill, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-indigo-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
    </div>
  );
};

export default ServicesCardInDashboard;
