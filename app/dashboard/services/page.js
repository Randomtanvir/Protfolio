"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "../_components/DashboardSidebar";

export default function ServicesPage() {
  const [isPublished, setIsPublished] = useState(true);
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Web Development",
      description: "Building modern, responsive websites using the latest technologies",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      price: "$99/hour",
      features: ["React/Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      color: "blue",
      status: "published"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces",
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      price: "$89/hour",
      features: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      color: "purple",
      status: "published"
    }
  ]);

  const handleAddService = () => {
    const newService = {
      id: Date.now(),
      title: "New Service",
      description: "Service description",
      icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
      price: "$X/hour",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      color: "green",
      status: "draft"
    };
    setServices([...services, newService]);
  };

  const handleDeleteService = (serviceId) => {
    setServices(services.filter(service => service.id !== serviceId));
  };

  const toggleServiceStatus = (serviceId) => {
    setServices(services.map(service => 
      service.id === serviceId 
        ? { ...service, status: service.status === "published" ? "draft" : "published" }
        : service
    ));
  };

  const handleUpdateFeatures = (serviceId, features) => {
    const updatedServices = services.map(service =>
      service.id === serviceId ? { ...service, features } : service
    );
    setServices(updatedServices);
  };

  const filteredServices = services.filter(service => 
    isPublished ? service.status === "published" : service.status === "draft"
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardSidebar />
      
      <main className="min-h-screen w-full lg:pl-64">
        <div className="container mx-auto px-4 py-20 lg:py-8 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
            >
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                  Services Management
                </h1>
                <p className="mt-1 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                  Manage your services and pricing
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-0">
                <Button
                  variant="outline"
                  onClick={handleAddService}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add New Service
                </Button>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {isPublished ? 'Published' : 'Draft'}
                  </span>
                  <button
                    onClick={() => setIsPublished(!isPublished)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${
                      isPublished ? 'bg-blue-600' : 'bg-gray-400'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                        isPublished ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${
                        service.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                        service.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                        'bg-green-100 dark:bg-green-900/30'
                      }`}>
                        <svg className={`w-6 h-6 ${
                          service.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                          service.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                          'text-green-600 dark:text-green-400'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                        </svg>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleServiceStatus(service.id)}
                          className={`text-sm px-2 py-1 rounded-md ${
                            service.status === 'published'
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400'
                          }`}
                        >
                          {service.status}
                        </button>
                        <button
                          onClick={() => handleDeleteService(service.id)}
                          className="opacity-0 group-hover:opacity-100 p-2 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-500 dark:hover:text-red-400 rounded-lg transition-opacity"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <input
                      className="w-full font-medium text-lg text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all mb-2"
                      value={service.title}
                      onChange={(e) => {
                        const updatedServices = [...services];
                        const serviceIndex = updatedServices.findIndex(s => s.id === service.id);
                        updatedServices[serviceIndex].title = e.target.value;
                        setServices(updatedServices);
                      }}
                    />

                    <textarea
                      className="w-full text-sm text-gray-600 dark:text-gray-400 bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all mb-4"
                      value={service.description}
                      rows={2}
                      onChange={(e) => {
                        const updatedServices = [...services];
                        const serviceIndex = updatedServices.findIndex(s => s.id === service.id);
                        updatedServices[serviceIndex].description = e.target.value;
                        setServices(updatedServices);
                      }}
                    />

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Price:</span>
                      <input
                        className="text-right font-medium text-gray-900 dark:text-white bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                        value={service.price}
                        onChange={(e) => {
                          const updatedServices = [...services];
                          const serviceIndex = updatedServices.findIndex(s => s.id === service.id);
                          updatedServices[serviceIndex].price = e.target.value;
                          setServices(updatedServices);
                        }}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Features:</span>
                        <button
                          onClick={() => {
                            const updatedServices = [...services];
                            const serviceIndex = updatedServices.findIndex(s => s.id === service.id);
                            updatedServices[serviceIndex].features.push("New Feature");
                            setServices(updatedServices);
                          }}
                          className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          + Add Feature
                        </button>
                      </div>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <input
                            className="flex-1 text-sm text-gray-600 dark:text-gray-400 bg-transparent border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                            value={feature}
                            onChange={(e) => {
                              const updatedFeatures = [...service.features];
                              updatedFeatures[featureIndex] = e.target.value;
                              handleUpdateFeatures(service.id, updatedFeatures);
                            }}
                          />
                          <button
                            onClick={() => {
                              const updatedFeatures = service.features.filter((_, i) => i !== featureIndex);
                              handleUpdateFeatures(service.id, updatedFeatures);
                            }}
                            className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-500 transition-opacity"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}