import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllServices } from "@/utils/service";
const stat = {
  title: "Services",
  value: "89%",
  change: "+2.5%",
  icon: "M13 10V3L4 14h7v7l9-11h-7z",
  color: "pink",
};

const ServiceAnalytics = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const services = await getAllServices();
        setServices(services);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStats();
  }, [setServices]);
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
            {services?.length -
              services?.filter((s) => {
                return s.status === "draft";
              }).length || 0}
          </span>
          <span className={`text-sm font-medium text-${stat.color}-500`}>
            +
            {services?.filter((s) => {
              return s.status === "draft";
            }).length || 0}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceAnalytics;
