"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service }) => {
  return (
    <div
      className="relative p-6 overflow-hidden rounded-xl
                 transition duration-500 ease-in-out 
                 flex flex-col justify-between items-start
                 dark:bg-gray-800 bg-[#ffffffcb] backdrop-filter backdrop-blur-md bg-opacity-30
                 border dark:border-gray-700/50 hover:border-gray-600/70
                 w-full sm:w-[300px] md:w-[320px] xl:w-[340px] 
                 h-[400px] sm:h-[420px] md:h-[440px]" // ✅ Fixed size
      style={{
        boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 10px ${service?.iconColor}22`,
      }}
    >
      {/* Background Blobs */}
      <div
        className="absolute w-28 h-28 rounded-full filter blur-xl opacity-60 transition-all duration-700 -top-8 -left-8"
        style={{ backgroundColor: service?.blobColor1 }}
      />
      <div
        className="absolute w-28 h-28 rounded-full filter blur-xl opacity-60 transition-all duration-700 -bottom-8 -right-8"
        style={{ backgroundColor: service?.blobColor2 }}
      />

      {/* --- Card Content --- */}
      <div className="relative z-10 flex-grow">
        <div
          className={`mb-6 p-4 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110`}
          style={{
            backgroundColor: `${service?.iconColor}2A`,
            color: service?.iconColor,
          }}
        >
          <img
            src={service?.serviceIconUrl || "/icons/service-icon.png"}
            alt="icon"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold dark:text-white text-gray-600 mb-2 line-clamp-1">
          {service?.serviceName}
        </h3>
        <div
          className="w-12 h-1 bg-opacity-80 mb-4 rounded-full"
          style={{ backgroundColor: service?.iconColor }}
        />
        <p className="text-sm text-gray-400 mb-6 dark:text-gray-300 line-clamp-3 break-words">
          {service?.serviceBio}
        </p>
      </div>

      {/* Skills */}
      <div className="flex mb-4 flex-wrap gap-2">
        {service?.technology?.[0]?.split(",")?.map((skill, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full pt-4 border-t border-gray-700/50 flex justify-between items-center">
        <Link
          href="/projects"
          className="font-semibold text-sm transition duration-300 ease-in-out flex items-center gap-1"
          style={{ color: service?.iconColor }}
        >
          {service?.ctaText || "Explore"}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
