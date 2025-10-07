"use client";

import React from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const StatusToggle = ({ service }) => {
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
  return (
    <div className="flex items-center space-x-2">
      <span
        className={`text-sm font-medium ${
          service?.status === "active" ? "text-green-400" : "text-red-400"
        }`}
      >
        {service?.status === "active" ? "Active" : "Inactive"}
      </span>
      <button
        onClick={handleStatusToggle}
        className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${
          service?.status === "active" ? "bg-green-600" : "bg-gray-600"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
            service?.status === "active" ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default StatusToggle;
