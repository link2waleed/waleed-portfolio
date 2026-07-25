import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { Smartphone, Clock } from 'lucide-react';

type FilterType = 'all' | 'freelance' | 'company' | 'personal';

const Projects = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    const filteredProjects = projects.filter((project) => {
        if (activeFilter === 'all') return true;
        return project.projectType === activeFilter;
    });

    const filterTabs: { id: FilterType; label: string; count: number }[] = [
        { id: 'all', label: 'All Projects', count: projects.length },
        { id: 'freelance', label: 'Lead & Client Work', count: projects.filter(p => p.projectType === 'freelance').length },
        { id: 'company', label: 'Webwrite Pvt Ltd', count: projects.filter(p => p.projectType === 'company').length },
        { id: 'personal', label: 'Personal Apps', count: projects.filter(p => p.projectType === 'personal').length },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.35 }
        }
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="projects" className="py-20 bg-[#0d0d14] md:pt-20 lg:pt-24">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                            <Smartphone size={16} />
                            Featured Portfolio
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Production applications live on App Store & Google Play Store, client work, and company engineering.
                        </p>
                    </motion.div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2.5 mb-12">
                        {filterTabs.map((tab) => {
                            const isActive = activeFilter === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveFilter(tab.id)}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                        isActive
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                                            : 'bg-gray-900/80 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
                                    }`}
                                >
                                    <span>{tab.label}</span>
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                                        isActive ? 'bg-white/20 text-white' : 'bg-gray-800 text-gray-400'
                                    }`}>
                                        {tab.count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Projects Grid */}
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={activeFilter}
                    >
                        <AnimatePresence mode="wait">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    className="group relative cursor-pointer rounded-2xl overflow-hidden flex flex-col"
                                    variants={cardVariants}
                                    whileHover={{ y: -6 }}
                                    onClick={() => navigate(`/app/${project.id}`)}
                                    layout
                                >
                                    {/* Card Inner */}
                                    <div className="relative z-10 bg-[#12121a] border border-gray-800/50 rounded-2xl p-7 flex flex-col text-center gap-4 transition-all duration-300 h-full group-hover:border-indigo-500/40 group-hover:bg-[#16161f]">
                                        
                                        {/* App Icon */}
                                        <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-xl bg-gray-900 mx-auto flex-shrink-0 border border-gray-800 group-hover:border-indigo-500/40 transition-colors flex items-center justify-center">
                                            <img
                                                src={project.icon}
                                                alt={`${project.name} icon`}
                                                className={`w-full h-full ${project.id === 'ubamm-wellness' ? 'object-contain p-2 bg-white' : 'object-cover'}`}
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/shapes/svg?seed=${project.id}&backgroundColor=6366f1,a855f7,ec4899`;
                                                }}
                                            />
                                        </div>

                                        {/* Project Info */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
                                                {project.name}
                                            </h3>
                                            <p className="text-xs text-indigo-400/90 font-medium mt-1 mb-2">
                                                {project.role}
                                            </p>
                                            <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                                                {project.shortDescription}
                                            </p>
                                        </div>

                                        {/* Tech Preview */}
                                        <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                                            {project.techStack.slice(0, 3).map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-0.5 bg-gray-900 border border-gray-800 rounded-md text-[11px] font-medium text-gray-400"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Bar */}
                                        <div className="flex items-center justify-center gap-2 mt-auto pt-3 border-t border-gray-800/40">
                                            <button className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-transparent border border-gray-700 rounded-full text-white text-xs font-medium transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:border-transparent">
                                                <span>View App</span>
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                                                >
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </button>

                                            {/* App Store Button (if available) */}
                                            {project.appStoreUrl && (
                                                <a
                                                    href={project.appStoreUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center w-9 h-9 bg-gray-800 border border-gray-700 rounded-full text-gray-200 transition-all duration-300 hover:bg-gray-100 hover:text-black hover:scale-110"
                                                    onClick={(e) => e.stopPropagation()}
                                                    aria-label="View on App Store"
                                                    title="View on App Store"
                                                >
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                                    </svg>
                                                </a>
                                            )}

                                            {/* Play Store Button (if available) */}
                                            {project.playStoreUrl && (
                                                <a
                                                    href={project.playStoreUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center w-9 h-9 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-110"
                                                    onClick={(e) => e.stopPropagation()}
                                                    aria-label="View on Play Store"
                                                    title="View on Play Store"
                                                >
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                                                    </svg>
                                                </a>
                                            )}

                                            {!project.isPublished && (
                                                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-full">
                                                    <Clock size={11} /> Pre-Launch
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Card Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur-[40px] transition-opacity duration-300 z-0 group-hover:opacity-15" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        className="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-8 text-center overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-3">Looking for a Senior Mobile or Full-Stack Engineer?</h3>
                        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                            From scratch development to App Store & Play Store publishing, let's turn your vision into high-quality software.
                        </p>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                        >
                            Get In Touch
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
