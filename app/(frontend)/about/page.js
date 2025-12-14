import SkillsSections from "./_components/SkillsSections";
import AboutSections from "./_components/AboutSections";
export const dynamic = "force-dynamic";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/10 via-gray-100 to-gray-50 dark:from-gray-900/20 dark:via-gray-800/90 dark:to-gray-900">
      <AboutSections />
      <SkillsSections />
    </div>
  );
};

export default AboutPage;
