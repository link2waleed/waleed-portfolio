import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Download, Play, ExternalLink, Check } from 'lucide-react';
import { projects } from '../data/projects';

const AppDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">App Not Found</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Productivity':
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            case 'Entertainment':
                return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
            case 'Religious':
                return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'Personalisation':
                return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
            default:
                return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        }
    };

    return (
        <div className="min-h-screen bg-gray-950">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={20} />
                            <span className="font-medium">Back to Portfolio</span>
                        </button>
                        <div className="flex items-center gap-3">
                            <a
                                href={project.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-500 hover:text-white transition-all"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                                </svg>
                                <span className="text-sm font-medium">Play Store</span>
                            </a>
                            {/* TODO: Add App Store link when available - replace button with <a href={project.appStoreUrl}> */}
                            <button
                                className="relative flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all cursor-pointer"
                                onClick={(e) => e.preventDefault()}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <span className="text-sm font-medium">App Store</span>
                                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] font-bold rounded-full shadow-lg">
                                    Soon
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Hero Section */}
                        <motion.div
                            className="grid lg:grid-cols-2 gap-12 items-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* App Info */}
                            <div>
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-28 h-28 rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
                                        <img
                                            src={project.icon}
                                            alt={project.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-4xl font-bold text-white mb-2">{project.name}</h1>
                                        <span className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full border ${getCategoryColor(project.category)}`}>
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                    {project.fullDescription}
                                </p>

                                {/* Stats */}
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                                            <Download size={20} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-white">{project.stats.downloads}</p>
                                            <p className="text-xs text-gray-500">Downloads</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                                            <Star size={20} className="text-yellow-400" />
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-white">{project.stats.rating}</p>
                                            <p className="text-xs text-gray-500">Rating</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                                            <ExternalLink size={20} className="text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-white">{project.stats.reviews}</p>
                                            <p className="text-xs text-gray-500">Reviews</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Download Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href={project.playStoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                                        </svg>
                                        Get on Google Play
                                    </a>
                                    {/* TODO: Add App Store link when available - replace button with:
                                        <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className="..."> */}
                                    <button
                                        className="relative flex items-center gap-3 px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl font-medium hover:bg-gray-700 transition-all cursor-pointer"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                        </svg>
                                        Get on App Store
                                        <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
                                            Soon
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Video Preview */}
                            <motion.div
                                className="relative flex items-center justify-center"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {/* Background gradient decoration */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl" />
                                <div className="absolute inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl" />

                                {/* Phone mockup container */}
                                <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 rounded-[2.5rem] p-3 shadow-2xl border border-gray-700/50">
                                    {/* Inner phone bezel */}
                                    <div className="relative bg-purple-950 rounded-[2rem] overflow-hidden shadow-inner">
                                        {/* Top notch/camera area */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-black rounded-b-xl z-10 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-gray-800 border border-gray-700" />
                                        </div>

                                        {/* Video */}
                                        <video
                                            src={project.demoVideo}
                                            controls
                                            poster={project.icon}
                                            className="w-full max-h-[500px] object-contain bg-black p-2"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>

                                    {/* Bottom home indicator */}
                                    <div className="flex justify-center pt-2 pb-1">
                                        <div className="w-28 h-1 bg-gray-600 rounded-full" />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Details Section */}
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Features */}
                            <motion.div
                                className="lg:col-span-2 bg-[#12121a] border border-gray-800/50 rounded-2xl p-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                        <Check size={20} className="text-white" />
                                    </div>
                                    Key Features
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {project.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-xl"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                        >
                                            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check size={12} className="text-white" />
                                            </div>
                                            <span className="text-gray-300">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Tech Stack */}
                            <motion.div
                                className="bg-[#12121a] border border-gray-800/50 rounded-2xl p-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
                                <div className="flex flex-wrap gap-3">
                                    {project.techStack.map((tech, index) => (
                                        <motion.span
                                            key={index}
                                            className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400 font-medium"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Back Button */}
                        <motion.div
                            className="text-center mt-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <button
                                onClick={() => navigate('/#projects')}
                                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl font-medium hover:bg-gray-700 transition-all"
                            >
                                <ArrowLeft size={18} />
                                Back to All Projects
                            </button>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AppDetail;
