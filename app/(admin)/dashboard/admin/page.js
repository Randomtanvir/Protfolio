import React from "react";
import DashboardSidebar from "../_components/DashboardSidebar";
import AdminSetting from "./_components/AdminSetting";

const AdminPage = () => {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-br dark:from-slate-900 dark:via-teal-800 dark:to-slate-950
  from-[#FEEBF6] via-[#E8F3FC] to-[#BBDCE5]
 
  "
    >
      {/* Dashboard Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-64">
          <AdminSetting />
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
