"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, X } from "lucide-react";
import { set } from "lodash";
import toast from "react-hot-toast";

const MessageReadModal = ({ activity, isOpen, onClose }) => {
  useEffect(() => {
    const ReaedMessage = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/message/${activity._id}`,
          { method: "PATCH" }
        );
        const result = await res.json();
        if (result.success) {
          console.log("Message marked as read");
        } else {
          console.log("Failed to mark message as read");
        }
      } catch (error) {
        console.log("Error marking message as read:", error);
      }
    };
    if (isOpen && activity && !activity.read) {
      ReaedMessage();
    }
  }, [isOpen, activity]); // Run effect when isOpen or activity changes

  const handleclickDelete = async () => {
    if (!activity || !activity._id) return;
    try {
      if (!confirm("Are you sure you want to delete this message?")) {
        return;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/message/${activity._id}`,
        { method: "DELETE" }
      );
      const result = await res.json();
      if (result.success) {
        toast.success("Message deleted successfully");
        onClose(activity._id); // Pass the deleted message ID back to parent
      } else {
        toast.error("Failed to delete message");
      }
    } catch (error) {
      console.log("Error deleting message:", error);
      toast.error("Error deleting message");
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Modal box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md max-h-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 border border-gray-200/20 overflow-y-auto"
          style={{ scrollbarGutter: "stable" }} // optional: prevent layout shift when scrollbar appears
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Message Details
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              View full message information
            </p>
          </div>

          {/* Message Content */}
          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                Name
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-200 font-medium">
                {activity?.name || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                Email
              </p>
              <p className="text-sm text-gray-900 dark:text-gray-200 font-medium">
                {activity?.email || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                Message
              </p>
              <div className="text-sm text-gray-800 dark:text-gray-300 bg-gray-100/40 dark:bg-gray-800/40 border border-gray-200/10 rounded-lg p-3">
                {activity?.message || "No message content"}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex gap-2 justify-end">
            <button
              onClick={handleclickDelete}
              className="px-4 py-2 flex justify-center items-center gap-1 rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-700 transition-colors"
            >
              <Trash2 size={15} /> Delete Message
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MessageReadModal;
