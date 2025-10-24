import React from "react";
import DashboardSidebar from "./_components/DashboardSidebar";
import MainComponent from "./_components/MainComponent";

const DashboardPage = () => {
  return (
    <div className="relative min-h-screen mt-10">
      {/* Background Effects */}
      {/* <div className="absolute inset-0 bg-[url('/serviceBGlight.svg')] dark:bg-[url('/serviceBG.jpg')] bg-cover bg-center opacity-10 dark:opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-indigo-500/10" /> */}

      {/* Dashboard Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <DashboardSidebar />

        <MainComponent />
      </div>
    </div>
  );
};

export default DashboardPage;
