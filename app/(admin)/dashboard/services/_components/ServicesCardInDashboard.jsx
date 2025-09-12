"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import { Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ServicesCardInDashboard = ({ service, setService, setIsEdit }) => {
  const router = useRouter();
  const handleStatusToggle = async () => {
    try {
      const response = await fetch(`/api/service/${service?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: service?.status === "active" ? "draft" : "active",
        }),
      });

      const result = await response.json();
      if (result.success) {
        router.refresh();
        toast.success("Service status updated");
      } else {
        toast.error(result?.message || "Failed to update status");
      }
    } catch (error) {
      console.error("Error updating service status:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  const handleDelete = async () => {
    try {
      confirm("Are you sure you want to delete this service?");
      const response = await fetch(`/api/service/${service?._id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.success) {
        router.refresh();
        toast.success("Service deleted successfully");
      } else {
        toast.error(result?.message || "Failed to delete service");
      }
    } catch (error) {
      console.error("Error deleting service:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  const handleEdit = () => {
    setService(service);
    setIsEdit(true);
  };

  return (
    <div className="relative group rounded-2xl p-8 overflow-hidden border border-black/10 dark:border-white/10 backdrop-blur-sm bg-white/70 dark:bg-gray-900/60">
      {/* Toggle Switch in top-right */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <Switch
          id={`status-${service.id}`}
          className="z-10"
          checked={service?.status === "active"}
          onCheckedChange={handleStatusToggle}
        />
        <label
          htmlFor={`status-${service.id}`}
          className="text-sm text-gray-700 dark:text-gray-300"
        >
          {service?.status === "active" ? "Draft" : "Published"}
        </label>
      </div>

      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 dark:from-white/10 dark:to-white/5" />

      {/* Icon Container */}
      <div className="relative mb-6">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-20 group-hover:opacity-30 blur-lg transition-opacity" />
        <div className="relative bg-white/10 dark:bg-white/5 rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
          <img
            src={service?.serviceIconUrl}
            alt={`${service?.serviceName} icon`}
            className="w-8 h-8 object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
          {service?.serviceName}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          {service?.serviceBio}
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service?.technology?.map((skill, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          {/* Edit Button */}
          <button
            onClick={handleEdit}
            className="flex items-center justify-center w-11 h-11 rounded-full 
             bg-yellow-500/20 hover:bg-yellow-600/30
             text-white shadow-md transition-transform duration-200 
             hover:scale-110 active:scale-95 z-20"
          >
            <Pencil className="w-5 h-5" />
          </button>

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            className="flex items-center justify-center w-11 h-11 rounded-full 
             bg-red-500/20 hover:bg-red-500/30 
             text-red-600 dark:text-red-400 
             shadow-md backdrop-blur-md border border-red-500/30 
             transition-transform duration-200 
             hover:scale-110 active:scale-95 z-20"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-indigo-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
    </div>
  );
};

export default ServicesCardInDashboard;
