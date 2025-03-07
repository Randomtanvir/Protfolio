import React from "react";

const Skills = () => {
  return (
    <div className="bg-gray-200 dark:bg-[#1a1941ad] ring ring-white/30 px-8 py-6 rounded-4xl mb-20 lg:col-start-1 lg:col-span-1 lg:row-start-2 lg:row-span-1 animate-fade-up">
      <h2 className="text-xl">Skills</h2>
      <div className="flex flex-wrap items-center gap-10 my-2 animate-fade-left">
        <img
          src="/img/skills-html.svg"
          alt="skill"
          className="w-6 transition-all transform z-10 hover:-translate-y-1"
        />
        <img
          src="/img/skills-css.svg"
          alt="skill"
          className="w-6 transition-all transform z-10 hover:-translate-y-1"
        />
        <img
          src="/img/skills-javascript.svg"
          alt="skill"
          className="w-6 transition-all transform z-10 hover:-translate-y-1"
        />
        <img
          src="/img/skills-react.svg"
          alt="skill"
          className="w-6 transition-all transform z-10 hover:-translate-y-1"
        />
        <img
          src="/img/skills-next.svg"
          alt="skill"
          className="w-6 transition-all transform z-10 hover:-translate-y-1"
        />
        <img
          src="/img/skills-git.svg"
          alt="skill"
          className="w-6 transition-all transform z-10 hover:-translate-y-1"
        />
        <img
          src="/img/skills-github.svg"
          alt="skill"
          className="w-6 transition-all transform z-10 hover:-translate-y-1"
        />
        <img
          src="/img/skills-sass.svg"
          alt="skill"
          className="w-6 transition-all transform z-10 hover:-translate-y-1"
        />
        <img
          src="/img/skills-tailwind-css.svg"
          alt="skill"
          className="w-6 transition-all transform z-10 hover:-translate-y-1"
        />

        <img
          src="/img/skills-photoshop.svg"
          alt="skill"
          className="w-6 transition-all transform z-10 hover:-translate-y-1"
        />
      </div>
      <p className="text-xs mt-6">
        Visit the projects section to see the work done with these web
        technologies.
      </p>
    </div>
  );
};

export default Skills;
