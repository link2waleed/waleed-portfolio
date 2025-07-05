import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code, User, Briefcase, MessageCircle, Home, Sparkles, Laptop } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Determine if we should use dark theme (only on home section)
  const isDarkTheme = activeSection === 'home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
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
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  const socialLinks = [
    { 
      href: 'https://github.com/itsWaleeddev', 
      icon: Github, 
      label: 'GitHub', 
      color: isDarkTheme 
        ? 'hover:text-gray-100 hover:bg-gray-700/50' 
        : 'hover:text-gray-900 hover:bg-gray-100' 
    },
    { 
      href: 'https://www.linkedin.com/in/waleed-ahmad-140024288?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwWL9qo3vS3ydKFUDxR74BQ%3D%3D', 
      icon: Linkedin, 
      label: 'LinkedIn', 
      color: isDarkTheme 
        ? 'hover:text-blue-400 hover:bg-blue-900/30' 
        : 'hover:text-blue-600 hover:bg-blue-100' 
    },
    { 
      href: 'mailto:waleedwaris1234@gmail.com', 
      icon: Mail, 
      label: 'Email', 
      color: isDarkTheme 
        ? 'hover:text-red-400 hover:bg-red-900/30' 
        : 'hover:text-red-600 hover:bg-red-100' 
    }
  ];

  // Dynamic styles based on theme
  const headerBg = isDarkTheme 
    ? (isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-700/50' 
        : 'bg-transparent')
    : (isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
        : 'bg-transparent');

  const logoTextColor = isDarkTheme ? 'text-white' : '';
  const logoSubtextColor = isDarkTheme ? 'text-gray-300' : 'text-gray-500';

  const navBg = isDarkTheme 
    ? 'bg-gray-800/80 backdrop-blur-xl border-gray-700/50' 
    : 'bg-white/80 backdrop-blur-xl border-gray-200/50';

  const navTextColor = isDarkTheme ? 'text-gray-300' : 'text-gray-700';
  const navHoverColor = isDarkTheme 
    ? 'hover:text-blue-400 hover:bg-blue-900/30' 
    : 'hover:text-blue-600 hover:bg-blue-50';

  const mobileMenuBg = isDarkTheme 
    ? 'bg-gray-900/95 backdrop-blur-xl border-gray-700/50' 
    : 'bg-white/95 backdrop-blur-xl border-gray-200/50';

  const mobileBorderColor = isDarkTheme ? 'border-gray-700' : 'border-gray-200';
  const mobileTextColor = isDarkTheme ? 'text-gray-400' : 'text-gray-600';

  const mobileButtonBg = isDarkTheme 
    ? 'bg-gray-800/80 backdrop-blur-xl border-gray-700/50 hover:bg-gray-700/50' 
    : 'bg-white/80 backdrop-blur-xl border-gray-200/50 hover:bg-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
        <nav className="flex items-center justify-between">
          
          {/* Modern Logo */}
          <div className="group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <Laptop size={18} className="text-white" />
              </div>
              <div className="hidden sm:block">
                <div className={`text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ${logoTextColor}`}>
                  Waleed
                </div>
                <div className={`text-xs font-medium -mt-1 ${logoSubtextColor}`}>
                  React Native Developer
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className={`flex items-center ${navBg} rounded-full px-2 py-2 shadow-lg border`}>
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
                        : `${navTextColor} ${navHoverColor}`
                    }`}
                  >
                    <Icon size={16} className={`transition-all duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-110'
                    }`} />
                    <span>{item.label}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all duration-300 ${social.color} transform hover:scale-110 shadow-md hover:shadow-lg ${
                      isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                    }`}
                    title={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            
            {/* CTA Button */}
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
            className={`lg:hidden p-3 rounded-full ${mobileButtonBg} shadow-lg border transition-all duration-300 ${
              isDarkTheme ? 'text-gray-300' : 'text-gray-700'
            }`}
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
          <div className={`${mobileMenuBg} rounded-3xl shadow-2xl border p-6`}>
            {/* Mobile Navigation */}
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
                        : `${navTextColor} ${navHoverColor}`
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

            {/* Mobile Social Links */}
            <div className={`border-t ${mobileBorderColor} pt-6`}>
              <div className={`text-sm font-medium mb-3 ${mobileTextColor}`}>Connect with me</div>
              <div className="flex justify-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-all duration-300 ${social.color} transform hover:scale-110 shadow-md hover:shadow-lg ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                      }`}
                      title={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
              
              {/* Mobile CTA */}
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