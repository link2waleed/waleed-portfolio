import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, RefreshCcw, Server, Users, ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const About: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide carousel timer (3.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const metrics = [
    { value: '6+', label: 'Production Apps', subtext: 'Live on App Store & Google Play' },
    { value: '2', label: 'Commercial Products', subtext: 'Webwrite Pvt Ltd Mobile & Backend' },
    { value: '100%', label: 'Store Approval', subtext: 'Zero Rejections' },
    { value: '2+ Years', label: 'React Native Development', subtext: 'Expo & Bare React Native CLI' }
  ];

  const highlights = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "React Native CLI & Expo",
      description: "Building production-grade iOS & Android mobile applications."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Integration",
      description: "Building and integrating secure APIs, databases, Firebase services, and business logic."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lead & Team Collaboration",
      description: "Leading mobile app projects from concept to team execution."
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: "Dual Store Publishing",
      description: "Complete deployment on Apple App Store & Google Play Store."
    }
  ];

  const currentProject = projects[currentIndex];

  return (
    <section id="about" className="py-20 bg-gray-900 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A React Native Developer delivering complete mobile solutions, from concept and development to deployment and long-term growth.
            </p>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="relative group bg-gradient-to-br from-[#12121a] via-[#161622] to-[#0d0d14] border border-gray-800/80 rounded-2xl p-5 text-center hover:border-blue-500/40 transition-all duration-300 shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-bold text-white mb-0.5">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-400 leading-tight">
                    {metric.subtext}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Building Production-Ready Mobile Apps
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                I specialize in building production-ready mobile applications with React Native (Expo & React Native CLI). My experience includes personal products, commercial applications, and client projects published on Google Play and the Apple App Store.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I also develop backend APIs with Node.js/NestJS, integrate Firebase services, and manage the complete release process from development to store deployment. Whether you're building an MVP or enhancing an existing product, I focus on clean, scalable, and reliable software.
              </p>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {['React Native', 'Expo', 'Firebase', 'Node.js/NestJS', 'REST APIs', 'App Store Deployment', 'Play Store Publishing'].map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Auto-Sliding Live Work Showcase */}
            <div className="relative">
              <div className="w-full min-h-[360px] bg-gradient-to-br from-[#12121a] via-[#161622] to-[#0d0d14] rounded-2xl border border-gray-800/80 p-6 flex flex-col justify-between overflow-hidden shadow-2xl relative group">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-70 blur-xl pointer-events-none" />

                {/* Top Badge & Counter */}
                <div className="flex items-center justify-between z-10 mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                    <Smartphone size={13} /> Featured Project
                  </span>
                  <span className="text-[11px] font-mono font-medium text-gray-400">
                    0{currentIndex + 1} / 0{projects.length}
                  </span>
                </div>

                {/* Animated Slide Content */}
                <div className="relative my-auto z-10 py-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentProject.id}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -25 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-col items-center text-center gap-3"
                    >
                      {/* App Icon */}
                      <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl bg-gray-900 flex-shrink-0 border border-gray-800 flex items-center justify-center">
                        <img
                          src={currentProject.icon}
                          alt={currentProject.name}
                          className={`w-full h-full ${currentProject.id === 'ubamm-wellness' ? 'object-contain p-2 bg-white' : 'object-cover'}`}
                        />
                      </div>

                      {/* Info */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {currentProject.name}
                        </h4>
                        <p className="text-xs text-indigo-400 font-medium mb-2">
                          {currentProject.role}
                        </p>
                        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 max-w-sm mx-auto">
                          {currentProject.shortDescription}
                        </p>
                      </div>

                      {/* Direct Link Button */}
                      <button
                        onClick={() => navigate(`/app/${currentProject.id}`)}
                        className="group/btn inline-flex items-center gap-1.5 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 rounded-full shadow-md hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 cursor-pointer mt-1"
                      >
                        <span>View Project Details</span>
                        <ArrowRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Dots Indicator */}
                <div className="flex justify-center items-center gap-1.5 z-10 pt-4 border-t border-gray-800/40">
                  {projects.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex
                        ? 'w-6 bg-gradient-to-r from-blue-500 to-purple-500'
                        : 'w-1.5 bg-gray-700 hover:bg-gray-500'
                        }`}
                      aria-label={`Go to ${p.name}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-400">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;