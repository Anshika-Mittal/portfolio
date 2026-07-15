import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Generate an attractive placeholder gradient based on the project title
  const getGradientClass = (title) => {
    if (title.includes("Churn")) {
      return "from-blue-600 via-indigo-600 to-cyan-500";
    }
    return "from-emerald-500 via-teal-600 to-indigo-600";
  };

  return (
    <motion.div
      layout
      className="glass rounded-2xl overflow-hidden shadow-md border border-slate-200/50 dark:border-slate-800/50 flex flex-col h-full glow-card transition-all"
    >
      {/* Decorative gradient header as image placeholder */}
      <div className={`h-36 bg-gradient-to-tr ${getGradientClass(project.title)} relative p-6 flex flex-col justify-end text-white`}>
        <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[1px]"></div>
        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm font-semibold">
            {project.category}
          </span>
          <h3 className="text-xl font-bold mt-1.5 drop-shadow-sm leading-snug">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="text-xs text-slate-450 dark:text-slate-400 font-medium mb-3 flex items-center justify-between">
            <span>{project.duration}</span>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-350 border border-slate-200/40 dark:border-slate-700/45"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-primary-50 dark:bg-primary-950/20 text-primary-600 dark:text-primary-400">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Accordion Toggle */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between text-xs font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-350 transition-colors focus:outline-none"
          >
            <span>{isExpanded ? "Hide Details" : "Key Features & Challenges"}</span>
            {isExpanded ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden text-xs mt-3 text-left space-y-4"
              >
                {/* Key Features */}
                <div>
                  <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-1.5 flex items-center">
                    <FiCheckCircle className="w-3.5 h-3.5 mr-1 text-primary-500" /> Key Features
                  </h4>
                  <ul className="list-disc list-inside pl-1 text-slate-800 dark:text-slate-200 space-y-1">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges Solved */}
                <div>
                  <h4 className="font-bold text-slate-700 dark:text-slate-200 mb-1.5 flex items-center">
                    <FiAlertTriangle className="w-3.5 h-3.5 mr-1 text-amber-500" /> Challenges Solved
                  </h4>
                  <ul className="list-disc list-inside pl-1 text-slate-600 dark:text-slate-350 space-y-1">
                    {project.challenges.map((chal, idx) => {
                      const parts = chal.split(" Solution: ");
                      return (
                        <li key={idx} className="leading-relaxed">
                          <span className="font-medium text-slate-700 dark:text-slate-200">{parts[0]}</span>
                          {parts[1] && <span className="text-slate-500 dark:text-slate-400"> — {parts[1]}</span>}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
