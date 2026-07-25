import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code, User, Briefcase, MessageCircle, Home, Laptop, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Laptop },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  const socialLinks = [
    { 
      href: 'https://github.com/link2waleed', 
      icon: Github, 
      label: 'GitHub', 
      color: 'hover:text-white hover:bg-gray-800 hover:shadow-[0_0_14px_rgba(255,255,255,0.2)] border border-transparent hover:border-gray-700'
    },
    { 
      href: 'https://www.linkedin.com/in/waleed-ahmad-140024288', 
      icon: Linkedin, 
      label: 'LinkedIn', 
      color: 'hover:text-blue-400 hover:bg-blue-950/50 hover:shadow-[0_0_14px_rgba(59,130,246,0.35)] border border-transparent hover:border-blue-500/30'
    },
    { 
      href: 'mailto:waleedwaris1234@gmail.com', 
      icon: Mail, 
      label: 'Email', 
      color: 'hover:text-purple-400 hover:bg-purple-950/50 hover:shadow-[0_0_14px_rgba(168,85,247,0.35)] border border-transparent hover:border-purple-500/30'
    }
  ];

  const headerBg = isScrolled 
    ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-700/50' 
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
        <nav className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <Laptop size={18} className="text-white" />
              </div>
              <div className="hidden sm:flex flex-col justify-center">
                <div className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-none mb-1">
                  Waleed
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-gray-400 uppercase">
                  <MapPin size={12} className="text-purple-400" />
                  <span>Lahore &bull; Pakistan</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center bg-gray-800/80 backdrop-blur-xl border-gray-700/50 rounded-full px-2 py-2 shadow-lg border">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 group ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                        : 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/30'
                    }`}
                  >
                    <Icon size={16} className={`transition-all duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-110'
                    }`} />
                    <span>{item.label}</span>
                    
                    {/* {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                    )} */}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all duration-300 ${social.color} transform hover:scale-110 shadow-md hover:shadow-lg text-gray-300`}
                    title={social.label}
                  >
                    <Icon size={21} />
                  </a>
                );
              })}
            </div>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <MessageCircle size={16} />
                Let's Talk
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-full bg-gray-800/80 backdrop-blur-xl border-gray-700/50 hover:bg-gray-700/50 shadow-lg border transition-all duration-300 text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-gray-900/95 backdrop-blur-xl border-gray-700/50 rounded-3xl shadow-2xl border p-6">
            <div className="space-y-2 mb-6">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-medium text-sm transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                        : 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/30'
                    }`}
                  >
                    <Icon size={18} className={`transition-all duration-300 ${
                      isActive ? 'scale-110' : ''
                    }`} />
                    <span>{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-gray-700 pt-6">
              <div className="text-sm font-medium mb-3 text-gray-400">Connect with me</div>
              <div className="flex justify-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-all duration-300 ${social.color} transform hover:scale-110 shadow-md hover:shadow-lg text-gray-300`}
                      title={social.label}
                    >
                      <Icon size={21} />
                    </a>
                  );
                })}
              </div>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <MessageCircle size={16} />
                  Let's Talk
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;