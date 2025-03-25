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
    "Full Stack"
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
      featured: true
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
      featured: false
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
      featured: false
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
      featured: false
    }
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
      featured: false
    };
    setProjects([...projects, newProject]);
  };

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter(project => project.id !== projectId));
  };

  const toggleProjectStatus = (projectId) => {
    setProjects(projects.map(project => 
      project.id === projectId 
        ? { ...project, status: project.status === "published" ? "draft" : "published" }
        : project
    ));
  };

  const toggleFeatured = (projectId) => {
    setProjects(projects.map(project => 
      project.id === projectId 
        ? { ...project, featured: !project.featured }
        : project
    ));
  };

  const updateTechnologies = (projectId, technologies) => {
    setProjects(projects.map(project =>
      project.id === projectId ? { ...project, technologies } : project
    ));
  };

  const filteredProjects = projects.filter(project => 
    isPublished ? project.status === "published" : project.status === "draft"
  );

  return (
    <div className="min-h-screen">
      <DashboardSidebar />
      
      <div className="ml-64 min-h-screen p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                Projects
              </h1>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Manage your portfolio projects
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleAddProject}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add New Project
              </button>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {isPublished ? 'Published' : 'Draft'}
                </span>
                <button
                  onClick={() => setIsPublished(!isPublished)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${
                    isPublished ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                      isPublished ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        onClick={() => toggleProjectStatus(project.id)}
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                      >
                        {project.status === "published" ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                          </svg>
                        )}
                      </button>
                      <button
                        onClick={() => toggleFeatured(project.id)}
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                      >
                        <svg className={`w-5 h-5 ${project.featured ? 'text-yellow-400' : 'text-white'}`} fill={project.featured ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="p-2 bg-white/10 hover:bg-red-500 rounded-full text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <input
                        className="text-xl font-semibold text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                        value={project.title}
                        onChange={(e) => {
                          const updatedProjects = [...projects];
                          const projectIndex = updatedProjects.findIndex(p => p.id === project.id);
                          updatedProjects[projectIndex].title = e.target.value;
                          setProjects(updatedProjects);
                        }}
                      />
                      <select
                        className="text-sm font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-none focus:ring-2 focus:ring-blue-500"
                        value={project.category}
                        onChange={(e) => {
                          const updatedProjects = [...projects];
                          const projectIndex = updatedProjects.findIndex(p => p.id === project.id);
                          updatedProjects[projectIndex].category = e.target.value;
                          setProjects(updatedProjects);
                        }}
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    <textarea
                      className="w-full text-sm text-gray-600 dark:text-gray-400 bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none resize-none transition-all"
                      value={project.description}
                      rows={2}
                      onChange={(e) => {
                        const updatedProjects = [...projects];
                        const projectIndex = updatedProjects.findIndex(p => p.id === project.id);
                        updatedProjects[projectIndex].description = e.target.value;
                        setProjects(updatedProjects);
                      }}
                    />

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Technologies:</span>
                        <button
                          onClick={() => {
                            const updatedProjects = [...projects];
                            const projectIndex = updatedProjects.findIndex(p => p.id === project.id);
                            updatedProjects[projectIndex].technologies.push("New Tech");
                            setProjects(updatedProjects);
                          }}
                          className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          + Add Tech
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="group/tech inline-flex items-center">
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
                                const updatedTech = project.technologies.filter((_, i) => i !== techIndex);
                                updateTechnologies(project.id, updatedTech);
                              }}
                              className="opacity-0 group-hover/tech:opacity-100 ml-1 p-1 hover:text-red-500 transition-opacity"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-500 dark:text-gray-400">Demo URL</label>
                        <input
                          className="w-full text-sm text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                          value={project.demoUrl}
                          type="url"
                          onChange={(e) => {
                            const updatedProjects = [...projects];
                            const projectIndex = updatedProjects.findIndex(p => p.id === project.id);
                            updatedProjects[projectIndex].demoUrl = e.target.value;
                            setProjects(updatedProjects);
                          }}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-500 dark:text-gray-400">GitHub URL</label>
                        <input
                          className="w-full text-sm text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                          value={project.githubUrl}
                          type="url"
                          onChange={(e) => {
                            const updatedProjects = [...projects];
                            const projectIndex = updatedProjects.findIndex(p => p.id === project.id);
                            updatedProjects[projectIndex].githubUrl = e.target.value;
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