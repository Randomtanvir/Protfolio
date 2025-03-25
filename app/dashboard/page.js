"use client";
import React from "react";
import { motion } from "framer-motion";
import DashboardSidebar from "./_components/DashboardSidebar";
import DashboardStats from "./_components/DashboardStats";
import DashboardCharts from "./_components/DashboardCharts";
import DashboardTable from "./_components/DashboardTable";

const DashboardPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      {/* <div className="absolute inset-0 bg-[url('/serviceBGlight.svg')] dark:bg-[url('/serviceBG.jpg')] bg-cover bg-center opacity-10 dark:opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-indigo-500/10" /> */}

      {/* Dashboard Layout */}
      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <main className="flex-1 p-8 ml-64">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
              >
                Dashboard Overview
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-600 dark:text-gray-300"
              >
                Welcome back! Here's what's happening with your portfolio.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <DashboardStats />
            </motion.div>

            {/* Charts Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
            >
              <DashboardCharts />
            </motion.div>

            {/* Recent Activity Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <DashboardTable />
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;