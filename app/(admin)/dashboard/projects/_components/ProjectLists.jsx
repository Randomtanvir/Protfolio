"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import ProjectCardInDashboard from "./ProjectCardInDashboard";

const ProjectLists = ({ isEdit, setIsEdit, setProject }) => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing my skills, projects, and experiences with modern UI design.",
      progress: 100,
      status: "complete",
      technologyUrls: [
        { url: "https://react.dev" },
        { url: "https://nextjs.org" },
        { url: "https://tailwindcss.com" },
      ],
      liveLink: "https://tanvir-portfolio.com",
      sourceCode: "https://github.com/tanvir/portfolio",
      image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
    },
    {
      id: 2,
      title: "E-Commerce Store",
      description:
        "A full-featured e-commerce platform with product listings, shopping cart, and Stripe payments.",
      progress: 85,
      status: "working",
      technologyUrls: [
        { url: "https://nodejs.org" },
        { url: "https://expressjs.com" },
        { url: "https://www.postgresql.org" },
      ],
      liveLink: "https://shop-now-demo.com",
      sourceCode: "https://github.com/tanvir/ecommerce-store",
      image: "https://via.placeholder.com/600x400?text=E-commerce+Store",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A Kanban-style task manager with drag-and-drop, team collaboration, and progress tracking.",
      progress: 60,
      status: "working",
      technologyUrls: [
        { url: "https://react.dev" },
        { url: "https://typescriptlang.org" },
        { url: "https://firebase.google.com" },
      ],
      liveLink: "https://taskflow-demo.com",
      sourceCode: "https://github.com/tanvir/taskflow",
      image: "https://via.placeholder.com/600x400?text=Task+Management+App",
    },
  ];
  const handelEdit = (project) => {
    console.log("project to edit:", project);
    setProject(project);
    setIsEdit(true);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <AnimatePresence>
        {projects?.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <ProjectCardInDashboard project={project} onEdit={handelEdit} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProjectLists;
