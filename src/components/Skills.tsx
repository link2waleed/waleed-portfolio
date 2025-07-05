import React from 'react';
import { Smartphone, Code, Database, Palette, Zap, Globe, Atom } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "React Native", level: 95 },
        { name: "Expo", level: 95 },
        { name: "iOS Development", level: 90 },
        { name: "Android Development", level: 90 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Java", level: 75 },
        { name: "C", level: 75 },
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Firebase", level: 90 },
        { name: "Supabase", level: 90 },
        { name: "SQL", level: 85 },
        { name: "MongoDB", level: 75 },
      ]
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      skills: [
        { name: "React Native UI", level: 95 },
        { name: "Figma", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Animations", level: 90 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 90 },
        { name: "Xcode", level: 85 }
      ]
    },
    {
      title: "AI Technologies",
      icon: <Atom className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      skills: [
        { name: "Bolt", level: 100 },
        { name: "Claude", level: 100 },
        { name: "Chatgpt", level: 100 },
        { name: "Banani", level: 100 }
      ]
    }
  ];

  const SkillBar: React.FC<{ skill: { name: string; level: number }, index: number }> = ({ skill, index }) => (
    <div className="mb-4 group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${skill.level}%`,
            animationDelay: `${index * 0.1}s`
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white md:pt-20 lg:pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across
              different technologies and platforms.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
              <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;