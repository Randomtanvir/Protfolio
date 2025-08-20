"use client";
import DashboardSidebar from "../_components/DashboardSidebar";
import CreateProjectForm from "./_components/CreateProjectForm";
import ProjectHeader from "./_components/ProjectHeader";
import ProjectLists from "./_components/ProjectLists";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen mt-10">
      <DashboardSidebar />
      <div className="lg:ml-64 min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
          {/* Header */}
          <ProjectHeader />
          {/* Projects Grid */}
          <ProjectLists />
        </div>
      </div>
    </div>
  );
}
