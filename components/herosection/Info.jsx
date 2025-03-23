"use client"
import React from "react";
import { motion } from "framer-motion";

const Info = () => {
  const stats = [
    { label: "Years of experience", value: "3+", color: "from-blue-500 to-blue-600" },
    { label: "Completed Projects", value: "20+", color: "from-purple-500 to-purple-600" },
    { label: "Companies Worked", value: "05+", color: "from-indigo-500 to-indigo-600" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1"
    >
      <div className="relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-8">
            Experience Overview
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-5 dark:opacity-10 rounded-2xl blur-xl transition-all duration-300 group-hover:opacity-10 dark:group-hover:opacity-20`} />
                  <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 transition-transform duration-300 hover:translate-x-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {stat.label}
                      </p>
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Info;
