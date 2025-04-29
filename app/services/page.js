import React from "react";
import ServicesCenterContent from "@/components/services/ServicesCenterContent";
import ScrollArrow from "@/components/services/ScrollArrow";
import ServicesBody from "./_components/ServicesBody";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and performant web applications with modern frameworks and best practices.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    skills: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    skills: ["Figma", "Adobe XD", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications with modern technologies and native performance.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    skills: ["React Native", "Flutter", "iOS", "Android"],
  },
];

const ServicesPage = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"> */}
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/serviceBGlight.svg')] bg-cover bg-center opacity-10 dark:opacity-20" />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-indigo-500/10" /> */}
      <ServicesCenterContent />
      <ScrollArrow />
      <ServicesBody services={services} />
    </section>
  );
};

export default ServicesPage;
