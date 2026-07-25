import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Layers, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
    const experiences = [
        {
            company: 'Webwrite Pvt Limited',
            role: 'Mobile & Full-Stack Developer',
            period: '2026 – Present',
            badge: 'Commercial Experience',
            badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
            icon: <img src="/assets/webwrite-icon.png" alt="Webwrite Logo" className="w-full h-full rounded-2xl object-cover" />,
            iconBg: 'bg-gray-900 border border-gray-700/60 p-0 rounded-2xl',
            highlights: [
                {
                    title: 'Commercial Products',
                    desc: <>Contributed to 2 commercial production applications (Ubamm Wellness & Fuel Stop), building mobile clients using <strong className="text-white font-semibold">React Native CLI</strong>, <strong className="text-white font-semibold">Redux Toolkit</strong>, and push notification schedulers.</>
                },
                {
                    title: 'NestJS Backend APIs',
                    desc: <>Engineered scalable <strong className="text-white font-semibold">NestJS APIs</strong>, JWT authentication services, and performant database models to support complex mobile application features.</>
                },
                {
                    title: 'Offline Sync & Tuning',
                    desc: <>Implemented offline data persistence, background synchronization, and performance optimizations to improve overall application reliability and user experience.</>
                }
            ]
        },
        {
            company: 'AJR Islamic App',
            role: 'Lead React Native Developer',
            period: '2026',
            badge: 'Published on iOS & Android',
            badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
            icon: <img src="/assets/ajr-icon.png" alt="AJR App Logo" className="w-full h-full rounded-2xl object-cover" />,
            iconBg: 'bg-gray-900 border border-gray-700/60 p-0 rounded-2xl',
            highlights: [
                {
                    title: 'Complete Lifecycle Leadership',
                    desc: <>Led the complete mobile development lifecycle in <strong className="text-white font-semibold">React Native (Expo Bare Workflow)</strong>, guiding a team from initial architecture to successful global store publication.</>
                },
                {
                    title: 'Firebase & Cloud Services',
                    desc: <>Integrated <strong className="text-white font-semibold">Firebase (Firestore & Cloud Functions)</strong>, <strong className="text-white font-semibold">Context API</strong> state management, complex UI animations, and automated notification triggers.</>
                },
                {
                    title: 'Dual Store Publishing',
                    desc: <>Published and maintained production releases live on both the <strong className="text-white font-semibold">Apple App Store</strong> and <strong className="text-white font-semibold">Google Play Store</strong>.</>
                }
            ]
        },
        {
            company: 'LetTech Partnership',
            role: 'Sole React Native Developer',
            period: '2025 – Present',
            badge: 'Copyright Owner',
            badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
            icon: <img src="/assets/lettech-icon.png" alt="LetTech Logo" className="w-full h-full rounded-full object-cover" />,
            iconBg: 'bg-gray-900 border border-gray-700/60 p-0 rounded-full',
            iconSize: 'w-16 h-16',
            highlights: [
                {
                    title: 'Solo Product Creation',
                    desc: <>Designed, engineered, and maintained Scan2PDF, Wallnex, and Happy Stack Tower from scratch using <strong className="text-white font-semibold">React Native (Expo)</strong>.</>
                },
                {
                    title: 'Custom Architecture & Modules',
                    desc: <>Engineered custom <strong className="text-white font-semibold">Kotlin native modules</strong>, optimized image caching pipelines, document scanning workflows, and Canvas-based arcade game physics.</>
                },
                {
                    title: 'Ownership & Store Distribution',
                    desc: <>Retained 100% copyright ownership of application source code while publishing and maintaining 3 production mobile apps on the <strong className="text-white font-semibold">Google Play Store</strong>.</>
                }
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-950 md:pt-20 lg:pt-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
                            <Layers size={16} />
                            Track Record
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Professional Experience
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Hands-on experience leading client projects, developing commercial platforms, and publishing solo products.
                        </p>
                    </div>

                    {/* Timeline Experience Cards */}
                    <div className="space-y-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group bg-gradient-to-br from-[#12121a] via-[#161622] to-[#0d0d14] border border-gray-800/80 hover:border-purple-500/40 rounded-3xl p-8 md:p-10 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                            >
                                {/* Background Ambient Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Header Info */}
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-8 pb-6 border-b border-gray-800/80 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className={`${exp.iconSize || 'w-14 h-14'} bg-gradient-to-br ${exp.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden`}>
                                            {exp.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                                                {exp.company}
                                            </h3>
                                            <p className="text-indigo-400 font-semibold text-base">
                                                {exp.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
                                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-full">
                                            <Calendar size={13} /> {exp.period}
                                        </span>
                                        <span className={`px-3.5 py-1.5 border rounded-full text-xs font-semibold ${exp.badgeColor}`}>
                                            {exp.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="grid md:grid-cols-3 gap-6 relative z-10">
                                    {exp.highlights.map((item, itemIdx) => (
                                        <div key={itemIdx} className="bg-gray-900/80 p-6 rounded-2xl border border-gray-800/60 hover:border-gray-700 transition-colors">
                                            <h4 className="text-white font-bold text-base mb-2.5 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-purple-400" />
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
