"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

const BackgroundElements = () => {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          {...fadeInUp()}
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"
        />
        <motion.div
          {...fadeInUp(0.3)}
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full filter blur-3xl"
        />
      </div>
    </>
  );
};

export default BackgroundElements;
