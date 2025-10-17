import { fadeInUp } from "@/utils/animation";
import React from "react";
import { motion } from "framer-motion";

const ContactHeader = () => {
  return (
    <>
      <motion.div {...fadeInUp()} className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wider text-blue-500 dark:text-blue-400 font-semibold mb-3">
          GET IN TOUCH
        </h2>
        <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent">
          Let&apos;s Work Together
        </h3>
      </motion.div>
    </>
  );
};

export default ContactHeader;
