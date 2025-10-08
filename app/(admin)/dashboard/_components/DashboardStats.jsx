// components/dashboard/DashboardStats.jsx
import React from "react";
import ViewsAnalytics from "./ViewsAnalytics";
import ProjectsAnalytics from "./ProjectsAnalytics";
import MessageAnalytics from "./MessageAnalytics";
import ServiceAnalytics from "./ServiceAnalytics";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ViewsAnalytics />
      <ProjectsAnalytics />
      <MessageAnalytics />
      <ServiceAnalytics />
    </div>
  );
};

export default DashboardStats;
