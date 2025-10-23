import TechIcon from "@/app/(frontend)/projects/_components/TechIcon";
import { Pencil, RefreshCcw, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const ProjectCardInDashboard = ({ project, onEdit }) => {
  const route = useRouter();

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        const res = await fetch(`/api/project/${id}`, {
          method: "DELETE",
        });
        const result = await res.json();
        if (result.success) {
          toast.success("Project deleted successfully");
          route.refresh();
        }
      } catch (error) {
        console.error("Error deleting project:", error);
        alert("Failed to delete project");
      }
    }
  };

  const handleToggleStatus = async (project) => {
    const newStatus = project.status === "complete" ? "working" : "complete";

    try {
      const res = await fetch(`/api/project/${project._id}`, {
        method: "PUT",
        body: JSON.stringify({ ...project, status: newStatus }),
      });

      const result = await res.json();
      if (result.success) {
        toast.success("Project status updated");
        route.refresh();
      } else {
        toast.error(result.message || "Failed to update status");
      }
    } catch (error) {
      console.error("Error updating project status:", error);
      toast.error("Failed to update project status");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition relative">
      {/* Image */}
      <div className="relative w-full h-48">
        {project?.image && (
          <img
            src={project.image}
            alt={project?.title}
            className="w-full h-full object-cover"
          />
        )}

        <span
          className={`absolute top-3 left-3 text-xs px-3 py-1 rounded-full ${
            project.status === "complete"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {project.description}
        </p>

        {/* Progress */}
        <div>
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project?.technologyUrls?.length > 0 &&
            project?.technologyUrls?.map((tech, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800/50 dark:bg-white/10"
              >
                <img
                  src={tech?.url || ""}
                  alt={"name"}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4 pt-2">
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            Live Demo
          </Link>
          <Link
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:underline text-sm"
          >
            Source Code
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => onEdit(project)}
            className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800"
          >
            <Pencil size={16} />
            <span>Edit</span>
          </button>
          <button
            onClick={() => handleDelete(project._id)}
            className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-800"
          >
            <Trash2 size={16} />
            <span>Delete</span>
          </button>
          <button
            onClick={() => handleToggleStatus(project)}
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800"
          >
            <RefreshCcw size={16} />
            <span>
              {project.status === "complete" ? "Mark Working" : "Mark Complete"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardInDashboard;
