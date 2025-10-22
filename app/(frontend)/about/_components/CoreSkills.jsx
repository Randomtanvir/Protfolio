"use client";
import { motion } from "framer-motion";

const CoreSkills = ({ skills }) => {
  return (
    <div className="space-y-8 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20">
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Core Skills
      </h4>
      {skills.map((skill, index) => (
        <motion.div
          key={skill._id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative"
        >
          <div className="flex justify-between mb-2">
            <span className="text-gray-900 dark:text-white font-medium">
              {skill.name}
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              {skill.percentage}
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width:
                  typeof skill.percentage === "number"
                    ? `${skill.percentage}%`
                    : skill.percentage,
              }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="h-full rounded-full shadow-lg"
              style={{
                background: `linear-gradient(to left, ${"green"}, ${
                  skill?.color
                })`,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CoreSkills;
