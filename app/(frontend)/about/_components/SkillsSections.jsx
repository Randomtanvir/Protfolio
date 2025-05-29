import React from "react";
import SkillsHeader from "./SkillsHeader";
import CoreSkills from "./CoreSkills";
import Technologies from "./Technologies";
import HighlightTools from "./HighlightTools";
import BackgroundStyle from "./BackgroundStyle";

const SkillsSections = () => {
  const skills = [
    {
      name: "UI Design",
      level: "90%",
      color: "bg-gradient-to-r from-blue-500 to-blue-400",
    },
    {
      name: "Product Design",
      level: "80%",
      color: "bg-gradient-to-r from-purple-500 to-purple-400",
    },
    {
      name: "User Research",
      level: "85%",
      color: "bg-gradient-to-r from-indigo-500 to-indigo-400",
    },
    {
      name: "Coding",
      level: "60%",
      color: "bg-gradient-to-r from-cyan-500 to-cyan-400",
    },
    {
      name: "No Code Tools",
      level: "65%",
      color: "bg-gradient-to-r from-teal-500 to-teal-400",
    },
  ];

  const skillMap = [
    ["HTML", "CSS", "JAVASCRIPT", "REACT", "NEXT.JS"],
    ["NODE", "EXPRESS", "REST API", "POSTGRES"],
    ["TAILWIND CSS", "FRAMER MOTION", "TYPESCRIPT"],
    ["UI/UX DESIGN", "PRODUCT DESIGN", "FIGMA", "ADOBE XD"],
    ["UI/UX", "PRODUCT DESIGN", "FIGMA", "ADOBE XD"],
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          //   initial={{ opacity: 0, y: 20 }}
          //   animate={{ opacity: 1, y: 0 }}
          //   transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <SkillsHeader />

          {/* Progress Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <CoreSkills skills={skills} />
            {/* Skill Map */}
            <Technologies skillMap={skillMap} />
          </div>

          {/* Tools Grid */}
          <HighlightTools />
        </div>
      </div>

      {/* Background Elements */}
      <BackgroundStyle />
    </section>
  );
};

export default SkillsSections;
