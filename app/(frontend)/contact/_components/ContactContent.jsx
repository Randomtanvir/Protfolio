"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInRight } from "@/utils/animation";
import ContactInfo from "./ContactInfo";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";

const ContactContent = () => {
  return (
    <>
      <motion.div {...fadeInUp()}>
        <ContactHeader />
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactForm />

          {/* Contact Info */}
          <motion.div {...fadeInRight(0.2)} className="relative">
            <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h4>
              <ContactInfo />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactContent;
