import { getServiceContent } from "@/utils/service";
import React from "react";

const ServicesCenterContent = async () => {
  const serviceContent = await getServiceContent();

  return (
    <div>
      <div className="flex min-h-screen w-full items-center flex-col z-20 justify-center">
        <h1 className="text-3xl md:text-5xl text-center font-bold z-10 dark:text-white text-gray-900 mb-6 animate-fade-down">
          {serviceContent?.title || "Professional Services"}
        </h1>
        <p className="dark:text-white text-gray-600 text-center p-2 lg:p-0 z-10 max-w-3xl md:text-lg text-base animate-fade-up">
          {serviceContent?.description}
        </p>
      </div>
    </div>
  );
};

export default ServicesCenterContent;
