"use client";
import React from "react";
import { motion } from "framer-motion";
import ServicesCardInDashboard from "./ServicesCardInDashboard";

const ServiceLists = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Building responsive and performant web applications with modern frameworks and best practices.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      skills: ["React", "Next.js", "Node.js", "MongoDB"],
      status: "active",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.",
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      skills: ["Figma", "Adobe XD", "Tailwind CSS", "Material UI"],
      status: "active",
    },
    {
      id: 3,
      title: "Mobile Development",
      description:
        "Developing cross-platform mobile applications with modern technologies and native performance.",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      status: "draft",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          className="group relative"
        >
          {/* Card Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110" />

          {/* Service Card */}

          <ServicesCardInDashboard service={service} />
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceLists;
