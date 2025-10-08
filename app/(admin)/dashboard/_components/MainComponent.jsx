"use client";
import React from "react";
import { motion } from "framer-motion";
import DashboardStats from "./DashboardStats";
import DashboardCharts from "./DashboardCharts";
import DashboardTable from "./DashboardTable";

const MainComponent = () => {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-64">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="mb-6 lg:mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2"
            >
              Dashboard Overview
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-300"
            >
              Welcome back! Here&apos;s what&apos;s happening with your
              portfolio.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 lg:mb-8"
          >
            <DashboardStats />
          </motion.div>

          {/* Charts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 lg:mb-8"
          >
            <DashboardCharts />
          </motion.div>

          {/* Recent Activity Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="overflow-x-auto"
          >
            <DashboardTable />
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default MainComponent;
