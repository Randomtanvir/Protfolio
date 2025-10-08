"use client";
import React from "react";
import { motion } from "framer-motion";

const Pagination = ({
  currentPage,
  totalPages,
  totalCount,
  onPageChange,
  limit,
}) => {
  const startItem = totalCount === 0 ? 0 : (currentPage - 1) * limit + 1;
  const endItem = Math.min(currentPage * limit, totalCount);

  return (
    <div className="flex items-center justify-between mt-6 border-t border-gray-200/10 pt-4">
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Showing {startItem}–{endItem} of {totalCount} messages
      </span>

      <div className="flex space-x-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            currentPage <= 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
          }`}
        >
          Previous
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages || totalPages === 0}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            currentPage >= totalPages || totalPages === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
          }`}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};

export default Pagination;
