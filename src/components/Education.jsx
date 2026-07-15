import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

export default function Education({ educationList }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-6 md:grid-cols-3"
    >
      {educationList.map((edu, idx) => (
        <motion.div
          key={idx}
          variants={cardVariants}
          className="glass p-6 rounded-2xl glow-card shadow-sm border border-slate-205/50 dark:border-slate-800/50 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-205/40 dark:border-slate-700/40 text-primary-500">
                <FiBookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-primary-500">
                  {edu.duration}
                </span>
                <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                  {edu.institution}
                </h4>
              </div>
            </div>

            <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2 leading-snug">
              {edu.degree}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-450 mb-4">
              {edu.location}
            </p>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-auto">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold text-slate-650 dark:text-slate-400">Result</span>
              <span className="text-sm font-black text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
                {edu.gpa ? `CGPA: ${edu.gpa}` : `Percentage: ${edu.percentage}`}
              </span>
            </div>

            {edu.courses && (
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-550 mb-1.5">
                  Core Focus
                </span>
                <div className="flex flex-wrap gap-1">
                  {edu.courses.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[9px] font-semibold px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200/30 dark:border-slate-800 text-slate-500 dark:text-slate-450"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
