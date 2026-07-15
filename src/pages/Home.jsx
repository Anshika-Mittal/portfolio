import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload, FiArrowRight, FiAward } from 'react-icons/fi';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

import { portfolioData } from '../data/portfolioData';
import SkillBadge from '../components/SkillBadge';
import ProjectCard from '../components/ProjectCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Education from '../components/Education';
import Achievements from '../components/Achievements';

// Floating Skills Configuration for Hero background
const FLOATING_ICONS = [
  { name: 'Python', color: 'text-blue-500', top: '12%', left: '60%' },
  { name: 'C++', color: 'text-indigo-600 dark:text-indigo-400', top: '22%', left: '85%' },
  { name: 'React', color: 'text-cyan-400', top: '68%', left: '55%' },
  { name: 'AWS', color: 'text-amber-500', top: '45%', left: '90%' },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Typewriter states
  const titles = ["Software Developer", "ML Engineer", "Problem Solver"];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];
      
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(45);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(110);
      }
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end of word
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(250); // Pause before next word
      }
    };
    
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Project filtering state
  const [projectFilter, setProjectFilter] = useState('All');
  const projectCategories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];
  const filteredProjects = projectFilter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === projectFilter);

  // Section scroll reveal animation configuration
  const revealVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const getSocialIcon = (name) => {
    switch (name) {
      case 'github': return <FiGithub className="w-5 h-5" />;
      case 'linkedin': return <FiLinkedin className="w-5 h-5" />;
      case 'leetcode': return <SiLeetcode className="w-5 h-5" />;
      case 'codeforces': return <SiCodeforces className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Background Glowing Ambient Aura */}
      <div className="absolute top-0 inset-x-0 h-[100vh] pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl dark:bg-primary-900/10" />
        <div className="absolute top-[60vh] -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl dark:bg-blue-900/10" />
      </div>

      {/* ================== HERO SECTION ================== */}
      <section id="home" className="min-h-[90vh] flex items-center relative py-12 md:py-20 z-10">
        {/* Floating background skill indicators */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none hidden md:block">
          {FLOATING_ICONS.map((icon, idx) => (
            <motion.div
              key={idx}
              className={`absolute font-semibold text-xs border border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-slate-900/30 px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm ${icon.color} float-element`}
              style={{
                top: icon.top,
                left: icon.left,
                animationDelay: `${idx * 1.5}s`,
              }}
            >
              {icon.name}
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center space-x-2 text-xs font-semibold px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/30 text-primary-650 dark:text-primary-400 border border-primary-100 dark:border-primary-900/30 mb-4">
                  <span>Available for Internships & Full-Time Roles</span>
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-850 dark:text-white leading-tight">
                  Hi, I'm <span className="bg-gradient-to-r from-primary-500 to-blue-600 bg-clip-text text-transparent">{portfolioData.personalInfo.name}</span>
                </h1>
                
                {/* Typewriter text */}
                <h2 className="text-xl sm:text-2xl font-bold text-slate-600 dark:text-slate-300 mt-3 min-h-[40px]">
                  I am a <span className="text-primary-600 dark:text-primary-400 typewriter-cursor">{text}</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-slate-650 dark:text-slate-350 text-base md:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0"
              >
                {portfolioData.personalInfo.bio}
              </motion.p>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-2xl bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-sm transition-colors text-sm"
                >
                  <span>Get In Touch</span>
                  <FiArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personalInfo.resumeUrl}
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-2xl border border-slate-205 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold transition-colors text-sm"
                >
                  <FiDownload className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </motion.div>

              {/* Social Channels */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex justify-center lg:justify-start items-center space-x-5 pt-4 text-slate-500 dark:text-slate-400"
              >
                {['linkedin', 'github', 'leetcode', 'codeforces'].map((platform) => (
                  <a
                    key={platform}
                    href={portfolioData.personalInfo[platform]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-800 rounded-xl transition-colors hover:text-primary-500 dark:hover:text-primary-400"
                    title={`Link to ${platform}`}
                  >
                    {getSocialIcon(platform)}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right Profile Column */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative group w-64 h-64 sm:w-80 sm:h-80"
              >
                {/* Glowing border rings */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-blue-600 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 border border-primary-200/50 dark:border-primary-800/30 rounded-3xl" />
                
                {/* User uploaded profile image */}
                <div className="relative w-full h-full rounded-3xl bg-slate-150 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg transition-transform group-hover:scale-[1.01] duration-300">
                  <img
                    src={portfolioData.personalInfo.profileImg}
                    alt={portfolioData.personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== ABOUT ME SECTION ================== */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-20 border-t border-slate-100 dark:border-slate-900 z-10 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary-500 mb-2">About Me</h2>
            <h3 className="text-3xl font-extrabold text-slate-850 dark:text-white">Career Profile & Target Role</h3>
            <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="glass p-6 md:p-8 rounded-3xl space-y-4 shadow-sm border border-slate-200/50 dark:border-slate-800/50">
                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Career Objective</h4>
                <p className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed">
                  As a Computer Science candidate with a strong specialization in E-Commerce Technology, I build robust, production-ready software components that drive efficiency and business outcome. I seek to apply my background in intelligent workflow automation and machine learning to build highly scalable backend integrations.
                </p>
                <p className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed">
                  I bring analytical rigor and systematic debugging practices to agile product cycles. My project history includes architecting decoupled applications, integrating API gateways and cloud storage lifecycle routines.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Highlight cards */}
              <div className="glass p-6 rounded-3xl space-y-5 border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Key Competencies</h4>
                
                <div className="space-y-4 text-xs font-semibold">
                  <div className="flex items-center space-x-3.5">
                    <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">&bull;</span>
                    <div>
                      <h5 className="text-slate-800 dark:text-white">Explainable Systems (SHAP)</h5>
                      <p className="text-[10px] text-slate-450 dark:text-slate-400 font-normal">Mapping black-box models to business indicators</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3.5">
                    <span className="p-2 rounded-lg bg-blue-500/10 text-blue-500">&bull;</span>
                    <div>
                      <h5 className="text-slate-800 dark:text-white">Data Pipeline Engineering</h5>
                      <p className="text-[10px] text-slate-450 dark:text-slate-400 font-normal">Stream-based preprocessing in Pandas/NumPy</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3.5">
                    <span className="p-2 rounded-lg bg-purple-500/10 text-purple-500">&bull;</span>
                    <div>
                      <h5 className="text-slate-800 dark:text-white">Workflow Automation</h5>
                      <p className="text-[10px] text-slate-450 dark:text-slate-400 font-normal">Automating pipelines, alert logs and SMTP communication</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================== EXPERIENCE SECTION ================== */}
      {portfolioData.experience && portfolioData.experience.length > 0 && (
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="py-20 border-t border-slate-100 dark:border-slate-900 z-10 relative bg-slate-50/50 dark:bg-slate-950/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary-500 mb-2">Work Experience</h2>
              <h3 className="text-3xl font-extrabold text-slate-850 dark:text-white">Professional History</h3>
              <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
            </div>

            <div className="max-w-3xl mx-auto">
              <ExperienceTimeline experiences={portfolioData.experience} />
            </div>
          </div>
        </motion.section>
      )}

      {/* ================== EDUCATION SECTION ================== */}
      <motion.section
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-20 border-t border-slate-100 dark:border-slate-900 z-10 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary-500 mb-2">Academic</h2>
            <h3 className="text-3xl font-extrabold text-slate-850 dark:text-white">Education History</h3>
            <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
          </div>

          <Education educationList={portfolioData.education} />
        </div>
      </motion.section>

      {/* ================== TECHNICAL SKILLS ================== */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-20 border-t border-slate-100 dark:border-slate-900 z-10 relative bg-slate-50/50 dark:bg-slate-950/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary-500 mb-2">Core Skills</h2>
            <h3 className="text-3xl font-extrabold text-slate-850 dark:text-white">Technical Toolkit</h3>
            <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.keys(portfolioData.skills).map((categoryKey) => (
              <SkillBadge
                key={categoryKey}
                category={categoryKey}
                skillsList={portfolioData.skills[categoryKey]}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================== PROJECTS SECTION ================== */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-20 border-t border-slate-100 dark:border-slate-900 z-10 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary-500 mb-2">Works</h2>
            <h3 className="text-3xl font-extrabold text-slate-850 dark:text-white">Featured Engineering Projects</h3>
            <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
          </div>

          {/* Filtering Tabs */}
          <div className="flex justify-center flex-wrap gap-4 mb-12 max-w-2xl mx-auto">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setProjectFilter(category)}
                className={`px-8 py-3 text-xs md:text-sm font-bold rounded-xl border transition-all min-w-[140px] sm:min-w-[180px] text-center shadow-sm ${
                  projectFilter === category
                    ? 'bg-primary-600 border-primary-600 text-white shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {filteredProjects.map((project, index) => (
              <motion.div key={index} layout>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================== CERTIFICATIONS SECTION ================== */}
      <motion.section
        id="certifications"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-20 border-t border-slate-100 dark:border-slate-900 z-10 relative bg-slate-50/50 dark:bg-slate-950/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary-500 mb-2">Learning</h2>
            <h3 className="text-3xl font-extrabold text-slate-850 dark:text-white">Professional Certifications</h3>
            <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {portfolioData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="glass p-5 rounded-2xl shadow-sm border border-slate-205/50 dark:border-slate-800/50 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-primary-550 dark:text-primary-400 block mb-1">
                    {cert.date}
                  </span>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white leading-snug mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-slate-450 dark:text-slate-500">
                    {cert.issuer}
                  </p>
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-primary-500 hover:text-primary-650 transition-colors"
                >
                  Verify Credential &rarr;
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================== ACHIEVEMENTS SECTION ================== */}
      <motion.section
        id="achievements"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-20 border-t border-slate-100 dark:border-slate-900 z-10 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary-500 mb-2">Milestones</h2>
            <h3 className="text-3xl font-extrabold text-slate-850 dark:text-white">Key Achievements</h3>
            <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
          </div>

          <div className="max-w-4xl mx-auto">
            <Achievements achievementsList={portfolioData.achievements} />
          </div>
        </div>
      </motion.section>

      {/* ================== HOBBIES SECTION ================== */}
      <motion.section
        id="hobbies"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-20 border-t border-slate-100 dark:border-slate-900 z-10 relative bg-slate-50/50 dark:bg-slate-950/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary-500 mb-2">Interests</h2>
            <h3 className="text-3xl font-extrabold text-slate-850 dark:text-white">Extra-Curriculars</h3>
            <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {portfolioData.hobbies.map((hobby, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl text-center border border-slate-205/50 dark:border-slate-800/50 shadow-sm"
              >
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary-500 bg-primary-50 dark:bg-primary-950/25 px-3 py-1 rounded-full border border-primary-100/30 mb-2">
                  {hobby.name}
                </span>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-350">
                  {hobby.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================== CONTACT SECTION ================== */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-20 border-t border-slate-100 dark:border-slate-900 z-10 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-primary-500 mb-2">Connect</h2>
            <h3 className="text-3xl font-extrabold text-slate-850 dark:text-white">Get in Touch</h3>
            <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass p-8 md:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl pointer-events-none" />
              <h4 className="text-xl font-bold text-slate-850 dark:text-white mb-4">Contact Details</h4>
              <p className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                Feel free to reach out to me regarding Software Engineering opportunities, project collaborations, or general questions. I will do my best to get back to you as soon as possible.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <FiPhone className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-semibold">{portfolioData.personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <FiMail className="w-5 h-5 text-primary-500" />
                  <a
                    href={`mailto:${portfolioData.personalInfo.email}`}
                    className="text-sm font-semibold hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {portfolioData.personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex justify-center space-x-4 pt-6 border-t border-slate-200 dark:border-slate-800 max-w-xs mx-auto">
                {['linkedin', 'github', 'leetcode', 'codeforces'].map((platform) => (
                  <a
                    key={platform}
                    href={portfolioData.personalInfo[platform]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
                    title={platform}
                  >
                    {getSocialIcon(platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
