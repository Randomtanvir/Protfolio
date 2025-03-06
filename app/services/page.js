import ServicesCenterContent from "@/components/services/ServicesCenterContent";
import React from "react";

const ServicesPage = () => {
  return (
    <section className="relative w-screen min-h-screen bg-[url('/serviceBGlight.svg')] dark:bg-[url('/serviceBG.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-gray-800/10 dark:before:bg-[#0a0f1de7] overflow-hidden">
      <ServicesCenterContent />
    </section>
  );
};

export default ServicesPage;
