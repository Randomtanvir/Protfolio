"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HighlightTools = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {["figma", "react", "next", "Node", "javascript", "typescript"].map(
        (tool, index) => (
          <motion.div
            key={tool}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl transition-all group-hover:blur-2xl" />
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-4 flex items-center justify-center border border-white/20 dark:border-gray-700/20 transition-transform group-hover:scale-110 cursor-pointer">
              <Image
                src={`/img/skills-${tool}.svg`}
                alt={tool}
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            </div>
          </motion.div>
        )
      )}
    </div>
  );
};

export default HighlightTools;
