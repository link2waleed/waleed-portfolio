import React from 'react';
import { ArrowDown, Download, Calendar, CheckCircle2, Award } from 'lucide-react';
import AtomIcon from './AtomIcon';

const AvailabilityBadge: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-emerald-500/30 rounded-full backdrop-blur-sm shadow-inner ${className}`}>
    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
    <span className="text-xs sm:text-sm font-semibold text-emerald-300 tracking-wide">
      Available for Freelance &amp; Contract Work
    </span>
  </div>
);

const StatCards: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 relative z-20 ${className}`}>
    <div className="group pointer-events-auto relative p-1 rounded-lg bg-gray-900/95 border border-emerald-500/30 backdrop-blur-md shadow-xl shadow-emerald-500/10 w-[110px] hover:border-emerald-400/50 hover:shadow-emerald-500/20 transition-all duration-300 cursor-default">
      <div className="flex flex-col items-center px-2 py-2 border border-dashed border-emerald-500/40 rounded-md">
        <Award size={20} className="text-emerald-400 mb-1 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        <span className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 leading-none">2+</span>
        <span className="text-[8px] font-bold tracking-widest text-gray-400 uppercase mt-1 whitespace-nowrap text-center">Years Exp</span>
      </div>
    </div>
    <div className="group pointer-events-auto relative p-1 rounded-lg bg-gray-900/95 border border-cyan-500/30 backdrop-blur-md shadow-xl shadow-cyan-500/10 w-[110px] hover:border-cyan-400/50 hover:shadow-cyan-500/20 transition-all duration-300 cursor-default">
      <div className="flex flex-col items-center px-2 py-2 border border-dashed border-cyan-500/40 rounded-md">
        <Award size={20} className="text-cyan-400 mb-1 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
        <span className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 leading-none">6+</span>
        <span className="text-[8px] font-black tracking-widest text-cyan-300 uppercase mt-1 whitespace-nowrap text-center">Apps Shipped</span>
      </div>
    </div>
    <div className="group pointer-events-auto relative p-1 rounded-lg bg-gray-900/95 border border-purple-400/30 backdrop-blur-md shadow-xl shadow-purple-500/10 w-[110px] hover:border-purple-400/50 hover:shadow-purple-400/20 transition-all duration-300 cursor-default">
      <div className="flex flex-col items-center px-2 py-2 border border-dashed border-purple-400/40 rounded-md h-full justify-center">
        <Award size={20} className="text-purple-400 mb-1 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
        <span className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 leading-none">100%</span>
        <span className="text-[8px] font-bold tracking-widest text-gray-300 uppercase mt-1 whitespace-nowrap text-center">Store Approval</span>
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden md:pt-14 lg:pt-16 bg-black">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping delay-1000" />
      </div>

      <div className="container mx-auto px-6 pt-12 pb-8 relative z-10">

        {/* MOBILE ONLY: Availability Badge */}
        <div className="flex justify-center mb-10 lg:hidden">
          <AvailabilityBadge />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center lg:items-end">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left animate-fadeIn delay-300 order-2 lg:order-1 pt-0 lg:pt-9">

            {/* Availability Badge */}
            <AvailabilityBadge className="hidden lg:inline-flex" />

            {/* Name */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-white bg-clip-text text-transparent">
                Waleed Ahmad
              </span>
            </h1>

            {/* Role Badge */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 border border-purple-500/30 rounded-xl backdrop-blur-md">
                <AtomIcon size={20} className="text-blue-400 animate-pulse" />
                <h2 className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  React Native Mobile Developer
                </h2>
              </div>
            </div>

            {/* Tagline */}
            <p className="mt-6 text-lg sm:text-xl font-bold text-blue-300 tracking-tight">
              Helping Businesses Build &amp; Launch Reliable Mobile Apps
            </p>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Cross-platform Mobile App Developer specializing in production-ready applications,
              Firebase integration, app store deployment, and long-term product maintenance for startups and businesses.
            </p>

            {/* Trusted By Section (Left Column) */}
            <div className="mt-6 lg:mt-10">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 opacity-0 animate-fadeIn delay-1000">
                <div className="h-px bg-gradient-to-r from-transparent to-gray-600 flex-1 max-w-[40px] lg:hidden"></div>
                <h3 className="text-xs sm:text-sm font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 uppercase">Trusted By Companies</h3>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 sm:gap-14">
                <div className="group relative flex items-center justify-center transition-all duration-300 cursor-pointer opacity-0 animate-scaleIn delay-1000">
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
                  <img src="/assets/webwrite-icon.png" alt="Webwrite" className="h-11 sm:h-14 rounded-xl sm:rounded-2xl object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-all duration-500 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] relative z-10" />
                </div>

                <div className="group relative flex items-center justify-center transition-all duration-300 cursor-pointer opacity-0 animate-scaleIn delay-1100">
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
                  <img src="/assets/ajr-icon.png" alt="AJR" className="h-11 sm:h-14 rounded-xl sm:rounded-2xl object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-all duration-500 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] relative z-10" />
                </div>

                <div className="group relative flex items-center justify-center transition-all duration-300 cursor-pointer opacity-0 animate-scaleIn delay-1200">
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
                  <img src="/assets/lettech-icon.png" alt="LetTech" className="h-12 sm:h-16 rounded-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-all duration-500 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.25)] relative z-10" />
                </div>
              </div>
            </div>


            {/* CTA BUTTONS */}
            <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 w-full">

              {/* Primary */}
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto group relative px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 active:scale-95 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                  Explore Projects
                  <ArrowDown size={18} className="mt-0.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                </div>
              </button>

              {/* Secondary */}
              <a
                href="/Waleed_Ahmad_CV.pdf"
                download="Waleed_Ahmad_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/[0.05] border border-white/20 hover:border-blue-400/60 text-gray-200 hover:text-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:bg-blue-400/10 backdrop-blur-sm cursor-pointer"
              >
                <Download size={18} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                Download CV
              </a>

              {/* Tertiary */}
              <button
                onClick={scrollToBooking}
                className="w-full sm:w-auto group px-6 py-3.5 border border-purple-500/30 hover:border-purple-400/60 text-purple-400 hover:text-purple-300 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:bg-purple-400/10 backdrop-blur-sm cursor-pointer"
              >
                <div className="flex items-center justify-center gap-2">
                  <Calendar size={18} />
                  Book Meeting
                </div>
              </button>

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative animate-fadeIn delay-200 order-1 lg:order-2 lg:pr-10 pt-10 lg:pt-20">
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <div className="group relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px]">

                {/* Glow */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />

                {/* Spinning ring */}
                <div className="absolute -inset-3 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full rounded-full animate-spin-slow" style={{
                    background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.6), rgba(236, 72, 153, 0.6), rgba(59, 130, 246, 0.6))',
                    maskImage: 'radial-gradient(circle at center, transparent 84%, black 86%, black 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, transparent 84%, black 86%, black 100%)'
                  }} />
                </div>

                {/* Avatar */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[3px] shadow-2xl z-20">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0c0d16] via-[#121422] to-[#0a0a10] p-1 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.35)_0%,rgba(168,85,247,0.22)_45%,transparent_75%)]" />
                    <img
                      src="/assets/waleed.png"
                      alt="Waleed Ahmad — React Native Developer"
                      loading="lazy"
                      className="w-full h-full rounded-full object-cover object-bottom relative z-10 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

              </div>

              {/* === STAT CARDS ROW (Below Avatar) === */}
              <StatCards className="mt-8 lg:mt-3" />
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-24 pb-6 animate-fadeIn delay-1000">
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
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-float-1 { animation: float-badge 5s ease-in-out infinite 0s; }
        .animate-float-2 { animation: float-badge 5s ease-in-out infinite 1.25s; }
        .animate-float-3 { animation: float-badge 5s ease-in-out infinite 2.5s; }
        .animate-float-4 { animation: float-badge 5s ease-in-out infinite 3.75s; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1100 { animation-delay: 1100ms; }
        .delay-1200 { animation-delay: 1200ms; }
      `}</style>
    </section>
  );
};

export default Hero;