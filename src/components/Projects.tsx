import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { Smartphone } from 'lucide-react';

const Projects = () => {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
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
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                            <Smartphone size={16} />
                            Production Apps
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Real applications deployed on the Google Play Store, built with React Native.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="group relative cursor-pointer rounded-2xl overflow-hidden"
                                variants={cardVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                onClick={() => navigate(`/app/${project.id}`)}
                            >
                                {/* Card Inner */}
                                <div className="relative z-10 bg-[#12121a] border border-gray-800/50 rounded-2xl p-8 flex flex-col items-center text-center gap-5 transition-all duration-300 h-full group-hover:border-indigo-500/30 group-hover:bg-[#16161f]">
                                    {/* App Icon */}
                                    <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-lg bg-gray-900 flex-shrink-0">
                                        <img
                                            src={project.icon}
                                            alt={`${project.name} icon`}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/shapes/svg?seed=${project.id}&backgroundColor=6366f1,a855f7,ec4899`;
                                            }}
                                        />
                                    </div>

                                    {/* Project Info */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{project.shortDescription}</p>
                                    </div>

                                    {/* Tech Preview */}
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {project.techStack.slice(0, 3).map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs text-indigo-400"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA Group */}
                                    <div className="flex items-center gap-3 mt-auto pt-2">
                                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-700 rounded-full text-white text-sm font-medium transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:border-transparent">
                                            <span>View App</span>
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                        <a
                                            href={project.playStoreUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-11 h-11 bg-green-500/10 border border-green-500/30 rounded-full text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                                            onClick={(e) => e.stopPropagation()}
                                            aria-label="View on Play Store"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                {/* Card Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur-[40px] transition-opacity duration-300 z-0 group-hover:opacity-15" />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        className="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-8 text-center overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-3">Ready to Build Something Amazing?</h3>
                        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                            Let's collaborate on your next mobile app project and bring your ideas to life.
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
