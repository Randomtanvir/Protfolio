import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CopyPlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateProjectForm from "./CreateProjectForm";

const ProjectHeader = ({ isEdit, setIsEdit, project, setProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
    >
      <div className="w-full sm:w-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Projects
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Manage your portfolio projects
        </p>
      </div>

      {/* Controlled Dialog */}
      <Dialog open={isEdit} onOpenChange={setIsEdit}>
        {!isEdit && (
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center space-x-2">
              <CopyPlus />
              <span>Add New Project</span>
            </Button>
          </DialogTrigger>
        )}

        <DialogContent className="w-full sm:min-w-4xl rounded-none bg-white dark:bg-gray-800 p-6 lg:p-10">
          <DialogHeader className="text-center lg:text-left">
            <DialogTitle className="text-2xl lg:text-3xl font-bold">
              {isEdit ? "Edit Project" : "Add a New Project"}
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400 mt-1">
              {isEdit
                ? "Update the project details below."
                : "Fill in the details below to create a new Project."}
            </DialogDescription>
          </DialogHeader>

          <CreateProjectForm isEdit={isEdit} project={project} />
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default ProjectHeader;
