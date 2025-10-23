"use client";
import React from "react";
import { motion } from "framer-motion";
import ServicesCardInDashboard from "./ServicesCardInDashboard";
// Import necessary icons including Edit, Trash, and Check for status
import { Headset } from "lucide-react";

const ServiceLists = ({ services, setIsEdit, setService }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center"
    >
      {services?.length > 0 &&
        services?.map((service, i) => (
          <ServicesCardInDashboard
            setIsEdit={setIsEdit}
            setService={setService}
            key={service._id || i}
            service={service}
          />
        ))}
    </motion.div>
  );
};

export default ServiceLists;
