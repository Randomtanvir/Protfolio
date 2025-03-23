import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Coffee Website",
    description: "Short description of the project that was carried out in this portfolio.",
    image: "/img/projects-3.jpg",
    technologies: ["/img/skills-sass.svg", "/img/skills-tailwind-css.svg", "/img/skills-react.svg"],
    link: "#"
  },
  {
    title: "Food Product Design",
    description: "Short description of the project that was carried out in this portfolio.",
    image: "/img/projects-1.jpg",
    technologies: ["/img/skills-figma.svg", "/img/skills-photoshop.svg"],
    link: "#"
  },
  {
    title: "Restaurant Landing Page",
    description: "Short description of the project that was carried out in this portfolio.",
    image: "/img/projects-2.jpg",
    technologies: ["/img/skills-css.svg", "/img/skills-javascript.svg", "/img/skills-html.svg"],
    link: "#"
  },

  {
    title: "Restaurant Landing Page",
    description: "Short description of the project that was carried out in this portfolio.",
    image: "/img/projects-5.jpg",
    technologies: ["/img/skills-css.svg", "/img/skills-javascript.svg", "/img/skills-html.svg"],
    link: "#"
  },
  {
    title: "Restaurant Landing Page",
    description: "Short description of the project that was carried out in this portfolio.",
    image: "/img/projects-4.jpg",
    technologies: ["/img/skills-css.svg", "/img/skills-javascript.svg", "/img/skills-html.svg"],
    link: "#"
  },
  
];

const TechIcon = ({ name }) => {
  return (
    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800/50 dark:bg-white/10">
      <Image
        src={name}
        alt={"name"}
        width={20}
        height={20}
        className="object-contain"
      />
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="dark:bg-white/5 bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden group hover:bg-white/10 transition-all duration-300 border border-white/10">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex items-center gap-2 mb-4">
          {project.technologies.map((tech) => (
            <TechIcon key={tech} name={tech} />
          ))}
        </div>
        <a
          href={project.link}
          className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <span>Visit Project</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <section className="relative w-full min-h-screen bg-[url('/projectsBGlight.svg')] dark:bg-[url('/projectsBG.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-gray-800/50 dark:before:bg-[#0a0f1de7] overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4 animate-fade-down">
          RECENT PROJECTS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 animate-fade-up">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;