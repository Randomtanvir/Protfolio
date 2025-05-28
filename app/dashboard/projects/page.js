"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "../_components/DashboardSidebar";
import Image from "next/image";

export default function ProjectsPage() {
  const [isPublished, setIsPublished] = useState(true);
  const [categories] = useState([
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "Frontend",
    "Backend",
    "Full Stack",
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with Next.js and Stripe",
      image: "/project1.jpg",
      technologies: ["Next.js", "React", "Node.js", "MongoDB"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/project",
      category: "Web Development",
      status: "published",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio website with dark mode and animations",
      image: "/project2.jpg",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://portfolio.example.com",
      githubUrl: "https://github.com/example/portfolio",
      category: "Frontend",
      status: "published",
      featured: false,
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Enterprise task management solution with real-time updates",
      image: "/project4.jpg",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/project",
      category: "Web Development",
      status: "published",
      featured: false,
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure and user-friendly mobile banking application",
      image: "/project2.jpg",
      technologies: ["React Native", "Firebase", "Redux"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/project",
      category: "Mobile App",
      status: "published",
      featured: false,
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description: "Secure and user-friendly mobile banking application",
      image: "/project2.jpg",
      technologies: ["React Native", "Firebase", "Redux"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/project",
      category: "Mobile App",
      status: "published",
      featured: false,
    },
  ]);

  const handleAddProject = () => {
    const newProject = {
      id: Date.now(),
      title: "New Project",
      description: "Project description",
      image: "/placeholder.jpg",
      technologies: ["Technology 1", "Technology 2"],
      demoUrl: "",
      githubUrl: "",
      category: categories[0],
      status: "draft",
      featured: false,
    };
    setProjects([...projects, newProject]);
  };

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter((project) => project.id !== projectId));
  };

  const toggleProjectStatus = (projectId) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              status: project.status === "published" ? "draft" : "published",
            }
          : project
      )
    );
  };

  const toggleFeatured = (projectId) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? { ...project, featured: !project.featured }
          : project
      )
    );
  };

  const updateTechnologies = (projectId, technologies) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId ? { ...project, technologies } : project
      )
    );
  };

  const filteredProjects = projects.filter((project) =>
    isPublished ? project.status === "published" : project.status === "draft"
  );

  return (
    <div className="min-h-screen mt-10">
      <DashboardSidebar />

      <div className="lg:ml-64 min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="w-full sm:w-auto">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Projects
              </h1>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Manage your portfolio projects
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                onClick={() => setIsPublished(!isPublished)}
                variant="outline"
                className="w-full sm:w-auto"
              >
                {isPublished ? "View Drafts" : "View Published"}
              </Button>

              <Button
                onClick={handleAddProject}
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white"
              >
                Add New Project
              </Button>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button
                        onClick={() => toggleFeatured(project.id)}
                        className={`p-2 rounded-lg backdrop-blur-lg ${
                          project.featured
                            ? "bg-yellow-500/90 text-white"
                            : "bg-white/90 text-gray-700"
                        }`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="p-2 rounded-lg bg-white/90 backdrop-blur-lg text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="p-4 space-y-4">
                    <div>
                      <input
                        className="w-full text-lg font-semibold text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                        value={project.title}
                        onChange={(e) => {
                          const updatedProjects = [...projects];
                          const projectIndex = updatedProjects.findIndex(
                            (p) => p.id === project.id
                          );
                          updatedProjects[projectIndex].title = e.target.value;
                          setProjects(updatedProjects);
                        }}
                      />
                      <textarea
                        className="w-full mt-2 text-sm text-gray-600 dark:text-gray-400 bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all resize-none"
                        value={project.description}
                        rows={2}
                        onChange={(e) => {
                          const updatedProjects = [...projects];
                          const projectIndex = updatedProjects.findIndex(
                            (p) => p.id === project.id
                          );
                          updatedProjects[projectIndex].description =
                            e.target.value;
                          setProjects(updatedProjects);
                        }}
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm text-gray-500 dark:text-gray-400">
                          Technologies
                        </label>
                        <button
                          onClick={() => {
                            const updatedProjects = [...projects];
                            const projectIndex = updatedProjects.findIndex(
                              (p) => p.id === project.id
                            );
                            updatedProjects[projectIndex].technologies = [
                              ...project.technologies,
                              "New Tech",
                            ];
                            setProjects(updatedProjects);
                          }}
                          className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          + Add Tech
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="group/tech inline-flex items-center"
                          >
                            <input
                              className="text-sm text-gray-600 dark:text-gray-400 bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                              value={tech}
                              onChange={(e) => {
                                const updatedTech = [...project.technologies];
                                updatedTech[techIndex] = e.target.value;
                                updateTechnologies(project.id, updatedTech);
                              }}
                            />
                            <button
                              onClick={() => {
                                const updatedTech = project.technologies.filter(
                                  (_, i) => i !== techIndex
                                );
                                updateTechnologies(project.id, updatedTech);
                              }}
                              className="opacity-0 group-hover/tech:opacity-100 ml-1 p-1 hover:text-red-500 transition-opacity"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-500 dark:text-gray-400">
                          Demo URL
                        </label>
                        <input
                          className="w-full text-sm text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                          value={project.demoUrl}
                          type="url"
                          onChange={(e) => {
                            const updatedProjects = [...projects];
                            const projectIndex = updatedProjects.findIndex(
                              (p) => p.id === project.id
                            );
                            updatedProjects[projectIndex].demoUrl =
                              e.target.value;
                            setProjects(updatedProjects);
                          }}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-500 dark:text-gray-400">
                          GitHub URL
                        </label>
                        <input
                          className="w-full text-sm text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                          value={project.githubUrl}
                          type="url"
                          onChange={(e) => {
                            const updatedProjects = [...projects];
                            const projectIndex = updatedProjects.findIndex(
                              (p) => p.id === project.id
                            );
                            updatedProjects[projectIndex].githubUrl =
                              e.target.value;
                            setProjects(updatedProjects);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
