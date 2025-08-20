"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ServicesForm from "./ServicesAddedForm";
import ServiceContentForm from "./ServiceContentForm";

const ServicesHeader = () => {
  return (
    <div>
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
        <div className="flex gap-4 mt-4 sm:mt-0 flex-col sm:flex-row">
          {/* Button with Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Plus />
                Add New Service
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg bg-gray-50 dark:bg-gray-900">
              <DialogHeader>
                <DialogTitle>Add a New Service</DialogTitle>
                <DialogDescription>
                  Fill in the details below to create a new service.
                </DialogDescription>
              </DialogHeader>

              {/* Form inside modal */}
              <ServicesForm />
            </DialogContent>
          </Dialog>

          {/* manage servicer content */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Plus />
                Manage Servics Content
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg bg-gray-50 dark:bg-gray-900">
              <DialogHeader>
                <DialogTitle>Customise Your Service content</DialogTitle>
                <DialogDescription>
                  Fill in the details below to customise your service content.
                </DialogDescription>
              </DialogHeader>

              {/* Form inside modal */}
              <ServiceContentForm />
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesHeader;
