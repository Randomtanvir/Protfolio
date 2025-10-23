"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-200 dark:from-gray-900 dark:to-gray-950 text-center px-6 overflow-hidden">
      {/* Floating Background Animation (behind content) */}
      <motion.div
        className="absolute bottom-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-400/10 blur-3xl rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ zIndex: 0, pointerEvents: "none" }} // 👈 prevents blocking clicks
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Floating Illustration */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-40 h-40"
          >
            <circle cx="100" cy="100" r="80" fill="#6366f1" opacity="0.15" />
            <path
              d="M60 100h80M100 60v80"
              stroke="#6366f1"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* 404 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-500 dark:text-gray-400 max-w-md mb-8"
        >
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </motion.p>

        {/* Back Home Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
