import React from "react";
import MainComponent from "./_components/MainComponent";
import { getAllProjects } from "@/utils/project";

const ProjectPageInDashboard = async () => {
  let projects = [];

  // try {
  //   projects = (await getAllProjects()) || []; // runtime fetch
  // } catch (error) {
  //   console.error("Failed to fetch projects:", error);
  //   projects = []; // fallback
  // }

  return (
    <>
      <MainComponent projects={projects || []} />
    </>
  );
};

export default ProjectPageInDashboard;
