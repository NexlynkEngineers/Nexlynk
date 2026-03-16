// components/Auth/AuthModal.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMail, FiLock, FiUser, FiBriefcase } from 'react-icons/fi';
import { FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // adjust path as needed

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ mode, email, password, fullName, companyName });
    // Add authentication logic here
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 300 } },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg mx-4 pointer-events-auto overflow-hidden border border-gray-100"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with gradient accent */}
              <div className="relative p-8 pb-0">
                <div className="absolute inset-x-0 top-0 h-2  to-gray-muted" />
                <button
                  onClick={onClose}
                  className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                  <FiX size={24} />
                </button>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <img src={logo} alt="NexlyLink" className="h-10 flex items-center justify-center w-auto" />
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-200 px-8">
                <button
                  onClick={() => setMode('login')}
                  className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
                    mode === 'login' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Sign In
                  {mode === 'login' && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeTab"
                    />
                  )}
                </button>
                <button
                  onClick={() => setMode('signup')}
                  className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
                    mode === 'signup' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Sign Up
                  {mode === 'signup' && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeTab"
                    />
                  )}
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-4">
                {mode === 'signup' && (
                  <>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        placeholder="Full name *"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                        required
                      />
                    </div>
                    <div className="relative">
                      <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        placeholder="Company name *"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                        required
                      />
                    </div>
                  </>
                )}
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    required
                  />
                </div>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    required
                  />
                </div>
                {mode === 'signup' && (
                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="password"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                      required
                    />
                  </div>
                )}

                {mode === 'login' && (
                  <div className="flex justify-end">
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition hover:-translate-y-0.5"
                >
                  {mode === 'login' ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              {/* Social logins */}
              <div className="px-8 pb-8">
                <div className="relative flex items-center justify-center mb-5">
                  <div className="border-t border-gray-200 flex-grow" />
                  <span className="mx-4 text-xs text-gray-400">OR CONTINUE WITH</span>
                  <div className="border-t border-gray-200 flex-grow" />
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition">
                    <FaGoogle className="text-red-500" size={18} />
                    <span className="text-sm font-medium text-gray-700">Google</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition">
                    <FaLinkedin className="text-blue-600" size={18} />
                    <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition">
                    <FaGithub className="text-gray-800" size={18} />
                    <span className="text-sm font-medium text-gray-700">GitHub</span>
                  </button>
                </div>
              </div>

              {/* Footer note */}
              <div className="px-8 pb-8 text-center text-xs text-gray-400">
                By continuing, you agree to our{' '}
                <a href="#" className="text-primary hover:underline">Terms</a> and{' '}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;