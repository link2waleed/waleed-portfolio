import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Sparkles, Code2, Calendar, Clock, Smartphone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import AtomIcon from './AtomIcon';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden md:pt-14 lg:pt-16 bg-black">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/20"></div>

        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Sparkle effects */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 pt-12 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Information, Copy & Actions (7 Cols on Desktop Left - Left-Aligned) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 animate-fadeIn delay-300 order-2 lg:order-1 pt-2 lg:pt-6">
            {/* Availability / Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-emerald-500/30 rounded-full backdrop-blur-sm shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-300 tracking-wide uppercase">
                Available for React Native Projects
              </span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Hi, I'm{' '}
              <span className="relative inline-block bg-gradient-to-r from-blue-400 via-purple-300 to-white bg-clip-text text-transparent">
                Waleed Ahmad
              </span>
            </h1>

            {/* Animated Role Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 border border-purple-500/30 rounded-xl backdrop-blur-md">
                <AtomIcon size={20} className="text-blue-400 animate-pulse" />
                <h2 className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Mobile & Full-Stack Developer
                </h2>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-bold text-blue-300 tracking-tight -mt-1">
              Helping Businesses Build & Launch Reliable Mobile Apps
            </p>

            {/* Concise Value Description */}
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Cross-platform React Native developer helping startups and businesses build, launch, and maintain <span className="text-blue-400 font-semibold">production-ready mobile applications</span> with seamless app store deployment.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto group relative px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 active:scale-95 cursor-pointer"
              >
                <div className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                  View My Work
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
                </div>
              </button>

              <a
                href="/Waleed_Ahmad_CV.pdf"
                download="Waleed_Ahmad_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-blue-400/50 text-blue-400 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:bg-blue-400/10 hover:border-blue-400 cursor-pointer"
              >
                <Download size={18} />
                Download CV
              </a>

              <button
                onClick={scrollToBooking}
                className="w-full sm:w-auto group relative px-6 py-3.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/50 text-purple-300 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:bg-purple-400/20 hover:border-purple-400 cursor-pointer"
              >
                <div className="relative flex items-center justify-center gap-2">
                  <Calendar size={18} />
                  Book Meeting
                </div>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-1 w-full">
              <a href="https://github.com/link2waleed" target="_blank" rel="noopener noreferrer"
                className="group relative w-11 h-11 bg-gray-900/90 rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-blue-500/20 border border-gray-700/60 hover:border-blue-400/60"
                aria-label="GitHub Profile">
                <Github size={20} className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/waleed-ahmad-140024288" target="_blank" rel="noopener noreferrer"
                className="group relative w-11 h-11 bg-gray-900/90 rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-purple-500/20 border border-gray-700/60 hover:border-purple-400/60"
                aria-label="LinkedIn Profile">
                <Linkedin size={20} className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>

            {/* Credibility Trust Signal */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-gray-400 pt-1 w-full">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
              <span>Apps published on Apple App Store & Google Play</span>
            </div>
          </div>

          {/* Right Column: Avatar Portrait surrounded by Pure Minimal Typography Stats (5 Cols on Desktop Right) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative animate-fadeIn delay-200 order-1 lg:order-2 mb-8 lg:mb-0 lg:pr-10 -mt-4 lg:-mt-6">
            <div className="group relative w-72 h-72 sm:w-[380px] sm:h-[380px] lg:w-[410px] lg:h-[410px]">

              {/* Outer Glow Backdrop */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />

              {/* Rotating Accent Ring */}
              <div className="absolute -inset-3 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full rounded-full border-2 border-transparent animate-spin-slow" style={{
                  background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.6), rgba(236, 72, 153, 0.6), rgba(59, 130, 246, 0.6))',
                  maskImage: 'radial-gradient(circle at center, transparent 84%, black 86%, black 100%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, transparent 84%, black 86%, black 100%)'
                }}></div>
              </div>

              {/* Main Circular Studio Avatar Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[3px] shadow-2xl z-20">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0c0d16] via-[#121422] to-[#0a0a10] p-1 relative flex items-center justify-center overflow-hidden">
                  {/* Studio Radial Spotlight behind head */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.35)_0%,rgba(168,85,247,0.22)_45%,transparent_75%)]" />

                  {/* Transparent Prominent Portrait */}
                  <img
                    src="/assets/waleed.png"
                    alt="Waleed Ahmad"
                    loading="lazy"
                    className="w-full h-full rounded-full object-cover object-bottom relative z-10 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Micro Tech Stack Chips */}
              {/* Left Top Pill: TypeScript */}
              <div className="absolute top-14 -left-8 sm:-left-14 lg:-left-16 z-30 pointer-events-none hidden sm:block animate-float-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-cyan-500/40 text-cyan-300 bg-[#090a10]/95 backdrop-blur-md shadow-lg shadow-black/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>TypeScript</span>
                </div>
              </div>

              {/* Left Mid Pill: React Native */}
              <div className="absolute top-1/2 -left-16 sm:-left-28 lg:-left-34 -translate-y-8 z-30 pointer-events-none hidden sm:block animate-float-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-blue-500/40 text-blue-300 bg-[#090a10]/95 backdrop-blur-md shadow-xl shadow-black/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                  <span>React Native</span>
                </div>
              </div>

              {/* Left Bottom Pill: NestJS */}
              <div className="absolute bottom-10 -left-8 sm:-left-14 lg:-left-16 z-30 pointer-events-none hidden sm:block animate-float-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-red-500/40 text-red-300 bg-[#090a10]/95 backdrop-blur-md shadow-lg shadow-black/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                  <span>NestJS</span>
                </div>
              </div>

              {/* Right Top Pill: REST APIs */}
              <div className="absolute top-14 -right-8 sm:-right-14 lg:-right-16 z-30 pointer-events-none hidden sm:block animate-float-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-indigo-500/40 text-indigo-300 bg-[#090a10]/95 backdrop-blur-md shadow-lg shadow-black/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                  <span>REST APIs</span>
                </div>
              </div>

              {/* Right Mid Pill: Firebase */}
              <div className="absolute top-1/2 -right-12 sm:-right-20 lg:-right-24 -translate-y-8 z-30 pointer-events-none hidden sm:block animate-float-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-amber-500/40 text-amber-300 bg-[#090a10]/95 backdrop-blur-md shadow-xl shadow-black/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  <span>Firebase</span>
                </div>
              </div>

              {/* Right Bottom Pill: Expo */}
              <div className="absolute bottom-10 -right-8 sm:-right-14 lg:-right-16 z-30 pointer-events-none hidden sm:block animate-float-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-teal-500/40 text-teal-300 bg-[#090a10]/95 backdrop-blur-md shadow-lg shadow-black/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                  <span>Expo</span>
                </div>
              </div>

              {/* Minimal Stat 1: Top-Left (2+ Experience) */}
              <div className="absolute -top-3 -left-2 sm:-left-8 z-30 text-center pointer-events-none group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-center gap-1 mb-0.5">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 leading-none">2+</p>
                </div>
                <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">Years Exp</p>
              </div>

              {/* Minimal Stat 2: Top-Right (6 Production Apps - Highlighted Selling Point) */}
              <div className="absolute -top-3.5 -right-2 sm:-right-8 z-30 text-center pointer-events-none group-hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-center gap-1 mb-0.5 scale-105">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                  <p className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 leading-none drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]">6+</p>
                </div>
                <p className="text-[9px] font-black tracking-widest text-cyan-300 uppercase">Apps Shipped</p>
              </div>

              {/* Minimal Stat 3: Bottom-Center (100% Store Approval) - Positioned below the avatar card */}
              <div className="absolute top-full mt-3 sm:mt-4 left-1/2 -translate-x-1/2 z-30 text-center pointer-events-none group-hover:translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-center gap-1 mb-0.5">
                  <CheckCircle2 size={14} className="text-purple-400 shrink-0" />
                  <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 leading-none">100%</p>
                </div>
                <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase whitespace-nowrap">Store Approval</p>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-8 animate-fadeIn delay-1000">
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-blue-400 transition-colors duration-300 animate-bounce cursor-pointer group"
            aria-label="Scroll to projects"
          >
            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase group-hover:text-blue-400 transition-colors">Explore</span>
            <ArrowDown size={18} />
          </button>
        </div>
      </div>



      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes float-badge {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float-1 {
          animation: float-badge 5s ease-in-out infinite 0s;
        }
        .animate-float-2 {
          animation: float-badge 5s ease-in-out infinite 1.25s;
        }
        .animate-float-3 {
          animation: float-badge 5s ease-in-out infinite 2.5s;
        }
        .animate-float-4 {
          animation: float-badge 5s ease-in-out infinite 3.75s;
        }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </section>
  );
};

export default Hero;