import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

export default function ExperienceTimeline({ experiences }) {
  if (!experiences || experiences.length === 0) return null;

  return (
    <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-10 group"
        >
          {/* Timeline Bullet */}
          <span className="absolute -left-[17px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-darkBg border border-primary-500 text-primary-500 shadow-sm z-10 transition-transform group-hover:scale-110">
            <FiBriefcase className="w-4 h-4" />
          </span>

          {/* Timeline Card */}
          <div className="glass p-6 md:p-8 rounded-2xl glow-card shadow-sm transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-850 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                  {exp.company} <span className="font-normal text-slate-400 dark:text-slate-550">&bull; {exp.location}</span>
                </p>
              </div>
              <span className="inline-block mt-2 md:mt-0 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-950/30 text-primary-650 dark:text-primary-405 border border-primary-100/50 dark:border-primary-900/20 align-self-start md:align-self-auto">
                {exp.duration}
              </span>
            </div>

            <ul className="space-y-2.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5 list-disc list-inside pl-1">
              {exp.highlights.map((bullet, idx) => (
                <li key={idx} className="marker:text-primary-500 leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Sub-skills for the position */}
            <div className="flex flex-wrap gap-1.5">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-slate-700/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
