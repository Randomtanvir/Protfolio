"use client";
import React from "react";
import { motion } from "framer-motion";
import ServicesCardInDashboard from "./ServicesCardInDashboard";

const ServiceLists = ({ services, setIsEdit, setService }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          className="group relative"
        >
          {/* Card Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110" />

          {/* Service Card */}

          <ServicesCardInDashboard
            service={service}
            setIsEdit={setIsEdit}
            setService={setService}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceLists;
