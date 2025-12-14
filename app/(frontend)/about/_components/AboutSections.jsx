import React from "react";
import BackgroundStyle from "./BackgroundStyle";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

import AboutHeader from "./AboutHeader";
import { getAboutInfo } from "@/actions/fetcher";
export const dynamic = "force-dynamic";

const AboutSections = async () => {
  let about = {};

  try {
    about = (await getAboutInfo()) || {}; // runtime fetch
  } catch (err) {
    console.error("Failed to fetch about content:", err);
    about = {};
  }

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
