import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Sparkles, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden md:pt-16 lg:pt-18 bg-black">
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

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Profile Image - Fixed animations */}
          <div className="group mx-auto mb-8 w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 transform transition-all duration-500 hover:scale-105 animate-fadeIn delay-200">
            <div className="relative w-full h-full">
              {/* Main image container - completely isolated from animations */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[3px] z-20">
                <div className="w-full h-full rounded-full bg-black p-1">
                  <img
                    src="/public/assets/waleed.jpg"
                    alt="Waleed Ahmad"
                    loading="lazy"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Animated effects - positioned behind the image */}
              <div className="absolute -inset-4 z-10">
                {/* Rotating outer ring - behind image */}
                <div className="absolute inset-0 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-pink-400/50 animate-spin-slow" style={{
                    background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5), rgba(236, 72, 153, 0.5), rgba(59, 130, 246, 0.5))',
                    maskImage: 'radial-gradient(circle at center, transparent 85%, black 87%, black 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, transparent 85%, black 87%, black 100%)'
                  }}></div>
                </div>

                {/* Pulsing glow effect - behind image */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>

                {/* Additional glow layers */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Name with Premium Effects */}
          <div className="relative mb-6 animate-fadeIn delay-300">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 relative">
              <span className="relative inline-block group cursor-default">
                {/* Main text */}
                <span className="relative z-10 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-sm">
                  Waleed Ahmad
                </span>
                {/* Glow effect behind text */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 bg-clip-text text-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Waleed Ahmad
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 w-0 group-hover:w-full transition-all duration-1000 opacity-0 group-hover:opacity-100"></div>
              </span>
            </h1>
          </div>

          {/* Advanced Animated Title */}
          <div className="relative mb-8 animate-fadeIn delay-400">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm">
              <Code2 size={24} className="text-blue-400 animate-pulse" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                <span className="relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x blur-[1px] opacity-70"></span>
                  <span className="relative bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent font-extrabold">
                    React Native Developer
                  </span>
                </span>
              </h2>
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="space-y-4 mb-12 animate-fadeIn delay-500">
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
              Crafting Beautiful Cross-Platform Mobile Applications
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Specialized in React Native, Expo, and cross-platform development with a passion for creating
              user-friendly mobile experiences that work seamlessly on both iOS and Android.
            </p>
          </div>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeIn delay-700">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="relative flex items-center justify-center gap-2">
                <a
                  href="/Waleed_Ahmad_CV.pdf"
                  download="Waleed_Ahmad_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3
                   bg-gradient-to-r from-blue-600 to-purple-600
                   text-white rounded-lg font-semibold
                   hover:shadow-lg hover:scale-105 
                   transition-all duration-300 ease-in-out
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   active:scale-95"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>
            </button>
            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 bg-transparent border-2 border-blue-400/50 text-blue-400 rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:bg-blue-400/10 hover:border-blue-400"
            >
              <div className="relative flex items-center justify-center gap-2">
                View My Work
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
              </div>
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-6 animate-fadeIn delay-1000">
            <a href="https://github.com/itsWaleeddev" target="_blank" rel="noopener noreferrer"
              className="group relative w-16 h-16 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 border border-gray-700/50 hover:border-blue-400/50 backdrop-blur-md">
              <Github size={26} className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/5 group-hover:to-purple-400/5 rounded-2xl blur-sm transition-all duration-300"></div>
            </a>
            <a href="https://www.linkedin.com/in/waleed-ahmad-140024288?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwWL9qo3vS3ydKFUDxR74BQ%3D%3D" target="_blank" rel="noopener noreferrer"
              className="group relative w-16 h-16 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 border border-gray-700/50 hover:border-blue-400/50 backdrop-blur-md">
              <Linkedin size={26} className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/5 group-hover:to-purple-400/5 rounded-2xl blur-sm transition-all duration-300"></div>
            </a>
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-10 w-8 h-8 border border-purple-500/30 rounded-lg rotate-45 animate-bounce delay-1000"></div>
          <div className="absolute top-1/3 right-10 w-6 h-6 border border-blue-500/30 rounded-full animate-ping delay-2000"></div>
          <div className="absolute bottom-1/3 left-20 w-4 h-4 bg-emerald-500/30 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="group p-2 text-gray-500 hover:text-blue-400 transition-all duration-300">
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
            <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </button>
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
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        .delay-2000 {
          animation-delay: 2000ms;
        }
        .delay-3000 {
          animation-delay: 3000ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;