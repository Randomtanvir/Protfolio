// app/dashboard/_components/DashboardTable.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const recentActivities = [
  {
    id: 1,
    type: "Project Update",
    description: "Portfolio website redesign completed",
    date: "2 hours ago",
    status: "completed",
  },
  {
    id: 2,
    type: "New Message",
    description: "Client feedback received for UI design",
    date: "5 hours ago",
    status: "new",
  },
  {
    id: 3,
    type: "Task Progress",
    description: "Mobile app development in progress",
    date: "1 day ago",
    status: "in-progress",
  },
  {
    id: 4,
    type: "Analytics",
    description: "Monthly traffic report generated",
    date: "2 days ago",
    status: "completed",
  },
  {
    id: 5,
    type: "Maintenance",
    description: "System updates and security patches",
    date: "3 days ago",
    status: "completed",
  },
];

const statusColors = {
  completed: "bg-green-500/10 text-green-500",
  "in-progress": "bg-yellow-500/10 text-yellow-500",
  new: "bg-blue-500/10 text-blue-500",
};

const DashboardTable = () => {
  return (
    <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200/10 rounded-2xl p-6">
      {/* Table Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Recent Activities
        </h2>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          View All
        </motion.button>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200/10">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Description
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200/10">
            {recentActivities.map((activity, index) => (
              <motion.tr
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="hover:bg-gray-50/5 transition-colors"
              >
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.type}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {activity.description}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.date}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      statusColors[activity.status]
                    }`}
                  >
                    {activity.status.charAt(0).toUpperCase() +
                      activity.status.slice(1)}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="flex items-center justify-between mt-6 border-t border-gray-200/10 pt-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Showing 5 of 20 activities
        </span>
        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Previous
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;