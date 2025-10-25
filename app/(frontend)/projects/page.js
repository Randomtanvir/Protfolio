import { getAllProjects } from "@/utils/project";
import ProjectCard from "./_components/ProjectCard";

const ProjectsPage = async () => {
  let project = [];

  // try {
  //   project = (await getAllProjects()) || []; // runtime fetch
  // } catch (err) {
  //   console.error("Failed to fetch about content:", err);
  //   project = [];
  // }

  const completeProject =
    project?.length > 0
      ? project?.filter((pro) => pro?.status === "complete")
      : [];
  return (
    <section className="relative w-full min-h-screen bg-[url('/projectsBGlight.svg')] dark:bg-[url('/projectsBG.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-gray-800/50 dark:before:bg-[#0a0f1da2] overflow-hidden">
      <div className="container mx-auto mb-3 px-4 py-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4 animate-fade-down">
          RECENT PROJECTS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 animate-fade-up">
          {completeProject?.length > 0 &&
            completeProject?.map((project) => (
              <ProjectCard key={project?._id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
