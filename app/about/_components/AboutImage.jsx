"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl filter blur-3xl" />
      <div className="relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-gray-700/20">
        <div className="aspect-square relative rounded-2xl overflow-hidden">
          <Image
            src="/img/about-perfil.png"
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutImage;
