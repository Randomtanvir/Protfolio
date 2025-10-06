"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import ProjectCardInDashboard from "./ProjectCardInDashboard";

const ProjectLists = ({ setIsEdit, setProject, projects }) => {
  const handelEdit = (project) => {
    setProject(project);
    setIsEdit(true);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <AnimatePresence>
        {projects?.map((project) => (
          <motion.div
            key={project?._id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <ProjectCardInDashboard project={project} onEdit={handelEdit} />
          </motion.div>
        ))}
        {projects?.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
            No projects found. Please add a new project.
          </p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectLists;
