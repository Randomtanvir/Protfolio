import React from "react";
import BackgroundStyle from "./BackgroundStyle";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import { getAboutInfo } from "@/utils/about";
import AboutHeader from "./AboutHeader";

const AboutSections = async () => {
  const about = await getAboutInfo();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <AboutHeader title={about?.title} headline={about?.headline} />

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <AboutImage img={about?.aboutImg} />

            {/* Content Column */}
            <AboutContent about={about} />
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <BackgroundStyle />
    </section>
  );
};

export default AboutSections;
