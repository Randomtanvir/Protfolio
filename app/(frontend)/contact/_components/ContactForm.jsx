"use client";
import { fadeInLeft } from "@/utils/animation";
import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.success) {
        toast.success(res.message || "Message sent successfuly");
        reset();
      } else {
        toast.error("somethint went wrong");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <motion.div {...fadeInLeft()} className="relative">
      <div className="relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border ${
                errors.name ? "border-red-500" : ""
              } focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none text-gray-900 dark:text-white`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border ${
                errors.email ? "border-red-500" : ""
              } focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none text-gray-900 dark:text-white`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Your message..."
              {...register("message", { required: "Message is required" })}
              className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border ${
                errors.message ? "border-red-500" : ""
              } focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none text-gray-900 dark:text-white resize-none`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Send Button */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-indigo-600/30 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full px-8 py-4 rounded-xl text-white font-medium 
             bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
             hover:from-blue-500 hover:to-purple-500 
             border border-white/10 shadow-md
             disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>

                {!isSubmitting && (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </motion.svg>
                )}
              </div>
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
