import Image from "next/image";
import TechIcon from "./TechIcon";

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

export default ProjectCard;
