"use client";
import { motion } from "framer-motion";
const AboutHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-sm uppercase tracking-wider text-blue-500 dark:text-blue-400 font-semibold mb-3">
        ABOUT ME
      </h2>
      <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent">
        Creative Developer & Designer
      </h3>
    </motion.div>
  );
};

export default AboutHeader;
