import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // const getSocialIcon = (platform) => {
  //   switch (platform) {
  //     case 'github':
  //       return <FiGithub className="w-5 h-5" />;
  //     case 'linkedin':
  //       return <FiLinkedin className="w-5 h-5" />;
  //     case 'leetcode':
  //       return <SiLeetcode className="w-5 h-5" />;
  //     case 'codeforces':
  //       return <SiCodeforces className="w-5 h-5" />;
  //     case 'email':
  //       return <FiMail className="w-5 h-5" />;
  //     default:
  //       return null;
  //   }
  // };

  // const socialLinks = [
  //   { name: 'linkedin', url: portfolioData.personalInfo.linkedin },
  //   { name: 'github', url: portfolioData.personalInfo.github },
  //   { name: 'leetcode', url: portfolioData.personalInfo.leetcode },
  //   { name: 'codeforces', url: portfolioData.personalInfo.codeforces },
  //   { name: 'email', url: `mailto:${portfolioData.personalInfo.email}` },
  // ];

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
        </p>
      </div>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg z-40 transition-colors duration-200 focus:outline-none"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
