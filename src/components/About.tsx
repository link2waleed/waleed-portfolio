import React from 'react';
import { Code, Smartphone, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Cross-Platform Expert",
      description: "Specialized in React Native development for both iOS and Android platforms"
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Modern Tech Stack",
      description: "Proficient in Expo Go, Expo Bare, TypeScript, and modern development tools"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "Performance Focused",
      description: "Building fast, responsive applications with smooth animations and interactions"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "User-Centric Design",
      description: "Creating intuitive and engaging user experiences that delight users"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white md:pt-20 lg:pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate React Native developer with extensive experience in creating 
              cross-platform mobile applications that deliver exceptional user experiences.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Crafting Mobile Excellence
              </h3>
              <p className="text-lg text-gray-600">
                With year of experience in React Native development, I specialize in building 
                high-quality cross-platform applications that work seamlessly on both iOS and Android. 
                My expertise spans from Expo Go projects to bare React Native implementations.
              </p>
              <p className="text-lg text-gray-600">
                I've successfully delivered complex applications including document scanning solutions, 
                wallpaper downloading platforms, and religious applications, each with unique challenges 
                and innovative solutions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  React Native
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Expo
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  JavaScript
                </span>
              </div>
            </div>

            {/* Right Column - Image/Visual */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-4 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <Code size={80} className="mx-auto mb-4" />
                    <p className="text-xl font-semibold">Building the Future</p>
                    <p className="text-lg opacity-90">One App at a Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  {highlight.title}
                </h4>
                <p className="text-gray-600">
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