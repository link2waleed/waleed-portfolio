import React from 'react';
import {
  Smartphone,
  Code,
  Database,
  Bug,
  Server,
  Layers,
  GitBranch,
  Terminal
} from 'lucide-react';
import AtomIcon from './AtomIcon';
import CheckCircleIcon from './CheckCircleIcon';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React Native (CLI)', icon: CheckCircleIcon, color: 'from-blue-600 to-indigo-600' },
    { name: 'React Native (Expo)', icon: AtomIcon, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', icon: Code, color: 'from-blue-500 to-blue-700' },
    { name: 'Firebase Services', icon: Database, color: 'from-orange-400 to-yellow-500' },
    { name: 'Node.js & REST APIs', icon: Server, color: 'from-emerald-600 to-green-700' },
    { name: 'NestJS', icon: Server, color: 'from-red-500 to-rose-600' },
    { name: 'Redux Toolkit', icon: Layers, color: 'from-purple-500 to-pink-500' },
    { name: 'JavaScript (ES6+)', icon: Terminal, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Google Play Publishing', icon: Smartphone, color: 'from-green-500 to-emerald-500' },
    { name: 'App Store Deployment', icon: Smartphone, color: 'from-gray-400 to-gray-600' },
    { name: 'Git & GitHub', icon: GitBranch, color: 'from-orange-500 to-red-600' },
    { name: 'Debugging & Performance Tuning', icon: Bug, color: 'from-red-500 to-orange-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technical Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The technologies and tools I use to develop, scale, and publish modern mobile applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-3 px-5 py-3.5 bg-gray-900/60 border border-gray-800/80 rounded-xl hover:border-indigo-500/40 hover:bg-gray-800/80 transition-all duration-300 shadow-md"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-inner`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="text-gray-200 font-medium text-sm">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;