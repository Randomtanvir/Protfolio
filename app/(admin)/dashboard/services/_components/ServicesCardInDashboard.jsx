"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  Headset,
  Crown,
  TrendingUp,
  ArrowRight,
  Pencil,
  Trash2,
  Anchor,
  CheckCircle,
  XCircle,
} from "lucide-react";
import ActionButton from "./ActionButton";
import StatusToggle from "./StatusToggle";
import Link from "next/link";

const ServicesCardInDashboard = ({ service, setService, setIsEdit }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      if (confirm("Are you sure you want to delete this service?")) {
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
      } else {
        toast.error("Service deletion cancelled");
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
    <div
      className="relative p-6 overflow-hidden rounded-xl
                 transition duration-500 ease-in-out 
                 flex flex-col items-start max-w-xs w-full min-h-[300px]
                 dark:bg-gray-800 bg-[#f6f3f4] backdrop-filter backdrop-blur-md bg-opacity-30
                 border dark:border-gray-700/50 hover:border-gray-600/70"
      style={{
        // Mimic the soft, subtle shadow of the example image
        boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 10px ${service?.iconColor}22`,
      }}
    >
      {/* Dynamic Blobs (Unchanged) */}
      <div
        className="absolute w-28 h-28 rounded-full filter blur-xl opacity-60 transition-all duration-700 -top-8 -left-8 group-hover:scale-125 group-hover:translate-x-4 group-hover:-translate-y-4"
        style={{ backgroundColor: service?.blobColor1 }}
      />
      <div
        className="absolute w-28 h-28 rounded-full filter blur-xl opacity-60 transition-all duration-700 -bottom-8 -right-8 group-hover:scale-125 group-hover:-translate-x-4 group-hover:translate-y-4"
        style={{ backgroundColor: service?.blobColor2 }}
      />

      {/* --- Card Header: Toggle Status --- */}
      <div className="relative z-10 w-full flex justify-end mb-4">
        <StatusToggle service={service} />
      </div>

      {/* --- Card Content --- */}
      <div className="relative z-10 flex-grow">
        {/* Icon Wrapper */}
        <div
          className={`mb-6 p-4 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110`}
          style={{
            backgroundColor: `${service?.iconColor}2A`,
            color: service?.iconColor,
          }}
        >
          <img
            src={service?.serviceIconUrl || "/icons/service-icon.png"}
            alt="icon"
            className="w-8 h-8"
          />
        </div>

        {/* Title and Description */}
        <h3 className="text-2xl font-bold dark:text-white text-gray-600 mb-2">
          {service?.serviceName}
        </h3>
        <div
          className="w-12 h-1 bg-opacity-80 mb-4 rounded-full"
          style={{ backgroundColor: service?.iconColor }}
        />
        <p className="text-sm text-gray-400 mb-6 dark:text-gray-300 line-clamp-2 break-words max-w-full sm:max-w-[260px]">
          {service?.serviceBio}
        </p>
      </div>

      {/* Skills Tags */}
      <div className="flex mb-4 flex-wrap gap-2">
        {service?.technology?.[0]?.split(",")?.map((skill, index) => (
          <span
            key={index}
            className="text-sm px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
      {/* --- Card Footer: CTA and Action Buttons --- */}
      <div className="relative z-10 w-full pt-4 border-t border-gray-700/50 flex justify-between items-center">
        {/* Main CTA Link */}
        <Link
          href={service?.href || "#"}
          className={`font-semibold text-sm transition duration-300 ease-in-out`}
          style={{ color: service?.iconColor }}
        >
          {service?.ctaText || "Explore"}
          <ArrowRight className="inline-block w-4 h-4 ml-1 transition-transform duration-300 hover:translate-x-1" />
        </Link>

        {/* Action Buttons */}
        <div className="flex space-x-1">
          <ActionButton
            icon={Pencil}
            onClick={handleEdit}
            className="text-yellow-400 hover:bg-yellow-400/20"
            label="Edit Service"
          />
          <ActionButton
            icon={Trash2}
            onClick={handleDelete}
            className="text-red-400 hover:bg-red-400/20"
            label="Delete Service"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesCardInDashboard;
