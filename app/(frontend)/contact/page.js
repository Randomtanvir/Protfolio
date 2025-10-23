import BackgroundElements from "./_components/BackgroundElements";
import ContactContent from "./_components/ContactContent";

// Animation configs

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br  from-gray-50/30 via-gray-100 to-gray-50 dark:from-gray-900/20 dark:via-gray-800 dark:to-gray-900 py-20 relative overflow-hidden">
      <div className="container mx-auto mb-6 md:mb-0 px-4">
        <ContactContent />
      </div>

      {/* Background Elements */}
      <BackgroundElements />
    </section>
  );
};

export default ContactPage;
