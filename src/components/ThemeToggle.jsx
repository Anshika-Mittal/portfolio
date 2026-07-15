import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors focus:outline-none shadow-sm border border-slate-200/50 dark:border-slate-700/50"
      aria-label="Toggle Theme"
      id="theme-toggle-btn"
    >
      {theme === 'dark' ? (
        <FiSun className="w-5 h-5 text-amber-450 text-yellow-400" />
      ) : (
        <FiMoon className="w-5 h-5 text-slate-700" />
      )}
    </motion.button>
  );
}
