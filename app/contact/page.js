"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm uppercase tracking-wider text-blue-500 dark:text-blue-400 font-semibold mb-3">GET IN TOUCH</h2>
            <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent">
              Let's Work Together
            </h3>
          </motion.div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-gray-200/50 dark:border-gray-600/50 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none text-gray-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-gray-200/50 dark:border-gray-600/50 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Message</label>
                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-gray-200/50 dark:border-gray-600/50 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none text-gray-900 dark:text-white resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-indigo-600/30 rounded-xl blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110" />
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15
                      }}
                      className="relative w-full px-8 py-4 text-white font-medium overflow-hidden rounded-xl group/btn border border-white/10"
                    >
                      {/* Animated Background */}
                      <div 
                        className="absolute inset-0 transition-all duration-700 group-hover/btn:scale-110" 
                        style={{ 
                          background: 'linear-gradient(-45deg, #3b82f6, #6366f1, #4f46e5, #3b82f6)',
                          backgroundSize: '400% 400%',
                          animation: 'sendBtnGradient 8s ease infinite'
                        }}
                      />
                      
                      {/* Particle Effects */}
                      <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 overflow-hidden">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-white/30 rounded-full"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `sendParticle${i + 1} 1.5s ease-in-out infinite`
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Content Container */}
                      <div className="relative flex items-center justify-center space-x-2">
                        {/* Text with Shine Effect */}
                        <motion.span 
                          className="relative font-semibold"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <span className="relative z-10">Send Message</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-45 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                        </motion.span>

                        {/* Animated Icon */}
                        <motion.div
                          animate={{ 
                            x: [0, 5, 0],
                            rotate: [0, 0, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          whileHover={{ 
                            rotate: [0, -45, 0],
                            scale: 1.1
                          }}
                        >
                          <svg 
                            className="w-5 h-5 transform transition-all duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.button>

                    {/* Add keyframes for animations */}
                    <style jsx global>{`
                      @keyframes sendBtnGradient {
                        0% { background-position: 0% 50% }
                        50% { background-position: 100% 50% }
                        100% { background-position: 0% 50% }
                      }
                      ${[...Array(5)].map((_, i) => `
                        @keyframes sendParticle${i + 1} {
                          0%, 100% {
                            transform: translate(0, 0) scale(1);
                            opacity: 0;
                          }
                          50% {
                            transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) scale(${Math.random() * 0.5 + 1});
                            opacity: 1;
                          }
                        }
                      `).join('\n')}
                    `}</style>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h4>
                
                <div className="space-y-6">
                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-sm text-gray-600 dark:text-gray-400">Email</h5>
                      <p className="text-gray-900 dark:text-white">contact@example.com</p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-sm text-gray-600 dark:text-gray-400">Phone</h5>
                      <p className="text-gray-900 dark:text-white">+1 (555) 123-4567</p>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-sm text-gray-600 dark:text-gray-400">Location</h5>
                      <p className="text-gray-900 dark:text-white">Dhaka, Bangladesh</p>
                    </div>
                  </motion.div>

                  {/* Social Links */}
                  <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                    <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Follow Me</h5>
                    <div className="flex space-x-4">
                      {["github", "twitter", "linkedin", "instagram"].map((social, index) => (
                        <motion.a
                          key={social}
                          href="#"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700/50 flex items-center justify-center group transition-colors duration-200 hover:bg-blue-500"
                        >
                          <Image
                            src={`/img/social-${social}.svg`}
                            alt={social}
                            width={20}
                            height={20}
                            className="opacity-60 group-hover:opacity-100 transition-opacity"
                          />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full filter blur-3xl"
        />
      </div>
    </section>
  );
};

export default ContactPage;