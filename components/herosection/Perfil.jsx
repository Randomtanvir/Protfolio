"use client";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Tanvir_img from "@/public/img/home-perfil.png";

const DancingFont = Dancing_Script({
  variable: "--font-DancingFont",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Perfil = ({ profileInfo }) => {
  const socialLinks = [
    { name: "github", url: "#" },
    { name: "linkedin", url: "#" },
    { name: "twitter", url: "#" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1"
    >
      <div
        className="relative bg-zinc-200/50 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20
                min-h-[600px] lg:min-h-[700px] xl:h-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-between h-full py-4"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative md:w-80 sm:w-80 sm:h-[440px] lg:w-[380px] w-60 lg:h-[520px]  h-90 mb-auto group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-2xl" />
            <div className="relative overflow-hidden rounded-full border-4 border-white/20 dark:border-gray-700/20 shadow-lg group-hover:border-blue-500/30 dark:group-hover:border-blue-400/30 transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors duration-500" />
              <Image
                src={profileInfo?.heroImg}
                alt="Tanvir Ahmad"
                width={400}
                height={400}
                className="object-cover transform transition-all duration-700 scale-110 group-hover:scale-125"
                priority
              />
            </div>
          </motion.div>

          {/* Content Container */}
          <div className="mt-auto space-y-6">
            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h2
                className={`${DancingFont.className} text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-2`}
              >
                {profileInfo?.fullName || "Tanvir Ahmad"}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {profileInfo?.profession || "Full Stack Developer"}
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex space-x-4 justify-center"
            >
              {profileInfo?.socialLinks?.map((social, index) => (
                <motion.a
                  key={social?._id}
                  href={social?.username}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{
                      opacity: 1,
                      scale: 1.2,
                      rotate: 180,
                    }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                    }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="relative w-12 h-12 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm flex items-center justify-center border-2 border-white/20 dark:border-gray-700/20 overflow-hidden"
                    whileHover={{
                      borderColor: "rgba(59, 130, 246, 0.5)",
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      {social?.platform && (
                        <img
                          src={social?.platform}
                          alt={social?.platform}
                          width={24}
                          height={24}
                          className="opacity-60 group-hover:opacity-100 transition-all duration-300"
                        />
                      )}
                    </motion.div>
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Perfil;
