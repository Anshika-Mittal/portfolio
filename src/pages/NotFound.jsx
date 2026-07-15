import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiAlertTriangle } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass max-w-md w-full text-center p-8 rounded-3xl glow-card shadow-lg"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-205 dark:border-amber-900/30 text-amber-500">
            <FiAlertTriangle className="w-10 h-10" />
          </div>
        </div>

        <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-2">
          404
        </h1>
        <h2 className="text-xl font-bold text-slate-705 dark:text-slate-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 py-3 px-6 w-full rounded-2xl bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-sm transition-colors text-sm"
          >
            <FiHome className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
