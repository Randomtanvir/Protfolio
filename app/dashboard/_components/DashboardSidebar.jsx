"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "Overview",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    href: "/dashboard"
  },
  {
    title: "Projects",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    href: "/dashboard/projects"
  },
  {
    title: "About",
    icon: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4",
    href: "/dashboard/about"
  },
  {
    title: "Services",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    href: "/dashboard/services"
  },
  {
    title: "Profile",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    href: "/dashboard/profile"
  }
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-40 h-screen w-64 bg-white/10 backdrop-blur-xl border-r border-gray-200/10 dark:bg-gray-800/10"
    >
      {/* Logo Section */}
      <div className="flex h-16 items-center justify-center border-b border-gray-200/10">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Portfolio
        </motion.h1>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          
          return (
            <Link key={index} href={item.href}>
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-blue-500/10 text-blue-500 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100/10"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={item.icon}
                  />
                </svg>
                <span className="font-medium">{item.title}</span>
                
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute right-4 w-1.5 h-1.5 rounded-full bg-blue-500"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200/10">
        <motion.div
          whileHover={{ y: -2 }}
          className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-gray-100/5 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">John Doe</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">Administrator</p>
          </div>
        </motion.div>
      </div>
    </motion.aside>
  );
};

export default DashboardSidebar;