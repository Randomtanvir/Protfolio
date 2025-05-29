import SkillsSections from "./_components/SkillsSections";
import AboutSections from "./_components/AboutSections";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <AboutSections />
      <SkillsSections />
    </div>
  );
};

export default AboutPage;
