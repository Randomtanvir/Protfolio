import React from "react";
import SkillsHeader from "./SkillsHeader";
import CoreSkills from "./CoreSkills";
import Technologies from "./Technologies";
import HighlightTools from "./HighlightTools";
import BackgroundStyle from "./BackgroundStyle";
import { getAboutInfo } from "@/utils/about";

const SkillsSections = async () => {
  const about = await getAboutInfo();

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
            <CoreSkills skills={about?.skills} />
            {/* Skill Map */}
            <Technologies skillMap={about?.technology[0]?.trim()?.split(",")} />
          </div>

          {/* Tools Grid */}
          <HighlightTools highSkill={about?.skillsIcons} />
        </div>
      </div>

      {/* Background Elements */}
      <BackgroundStyle />
    </section>
  );
};

export default SkillsSections;
