import React from 'react';
import {
  Smartphone,
  Code,
  Database,
  Rocket,
  Bug,
  Server
} from 'lucide-react';
import AtomIcon from './AtomIcon';
import ViteIcon from './ViteIcon';
import CheckCircleIcon from './CheckCircleIcon';


const Skills: React.FC = () => {
  const skills = [
    { name: 'React Native', icon: AtomIcon, color: 'from-blue-500 to-cyan-500' },
    { name: 'Expo (Managed & Bare)', icon: ViteIcon, color: 'from-purple-500 to-pink-500' },
    { name: 'React Native CLI', icon: CheckCircleIcon, color: 'from-blue-600 to-blue-400' },
    { name: 'TypeScript', icon: Code, color: 'from-blue-500 to-blue-700' },
    { name: 'JavaScript', icon: Code, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Android Play Store', icon: Smartphone, color: 'from-blue-500 to-cyan-500' },
    { name: 'iOS App Store', icon: Smartphone, color: 'from-gray-400 to-gray-600' },
    { name: 'Debugging & Optimization', icon: Bug, color: 'from-red-500 to-orange-500' },
    { name: 'Firebase', icon: Database, color: 'from-orange-400 to-yellow-500' },
    { name: 'Supabase', icon: Database, color: 'from-green-400 to-emerald-600' },
    { name: 'Node.js & Express', icon: Server, color: 'from-green-600 to-green-800' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to build production-ready mobile applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group flex items-center gap-3 px-5 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-blue-500/30 hover:bg-gray-800/80 transition-all duration-300"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="text-gray-200 font-medium">{skill.name}</span>
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