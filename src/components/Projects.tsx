import React, { useState } from 'react';
import { ExternalLink, Github, Scan, Download, BookOpen, Star, Users, Smartphone, Lock, Play, Zap, Palette, Heart } from 'lucide-react';

const Projects: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Function to open video in new tab
  const openVideoDemo = (videoPath: string) => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Project Demo Video</title>
          <style>
            body {
              margin: 0;
              padding: 20px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
            .video-container {
              background: white;
              border-radius: 20px;
              padding: 30px;
              box-shadow: 0 25px 50px rgba(0,0,0,0.2);
              max-width: 90vw;
              max-height: 90vh;
              text-align: center;
            }
            video {
              width: 100%;
              height: auto;
              border-radius: 15px;
              box-shadow: 0 10px 25px rgba(0,0,0,0.1);
              max-height: 70vh;
            }
            h1 {
              color: #333;
              margin-bottom: 20px;
              font-size: 2rem;
            }
            .close-btn {
              position: absolute;
              top: 20px;
              right: 20px;
              background: rgba(255,255,255,0.9);
              border: none;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              font-size: 20px;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.3s ease;
            }
            .close-btn:hover {
              background: rgba(255,255,255,1);
              transform: scale(1.1);
            }
          </style>
        </head>
        <body>
          <button class="close-btn" onclick="window.close()">×</button>
          <div class="video-container">
            <h1>Project Demo</h1>
            <video controls autoplay>
              <source src="${videoPath}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </body>
        </html>
      `);
    }
  };

  const projects = [
    {
      title: "Scan2PDF",
      description: "Advanced document scanning application with OCR capabilities, e-signature functionality, and document branding features.",
      image: "/assets/scan2pdf.png",
      category: "Productivity",
      features: [
        "Document scanning to PDF",
        "OCR text extraction in 5 languages",
        "E-signature functionality",
        "Watermark and branding",
        "Multi-language support"
      ],
      technologies: ["React Native", "Expo", "OCR API", "PDF Generation", "TypeScript"],
      stats: {
        downloads: "100+",
        rating: "4.9",
        reviews: "30+"
      },
      links: {
        demo: "/videos/scan2pdf-demo.mp4",
        github: "https://github.com/itsWaleeddev",
        playStore: "https://play.google.com/store/apps/details?id=com.lettech.scanner",
        appStore: "https://apps.apple.com/app/scan2pdf/id1234567890"
      },
      privateRepo: "scan2pdf",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Wallpaper Downloader",
      description: "Beautiful wallpaper application featuring high-quality images with daily updates and smooth animations.",
      image: "/assets/wallpaper.jpg",
      category: "Entertainment",
      features: [
        "High-quality wallpapers",
        "Daily new wallpapers",
        "Beautiful animations",
        "Categories and search",
        "Download management"
      ],
      technologies: ["React Native", "Expo", "Image Processing", "Animations", "JavaScript"],
      stats: {
        downloads: "1000+",
        rating: "4.9",
        reviews: "40+"
      },
      links: {
        demo: "/videos/wallpaper-demo.mp4",
        github: "https://github.com/itsWaleeddev",
        playStore: "https://play.google.com/store/apps/details?id=com.waleed.wallpaper",
        appStore: "https://apps.apple.com/app/wallpaper-downloader/id1234567891"
      },
      privateRepo: "wallpaper-gallery",
      gradient: "from-purple-500 to-teal-600"
    },
    {
      title: "Quran App",
      description: "Comprehensive Quran reading application with translations, tafseer, and audio recitation features.",
      image: "/assets/quran.png",
      category: "Religious",
      features: [
        "Complete Quran with Ayahs",
        "Multiple translations",
        "Tafseer (commentary)",
        "Audio recitation",
        "Bookmarking system"
      ],
      technologies: ["React Native", "Expo", "Audio Streaming", "Database", "TypeScript"],
      stats: {
        downloads: "500+",
        rating: "4.9",
        reviews: "50+"
      },
      links: {
        demo: "/videos/quran-demo.mp4",
        github: "https://github.com/itsWaleeddev",
        playStore: "https://play.google.com/store/apps/details?id=com.waleed.quran",
        appStore: "https://apps.apple.com/app/quran-reader/id1234567892"
      },
      privateRepo: "quran-app",
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Productivity':
        return <Zap size={18} className="text-blue-500" />;
      case 'Entertainment':
        return <Palette size={18} className="text-purple-500" />;
      case 'Religious':
        return <Heart size={18} className="text-green-500" />;
      default:
        return <Smartphone size={18} className="text-gray-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Productivity':
        return 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200 shadow-blue-100';
      case 'Entertainment':
        return 'bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 border-purple-200 shadow-purple-100';
      case 'Religious':
        return 'bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-200 shadow-green-100';
      default:
        return 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border-gray-200 shadow-gray-100';
    }
  };

  const ProjectCard: React.FC<{ project: typeof projects[0], index: number }> = ({ project, index }) => (
    <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
      {/* Project Image Header - Clean with minimal overlay */}
      <div className="relative h-48 overflow-hidden">
        <div className={`aspect-[20/10] ${project.title === 'Scan2PDF' ? 'bg-[#02023e]' : 'bg-gradient-to-br from-gray-100 to-gray-200'}`}>
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full ${project.title === 'Wallpaper Downloader' ? 'object-cover' : 'object-contain'} transition-transform duration-700 group-hover:scale-105`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
        </div>
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => openVideoDemo(project.links.demo)}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/30 hover:scale-110 group/demo"
          >
            <Play size={14} className="group-hover/demo:scale-110 transition-transform duration-300" />
          </button>
          <a href={project.links.github} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/30 hover:scale-110">
            <Github size={14} />
          </a>
        </div>
      </div>

      {/* App Title Section - Reduced padding */}
      <div className="px-6 py-2 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 text-center">{project.title}</h3>
      </div>

      {/* Project Content - Reduced top padding */}
      <div className="p-4 pt-3">
        {/* Enhanced Category Display */}
        <div className="mb-4">
          <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-full border-2 ${getCategoryColor(project.category)} font-bold text-sm shadow-lg transition-all duration-300 hover:scale-105`}>
            <div className="flex items-center justify-center w-8 h-8 bg-white/70 backdrop-blur-sm rounded-full shadow-sm">
              {getCategoryIcon(project.category)}
            </div>
            <span className="font-semibold tracking-wide">{project.category}</span>
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-4">
          <p className="text-gray-600 leading-relaxed text-base">{project.description}</p>
        </div>

        {/* Private Repo Badge */}
        <div className="mb-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              🔒 Private Repo
            </span>
            <span className="text-sm text-gray-600 font-mono bg-gray-200 px-3 py-1 rounded-full">
              {project.privateRepo}
            </span>
          </div>
        </div>

        {/* Watch Demo Section */}
        <div className="mb-4">
          <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Play size={18} className="text-purple-600" />
            Watch Demo
          </h4>
          <button
            onClick={() => openVideoDemo(project.links.demo)}
            className="w-full group/demo flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Play size={20} className="group-hover/demo:scale-110 transition-transform duration-300" />
            <span>Play Demo Video</span>
          </button>
        </div>

        {/* Download Now Section */}
        <div className="mb-4">
          <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Download size={18} className="text-blue-600" />
            Download Now
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <a
              href={project.links.playStore}
              className="group/store flex flex-col items-center p-4 bg-gradient-to-br from-green-50 to-green-100
             hover:from-green-100 hover:to-green-200 border-2 border-green-200 rounded-2xl
             transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div
                className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3
               group-hover/store:scale-110 transition-transform duration-300 shadow-lg"
              >
                <img
                  src="/assets/playstore.png"
                  alt="Google Play Store"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-bold text-green-700 text-center">
                Google Play
              </span>
            </a>

            <a
              href={project.links.appStore}
              className="group/store flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-2 border-blue-200 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3 group-hover/store:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#000000" />
                </svg>
              </div>
              <span className="text-sm font-bold text-blue-700 text-center">App Store</span>
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-lg font-bold text-gray-800 mb-3">Key Features</h4>
          <ul className="space-y-2">
            {project.features.slice(0, 3).map((feature, featureIndex) => (
              <li key={featureIndex} className="text-sm text-gray-700 flex items-center">
                <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800 flex items-center justify-center gap-2 mb-1">
              <Download size={16} className="text-blue-500" />
              {project.stats.downloads}
            </div>
            <div className="text-xs text-gray-500 font-medium">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800 flex items-center justify-center gap-2 mb-1">
              <Star size={16} className="text-yellow-500" />
              {project.stats.rating}
            </div>
            <div className="text-xs text-gray-500 font-medium">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800 flex items-center justify-center gap-2 mb-1">
              <Users size={16} className="text-green-500" />
              {project.stats.reviews}
            </div>
            <div className="text-xs text-gray-500 font-medium">Reviews</div>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 text-sm font-bold mb-6 shadow-lg">
              <Smartphone size={20} />
              Mobile Applications Portfolio
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of React Native applications, each crafted with attention to detail
              and built to deliver exceptional user experiences across iOS and Android platforms.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold mb-6">
                <Lock size={18} />
                Private Repository Access Available
              </div>
              <h3 className="text-4xl font-black mb-6">Ready to Build Something Amazing?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's collaborate on your next React Native project and bring your mobile app ideas to life
                with cutting-edge technology and stunning design.
              </p>
              <button className="px-12 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50"
                onClick={() => scrollToSection('contact')} >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;