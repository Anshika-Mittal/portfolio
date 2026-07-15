import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheckCircle, FiLoader, FiUser, FiMail, FiMessageSquare, FiAlertCircle, FiInfo } from 'react-icons/fi';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [activationNotice, setActivationNotice] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    setActivationNotice(false);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${portfolioData.personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      const data = await response.json();

      // FormSubmit returns response.ok for verified emails.
      // If unverified, it returns status 400/403/422 but triggers the activation mail.
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.7 }
        });
        
        setTimeout(() => {
          setStatus('idle');
        }, 6000);
      } else if (response.status === 400 || response.status === 403 || response.status === 422 || (data && data.message && data.message.toLowerCase().includes('activate'))) {
        // This is a new email activation trigger
        setStatus('success');
        setActivationNotice(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("FormSubmit response error:", data);
        setStatus('error');
      }
    } catch (err) {
      console.error("FormSubmit network error:", err);
      setStatus('error');
    }
  };

  return (
    <div className="glass p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl pointer-events-none" />
      
      <h3 className="text-2xl font-black text-slate-850 dark:text-white mb-2">
        Send a Message
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-xs mb-8">
        Fill out the form below to send an email directly to my inbox.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name input */}
        <div className="relative group">
          <label htmlFor="form-name" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Full Name
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-550 transition-colors group-focus-within:text-primary-500">
              <FiUser className="w-5 h-5" />
            </span>
            <input
              type="text"
              name="name"
              id="form-name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              disabled={status === 'sending' || (status === 'success' && !activationNotice)}
              className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-white text-sm focus:outline-none transition-all focus:ring-4 ${
                errors.name
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                  : 'border-slate-200 dark:border-slate-800 focus:border-primary-500 focus:ring-primary-500/10 dark:focus:border-primary-500'
              }`}
            />
          </div>
          {errors.name && (
            <span className="text-[10px] text-red-500 font-semibold mt-1.5 block pl-1">
              {errors.name}
            </span>
          )}
        </div>

        {/* Email input */}
        <div className="relative group">
          <label htmlFor="form-email" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Email Address
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-555 transition-colors group-focus-within:text-primary-500">
              <FiMail className="w-5 h-5" />
            </span>
            <input
              type="email"
              name="email"
              id="form-email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
              disabled={status === 'sending' || (status === 'success' && !activationNotice)}
              className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-white text-sm focus:outline-none transition-all focus:ring-4 ${
                errors.email
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                  : 'border-slate-200 dark:border-slate-800 focus:border-primary-500 focus:ring-primary-500/10 dark:focus:border-primary-500'
              }`}
            />
          </div>
          {errors.email && (
            <span className="text-[10px] text-red-500 font-semibold mt-1.5 block pl-1">
              {errors.email}
            </span>
          )}
        </div>

        {/* Message Input */}
        <div className="relative group">
          <label htmlFor="form-message" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Your Message
          </label>
          <div className="relative">
            <span className="absolute left-4 top-4 text-slate-400 dark:text-slate-550 transition-colors group-focus-within:text-primary-500">
              <FiMessageSquare className="w-5 h-5" />
            </span>
            <textarea
              name="message"
              id="form-message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="What would you like to say?..."
              disabled={status === 'sending' || (status === 'success' && !activationNotice)}
              className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-white text-sm focus:outline-none transition-all focus:ring-4 resize-none ${
                errors.message
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                  : 'border-slate-200 dark:border-slate-800 focus:border-primary-500 focus:ring-primary-500/10 dark:focus:border-primary-500'
              }`}
            ></textarea>
          </div>
          {errors.message && (
            <span className="text-[10px] text-red-500 font-semibold mt-1.5 block pl-1">
              {errors.message}
            </span>
          )}
        </div>

        {/* Submit button */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          disabled={status === 'sending' || (status === 'success' && !activationNotice)}
          className={`w-full flex items-center justify-center space-x-2 py-4 rounded-xl font-bold text-sm transition-all shadow-md ${
            status === 'success' && !activationNotice
              ? 'bg-emerald-500 text-white cursor-default shadow-emerald-500/20'
              : 'bg-primary-600 hover:bg-primary-700 text-white shadow-primary-500/20 disabled:opacity-50 hover:shadow-lg'
          }`}
        >
          {status === 'sending' && (
            <>
              <FiLoader className="w-4 h-4 animate-spin" />
              <span>Sending Message...</span>
            </>
          )}
          {status === 'success' && !activationNotice && (
            <>
              <FiCheckCircle className="w-4 h-4" />
              <span>Sent Successfully!</span>
            </>
          )}
          {status === 'success' && activationNotice && (
            <>
              <FiInfo className="w-4 h-4" />
              <span>Activation Email Sent!</span>
            </>
          )}
          {status === 'error' && (
            <>
              <FiAlertCircle className="w-4 h-4" />
              <span>Failed. Retry?</span>
            </>
          )}
          {status === 'idle' && (
            <>
              <FiSend className="w-4 h-4" />
              <span>Submit Message</span>
            </>
          )}
        </motion.button>
      </form>

      {/* Success banner */}
      <AnimatePresence>
        {status === 'success' && !activationNotice && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-5 p-4 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30 rounded-xl text-center text-xs font-semibold"
          >
            Thank you! Your message has been sent successfully.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Activation notice banner */}
      <AnimatePresence>
        {status === 'success' && activationNotice && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 p-4 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 border border-blue-200/30 rounded-xl text-xs text-left leading-relaxed space-y-1.5"
          >
            <strong className="block text-sm font-bold">✉️ One-Time Activation Required</strong>
            <p>
              FormSubmit has sent an activation email to <strong>{portfolioData.personalInfo.email}</strong>. 
            </p>
            <p className="font-semibold">
              Please check your inbox (and spam folder) and click the "Activate" link. Subsequent form submissions will work instantly!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error banner */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-5 p-4 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 border border-red-200/30 rounded-xl text-center text-xs font-semibold"
          >
            An error occurred while sending your message. Please check your network connection or try again later.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
