import React from "react";
import ServicesCenterContent from "./_components/ServicesCenterContent";
import ScrollArrow from "./_components/ScrollArrow";
import ServicesBody from "./_components/ServicesBody";
import { getAllServices, getServiceContent } from "@/utils/service";

const ServicesPage = async () => {
  const services = await getAllServices();
  const serviceContent = await getServiceContent();

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50/10 via-gray-100/10 to-gray-50/50 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900/20 overflow-hidden">
      {/* <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"> */}
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/serviceBGlight.svg')] bg-cover bg-center opacity-10 dark:opacity-20" />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-indigo-500/10" /> */}
      <ServicesCenterContent />
      <ScrollArrow />
      <ServicesBody services={services} title={serviceContent?.highlightBio} />
    </section>
  );
};

export default ServicesPage;
