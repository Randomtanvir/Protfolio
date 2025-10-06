import React from "react";
import MainComponent from "./_components/MainComponent";
import { getAllProjects } from "@/utils/project";

const ProjectPageInDashboard = async () => {
  const projects = await getAllProjects();
  return (
    <>
      <MainComponent projects={projects} />
    </>
  );
};

export default ProjectPageInDashboard;
