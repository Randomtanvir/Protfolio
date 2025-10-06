"use client";
import { useState } from "react";
import DashboardSidebar from "../../_components/DashboardSidebar";
import ProjectHeader from "./ProjectHeader";
import ProjectLists from "./ProjectLists";

export default function MainComponent({ projects }) {
  const [isEdit, setIsEdit] = useState(false);
  const [project, setProject] = useState({});

  return (
    <div className="min-h-screen mt-10">
      <DashboardSidebar />
      <div className="lg:ml-64 min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
          {/* Header */}
          <ProjectHeader
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            project={project}
            setProject={setProject}
          />
          {/* Projects Grid */}
          <ProjectLists
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setProject={setProject}
            projects={projects}
          />
        </div>
      </div>
    </div>
  );
}
