import React from 'react';
import { Smartphone, Code, Zap, Rocket, RefreshCcw } from 'lucide-react';
import AtomIcon from './AtomIcon';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Cross-Platform Development",
      description: "Building apps for iOS & Android with a single codebase"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code Architecture",
      description: "Maintainable, scalable, and well-documented solutions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Fast, responsive apps with smooth animations"
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: "End-to-End Delivery",
      description: "From concept to App Store & Play Store deployment"
    }
  ];

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
              A passionate React Native developer dedicated to crafting beautiful,
              high-performance mobile applications.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Crafting Mobile Excellence
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                With dedicated experience in React Native development, I specialize in building
                production-ready cross-platform applications. My expertise spans from Expo managed
                workflows to bare React Native implementations with native modules.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I offer comprehensive mobile development services including UI/UX implementation,
                backend integration, performance optimization, and complete app store deployment
                for both Google Play Store and Apple App Store.
              </p>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {['React Native Apps', 'UI/UX Design', 'API Integration', 'Store Deployment', 'Performance Tuning'].map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-gray-700/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <AtomIcon size={48} className="text-white" />
                  </div>
                  <p className="text-xl font-semibold text-white">Building the Future</p>
                  <p className="text-gray-400">Through thoughtful mobile development</p>
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