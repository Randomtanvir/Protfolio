"use client";
import { motion } from "framer-motion";
const Technologies = ({ skillMap }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl filter blur-3xl" />
      <div className="relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 h-full">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Technologies
        </h4>
        <div className="grid gap-4">
          {skillMap.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: rowIndex * 0.1 }}
              className="flex flex-wrap gap-3"
            >
              {row.map((skill, index) => (
                <motion.div
                  key={skill}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                  className="px-4 py-2 bg-gray-100/80 dark:bg-gray-700/50 rounded-full text-sm font-medium text-gray-900 dark:text-white border border-gray-200/50 dark:border-gray-600/20 transition-all duration-200"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
