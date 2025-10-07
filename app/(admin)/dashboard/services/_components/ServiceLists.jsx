"use client";
import React from "react";
import { motion } from "framer-motion";
import ServicesCardInDashboard from "./ServicesCardInDashboard";
import { useState } from "react";
// Import necessary icons including Edit, Trash, and Check for status
import {
  Headset,
  Crown,
  TrendingUp,
  ArrowRight,
  Pencil,
  Trash2,
  Anchor,
  CheckCircle,
  XCircle,
} from "lucide-react";

const ServiceLists = ({ services, setIsEdit, setService }) => {
  const servicesData = [
    {
      id: 1,
      title: "Customer Service",
      description:
        "Customer support that helps them have an easy and enjoyable experience with you.",
      icon: <Headset />,
      iconColor: "#a855f7", // Purple
      initialStatus: true,
    },
    {
      id: 2,
      title: "Simple Interface",
      description:
        "Easily manage your products within the admin. Upload your own images or use our free stock photos.",
      icon: <Headset />,
      iconColor: "#f97316", // Orange
      initialStatus: false,
      skills: ["React", "Next.js", "Node.js", "MongoDB"],
      status: "active",
    },
    {
      id: 3,
      title: "Business Tools",
      description:
        "Keep track of the status on all orders. Analyze your order history to build better customer relations.",
      icon: <Headset />,
      iconColor: "#10b981", // Emerald Green
      initialStatus: true,
      skills: ["React", "Next.js", "Node.js", "MongoDB"],
    },
    {
      id: 4,
      title: "Secure Hosting",
      description:
        "Reliable and secure hosting solutions ensuring your applications are always up and running.",
      icon: <Headset />, // Using Crown again as an example
      iconColor: "#f97316", // Orange
      initialStatus: true,
    },
  ];
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    //   {services.map((service, index) => (
    //     <motion.div
    //       key={service._id}
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       exit={{ opacity: 0, y: -20 }}
    //       transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
    //       className="group relative"
    //     >
    //       {/* Card Glow Effect */}
    //       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110" />

    //       {/* Service Card */}

    //       <ServicesCardInDashboard
    //         service={service}
    //         setIsEdit={setIsEdit}
    //         setService={setService}
    //       />
    //     </motion.div>
    //   ))}
    // </div>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center"
    >
      {services?.map((service, i) => (
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
