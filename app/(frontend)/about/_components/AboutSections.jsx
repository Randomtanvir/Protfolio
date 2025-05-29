import React from "react";
import BackgroundStyle from "./BackgroundStyle";
import AboutHeader from "./AboutHeader";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const AboutSections = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          // initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <AboutHeader />

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <AboutImage />

            {/* Content Column */}
            <AboutContent />
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <BackgroundStyle />
    </section>
  );
};

export default AboutSections;
