"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardSidebar from "../_components/DashboardSidebar";
import ProjectCard from "./_components/ProjectCard";
import ProjectFilter from "./_components/ProjectFilter";
import ProjectForm from "./_components/ProjectForm";

// Initial projects data (later this would come from an API/database)
const initialProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with advanced features and modern UI",
    image: "/project1.jpg",
    category: "Web Development",
    progress: 85,
    status: "in-progress",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    team: [
      { name: "John Doe", avatar: "/avatar1.jpg" },
      { name: "Jane Smith", avatar: "/avatar2.jpg" },
    ],
    deadline: "2024-04-15",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application",
    image: "/project2.jpg",
    category: "Mobile App",
    progress: 100,
    status: "completed",
    tech: ["React Native", "Firebase", "Redux"],
    team: [
      { name: "Mike Johnson", avatar: "/avatar3.jpg" },
      { name: "Sarah Wilson", avatar: "/avatar4.jpg" },
    ],
    deadline: "2024-03-30",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio website with modern design and animations",
    image: "/project3.jpg",
    category: "UI/UX Design",
    progress: 60,
    status: "in-progress",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    team: [
      { name: "Alex Brown", avatar: "/avatar5.jpg" },
    ],
    deadline: "2024-04-10",
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Enterprise task management solution with real-time updates",
    image: "/project4.jpg",
    category: "Web Development",
    progress: 30,
    status: "in-progress",
    tech: ["Vue.js", "Express", "PostgreSQL"],
    team: [
      { name: "Chris Lee", avatar: "/avatar6.jpg" },
      { name: "Emma Davis", avatar: "/avatar7.jpg" },
    ],
    deadline: "2024-05-01",
  },
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  // Filter projects based on status and search query
  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.status === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Handle project creation/update
  const handleProjectSubmit = (projectData) => {
    if (editingProject) {
      // Update existing project
      setProjects(projects.map(p => 
        p.id === projectData.id ? projectData : p
      ));
      setEditingProject(null);
    } else {
      // Add new project
      setProjects([...projects, projectData]);
    }
    setShowForm(false);
  };

  // Handle project deletion
  const handleProjectDelete = (projectId) => {
    setProjects(projects.filter(p => p.id !== projectId));
  };

  // Handle project status update
  const handleStatusUpdate = (projectId, newStatus) => {
    setProjects(projects.map(p => 
      p.id === projectId ? { ...p, status: newStatus } : p
    ));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/serviceBGlight.svg')] dark:bg-[url('/serviceBG.jpg')] bg-cover bg-center opacity-10 dark:opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-indigo-500/10" />

      {/* Layout */}
      <div className="flex">
        <DashboardSidebar />

        {/* Main Content */}
        <main className="flex-1 p-8 ml-64">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Projects
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Manage and track your ongoing projects
                </p>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setEditingProject(null);
                  setShowForm(true);
                }}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors"
              >
                New Project
              </motion.button>
            </div>

            {/* Project Form Modal */}
            <AnimatePresence>
              {showForm && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                  <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                    <ProjectForm
                      project={editingProject}
                      onSubmit={handleProjectSubmit}
                      onCancel={() => {
                        setShowForm(false);
                        setEditingProject(null);
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Filters */}
            <ProjectFilter
              filter={filter}
              setFilter={setFilter}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            {/* Projects Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  delay={index * 0.1}
                  onEdit={() => {
                    setEditingProject(project);
                    setShowForm(true);
                  }}
                  onDelete={() => handleProjectDelete(project.id)}
                  onStatusUpdate={(newStatus) => handleStatusUpdate(project.id, newStatus)}
                />
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-500 dark:text-gray-400">
                  No projects found. Create a new project to get started!
                </p>
              </motion.div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default ProjectsPage;