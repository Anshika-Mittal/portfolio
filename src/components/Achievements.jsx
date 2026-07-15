import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBook } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const getIcon = (iconName) => {
  switch (iconName) {
    case 'SiLeetcode':
      return <SiLeetcode className="w-6 h-6 text-yellow-500" />;
    case 'TbMath100Percent':
      return <FiBook className="w-6 h-6 text-blue-500" />;
    default:
      return <FiAward className="w-6 h-6 text-primary-500" />;
  }
};

export default function Achievements({ achievementsList }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-6 md:grid-cols-2"
    >
      {achievementsList.map((ach, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className="glass p-6 md:p-8 rounded-2xl shadow-sm border border-slate-205/50 dark:border-slate-800/50 glow-card flex items-start space-x-5 transition-all"
        >
          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-205/50 dark:border-slate-700/50 flex-shrink-0">
            {getIcon(ach.icon)}
          </div>
          <div>
            <div className="flex items-center space-x-2.5 mb-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary-500 bg-primary-50 dark:bg-primary-950/20 px-2 py-0.5 rounded-full border border-primary-100/30 dark:border-primary-900/10">
                {ach.tag}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-850 dark:text-white mb-2">
              {ach.title}
            </h3>
            <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed">
              {ach.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
