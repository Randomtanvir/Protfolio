// app/dashboard/projects/_components/ProjectForm.jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectForm = ({ project, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(
    project || {
      title: "",
      description: "",
      image: "",
      category: "Web Development",
      tech: [],
      status: "draft",
      progress: 0,
      team: [],
      deadline: "",
    }
  );

  const [techInput, setTechInput] = useState("");

  const handleTechAdd = (e) => {
    if (e.key === "Enter" && techInput.trim()) {
      e.preventDefault();
      setFormData({
        ...formData,
        tech: [...formData.tech, techInput.trim()],
      });
      setTechInput("");
    }
  };

  const handleTechRemove = (techToRemove) => {
    setFormData({
      ...formData,
      tech: formData.tech.filter((tech) => tech !== techToRemove),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, id: project?.id || Date.now() });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200/10 rounded-2xl p-6"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Project Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-gray-200/10 rounded-xl text-gray-900 dark:text-white"
            required
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-gray-200/10 rounded-xl text-gray-900 dark:text-white h-32"
            required
          />
        </div>

        {/* Image URL */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Image URL
          </label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-gray-200/10 rounded-xl text-gray-900 dark:text-white"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Category
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-gray-200/10 rounded-xl text-gray-900 dark:text-white"
          >
            <option value="Web Development">Web Development</option>
            <option value="Mobile App">Mobile App</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Status
          </label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-gray-200/10 rounded-xl text-gray-900 dark:text-white"
          >
            <option value="draft">Draft</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="on-hold">On Hold</option>
          </select>
        </div>

        {/* Progress */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Progress (%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={formData.progress}
            onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) })}
            className="w-full px-4 py-2 bg-white/5 border border-gray-200/10 rounded-xl text-gray-900 dark:text-white"
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Deadline
          </label>
          <input
            type="date"
            value={formData.deadline}
            onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-gray-200/10 rounded-xl text-gray-900 dark:text-white"
            required
          />
        </div>

        {/* Technologies */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Technologies (Press Enter to add)
          </label>
          <input
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            onKeyPress={handleTechAdd}
            className="w-full px-4 py-2 bg-white/5 border border-gray-200/10 rounded-xl text-gray-900 dark:text-white mb-2"
          />
          <div className="flex flex-wrap gap-2">
            {formData.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-lg text-sm flex items-center gap-2"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => handleTechRemove(tech)}
                  className="text-blue-500 hover:text-blue-600"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-4 mt-6">
        <motion.button
          type="button"
          onClick={onCancel}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          Cancel
        </motion.button>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
        >
          {project ? "Update Project" : "Create Project"}
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ProjectForm;