import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllMessages } from "@/utils/message";
const stat = {
  title: "Messages",
  value: "48",
  change: "+8",
  icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
  color: "indigo",
};

const MessageAnalytics = () => {
  const [messages, setMessages] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data, total } = await getAllMessages();
        setMessages(data);
        setTotal(total);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStats();
  }, [setMessages, setTotal]);

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
            {total -
              messages?.filter((m) => {
                return !m.read;
              }).length || 0}
          </span>
          <span className={`text-sm font-medium text-${stat.color}-500`}>
            +
            {messages?.filter((m) => {
              return !m.read;
            }).length || 0}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default MessageAnalytics;
