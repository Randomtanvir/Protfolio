import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
const InfoCard = ({ color, icon, label, value }) => {
  return (
    <>
      <motion.div {...fadeInUp(0.3)} className="flex items-center space-x-4">
        <div
          className={`w-12 h-12 rounded-full bg-${color}-500/10 flex items-center justify-center`}
        >
          <svg
            className={`w-6 h-6 text-${color}-500`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={icon}
            />
          </svg>
        </div>
        <div>
          <h5 className="text-sm text-gray-600 dark:text-gray-400">{label}</h5>
          <p className="text-gray-900 dark:text-white">{value}</p>
        </div>
      </motion.div>
    </>
  );
};

export default InfoCard;
