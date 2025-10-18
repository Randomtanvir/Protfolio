import { getAllProjects } from "@/utils/project";
import ProjectCard from "./_components/ProjectCard";

const projects = [
  {
    title: "Coffee Website",
    description:
      "Short description of the project that was carried out in this portfolio.",
    image: "/img/projects-3.jpg",
    technologies: [
      "/img/skills-sass.svg",
      "/img/skills-tailwind-css.svg",
      "/img/skills-react.svg",
    ],
    link: "#",
  },
  {
    title: "Food Product Design",
    description:
      "Short description of the project that was carried out in this portfolio.",
    image: "/img/projects-1.jpg",
    technologies: ["/img/skills-figma.svg", "/img/skills-photoshop.svg"],
    link: "#",
  },
  {
    title: "Restaurant Landing Page",
    description:
      "Short description of the project that was carried out in this portfolio.",
    image: "/img/projects-2.jpg",
    technologies: [
      "/img/skills-css.svg",
      "/img/skills-javascript.svg",
      "/img/skills-html.svg",
    ],
    link: "#",
  },

  {
    title: "Restaurant Landing Page",
    description:
      "Short description of the project that was carried out in this portfolio.",
    image: "/img/projects-5.jpg",
    technologies: [
      "/img/skills-css.svg",
      "/img/skills-javascript.svg",
      "/img/skills-html.svg",
    ],
    link: "#",
  },
  {
    title: "Restaurant Landing Page",
    description:
      "Short description of the project that was carried out in this portfolio.",
    image: "/img/projects-4.jpg",
    technologies: [
      "/img/skills-css.svg",
      "/img/skills-javascript.svg",
      "/img/skills-html.svg",
    ],
    link: "#",
  },
];

const ProjectsPage = async () => {
  const project = await getAllProjects();
  const completeProject =
    project?.length > 0
      ? project.filter((pro) => pro?.status === "complete")
      : [];
  console.log(completeProject);
  return (
    <section className="relative w-full min-h-screen bg-[url('/projectsBGlight.svg')] dark:bg-[url('/projectsBG.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-gray-800/50 dark:before:bg-[#0a0f1de7] overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
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
