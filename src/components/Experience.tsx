import React from 'react';
import { Briefcase, Award, FileCheck } from 'lucide-react';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-16 bg-gray-950">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Professional Experience
                        </h2>
                    </div>

                    {/* Experience Card */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Briefcase size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Collaboration with LetTech</h3>
                                <p className="text-gray-400">Mobile App Development</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Award size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-300">
                                    <span className="font-semibold text-white">Sole Developer</span> — I am the sole developer of all the applications listed in my portfolio.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <FileCheck size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-300">
                                    <span className="font-semibold text-white">Copyright Ownership</span> — I own the copyrights to all application source code.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <Briefcase size={18} className="text-green-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-300">
                                    <span className="font-semibold text-white">Publishing Rights</span> — LetTech holds the publishing rights for store distribution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
