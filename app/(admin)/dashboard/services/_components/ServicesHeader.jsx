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

const ServicesHeader = ({
  serviceContent,
  service,
  setService,
  isEdit,
  setIsEdit,
}) => {
  const [openServiceModal, setOpenServiceModal] = React.useState(false);
  const [openContentModal, setOpenContentModal] = React.useState(false);

  // ✅ Automatically open "Add/Edit Service" modal when editing
  React.useEffect(() => {
    if (isEdit) {
      setOpenServiceModal(true);
    }
  }, [isEdit]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
      >
        {/* Header Section */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
            Services Management
          </h1>
          <p className="mt-1 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Manage your services and pricing
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4 sm:mt-0 flex-col sm:flex-row">
          {/* Add/Edit Service Modal */}
          <Dialog
            open={openServiceModal}
            onOpenChange={(open) => {
              setOpenServiceModal(open);
              if (!open) {
                // Reset edit mode and clear service when modal closes
                setIsEdit(false);
                setService({});
              }
            }}
          >
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsEdit(false)} // reset when manually opening
              >
                <Plus />
                Add New Service
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg bg-gray-50 dark:bg-gray-900">
              <DialogHeader>
                <DialogTitle>
                  {isEdit ? "Edit Service" : "Add a New Service"}
                </DialogTitle>
                <DialogDescription>
                  {isEdit
                    ? "Update the details of this service."
                    : "Fill in the details below to create a new service."}
                </DialogDescription>
              </DialogHeader>

              {/* Form inside modal */}
              <ServicesForm
                service={service}
                setService={setService}
                isEdit={isEdit}
                setOpenServiceModal={setOpenServiceModal}
                setIsEdit={setIsEdit}
              />
            </DialogContent>
          </Dialog>

          {/* Service Content Modal */}
          <Dialog open={openContentModal} onOpenChange={setOpenContentModal}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Plus />
                Manage Services Content
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg bg-gray-50 dark:bg-gray-900">
              <DialogHeader>
                <DialogTitle>Customise Your Service Content</DialogTitle>
                <DialogDescription>
                  Fill in the details below to customise your service content.
                </DialogDescription>
              </DialogHeader>

              {/* Form inside modal */}
              <ServiceContentForm serviceContent={serviceContent} />
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesHeader;
