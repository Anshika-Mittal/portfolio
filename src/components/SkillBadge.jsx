import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiCpu, 
  FiLayers, 
  FiCloud, 
  FiTerminal 
} from 'react-icons/fi';

const categoryConfig = {
  programming: {
    title: "Programming Languages",
    icon: <FiCode className="w-5 h-5 text-indigo-500" />,
    color: "from-indigo-500/10 to-indigo-600/10 text-indigo-600 dark:text-indigo-400 border-indigo-200/50 dark:border-indigo-800/30"
  },
  ml: {
    title: "Machine Learning & Data Science",
    icon: <FiCpu className="w-5 h-5 text-emerald-500" />,
    color: "from-emerald-500/10 to-emerald-600/10 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-800/30"
  },
  frameworks: {
    title: "Frameworks & Libraries",
    icon: <FiLayers className="w-5 h-5 text-cyan-500" />,
    color: "from-cyan-500/10 to-cyan-600/10 text-cyan-600 dark:text-cyan-400 border-cyan-200/50 dark:border-cyan-800/30"
  },
  cloud: {
    title: "Cloud & DevOps",
    icon: <FiCloud className="w-5 h-5 text-sky-500" />,
    color: "from-sky-500/10 to-sky-600/10 text-sky-600 dark:text-sky-400 border-sky-200/50 dark:border-sky-800/30"
  },
  tools: {
    title: "Developer Tools & Infrastructure",
    icon: <FiTerminal className="w-5 h-5 text-amber-500" />,
    color: "from-amber-500/10 to-amber-600/10 text-amber-600 dark:text-amber-400 border-amber-200/50 dark:border-amber-800/30"
  }
};

export default function SkillBadge({ category, skillsList }) {
  const config = categoryConfig[category] || {
    title: category,
    icon: <FiCode className="w-5 h-5" />,
    color: "from-slate-500/10 to-slate-600/10 text-slate-650 dark:text-slate-400"
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="glass p-6 rounded-2xl glow-card shadow-sm transition-all"
    >
      <div className="flex items-center space-x-3 mb-5">
        <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-205/50 dark:border-slate-700/50">
          {config.icon}
        </div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          {config.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {skillsList.map((skill, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border bg-gradient-to-r ${config.color} shadow-sm transition-shadow`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
