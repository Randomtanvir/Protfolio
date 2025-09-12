"use client";
import React from "react";
import DashboardSidebar from "../../_components/DashboardSidebar";
import ServicesHeader from "./ServicesHeader";
import ServiceLists from "./ServiceLists";

const MainSearviceComponent = ({ serviceContent, services }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [service, setService] = React.useState(null);
  console.log(service);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardSidebar />
      <main className="min-h-screen w-full lg:pl-64">
        <div className="container mx-auto px-4 py-20 lg:py-8 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Header */}
            <ServicesHeader
              serviceContent={serviceContent}
              service={service}
              setService={setService}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
            />
            {/* Services Grid */}
            <ServiceLists
              services={services}
              setService={setService}
              setIsEdit={setIsEdit}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainSearviceComponent;
