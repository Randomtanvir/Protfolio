"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { getAdminInfo } from "@/utils/admin";

export default function ResumeDownloader() {
  const [resumeUrl, setResumeUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const getAdmin = async () => {
      try {
        const admin = (await getAdminInfo()) || {};
        if (isMounted) setResumeUrl(admin?.resume || "");
      } catch (err) {
        console.error(err);
      }
    };

    getAdmin();

    return () => {
      isMounted = false; // cleanup flag
    };
  }, []);

  const handleDownload = async () => {
    if (!resumeUrl) return;

    setLoading(true);
    try {
      // Fetch the file as blob
      const response = await fetch(resumeUrl);
      const blob = await response.blob();

      // Create a temporary link to download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;

      // Set a default file name
      a.download = "Resume.pdf";

      document.body.appendChild(a);
      a.click();

      // Cleanup
      a.remove();
      window.URL.revokeObjectURL(url);
      toast.success("Download");
    } catch (err) {
      console.error("Download error:", err);
      alert("Failed to download resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="relative group"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

      {/* Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 15,
        }}
      >
        <Button
          onClick={handleDownload}
          disabled={loading || !resumeUrl}
          className="relative w-full px-8 py-4 font-medium text-white overflow-hidden rounded-xl group/btn"
        >
          {/* Animated Background */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 transition-all duration-700 group-hover/btn:scale-110"
            style={{
              backgroundSize: "200% 100%",
              animation: "gradientShift 8s linear infinite",
            }}
          />

          {/* Content Container */}
          <div className="relative flex items-center justify-center space-x-3">
            {/* Text with Shine Effect */}
            <span className="relative">
              <span className="relative z-10">
                {loading ? "Downloading..." : "Download CV"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-45 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
            </span>

            {/* Animated Icon */}
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: [0, -4, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                className="w-5 h-5 transform transition-transform duration-300 group-hover/btn:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </motion.div>
          </div>
        </Button>
      </motion.div>

      {/* Add keyframes for gradient animation */}
      <style jsx global>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
}
