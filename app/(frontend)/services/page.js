import React from "react";
import ServicesCenterContent from "./_components/ServicesCenterContent";
import ScrollArrow from "./_components/ScrollArrow";
import ServicesBody from "./_components/ServicesBody";
import { getAllServices, getServiceContent } from "@/utils/service";

const ServicesPage = async () => {
  let services = [];
  let serviceContent = {};

  try {
    services = (await getAllServices()) || []; // fetch at runtime
  } catch (err) {
    console.error("Failed to fetch services:", err);
    services = [];
  }

  try {
    serviceContent = (await getServiceContent()) || {}; // fetch at runtime
  } catch (err) {
    console.error("Failed to fetch service content:", err);
    serviceContent = {};
  }

  const availableservices =
    services?.length > 0
      ? services?.filter((ser) => ser?.status === "active")
      : [];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50/10 via-gray-100/10 to-gray-50/50 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900/20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/serviceBGlight.svg')] bg-cover bg-center opacity-10 dark:opacity-20" />
      <ServicesCenterContent serviceContent={serviceContent} />
      <ScrollArrow />
      <ServicesBody
        services={availableservices || []}
        title={serviceContent?.highlightBio || ""}
      />
    </section>
  );
};

export default ServicesPage;
