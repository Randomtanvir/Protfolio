import React from "react";
import DashboardSidebar from "../_components/DashboardSidebar";
import ServicesHeader from "./_components/ServicesHeader";
import ServiceLists from "./_components/ServiceLists";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardSidebar />

      <main className="min-h-screen w-full lg:pl-64">
        <div className="container mx-auto px-4 py-20 lg:py-8 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Header */}
            <ServicesHeader />
            {/* Services Grid */}
            <ServiceLists />
          </div>
        </div>
      </main>
    </div>
  );
}
