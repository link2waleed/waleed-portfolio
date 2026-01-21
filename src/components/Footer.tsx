import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import PlayStoreIcon from './PlayStoreIcon';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/link2waleed01-design',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/waleed-ahmad-140024288',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:waleedwaris1234@gmail.com',
      icon: Mail
    },
    {
      name: 'Play Store',
      href: 'https://play.google.com/store/apps/dev?id=6520144085717592112',
      icon: PlayStoreIcon
    }
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Brand */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Waleed Ahmad
            </h3>
            <p className="text-gray-400">Building production-ready React Native apps</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
                  title={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p className="flex items-center justify-center gap-1">
              © 2026 Waleed Ahmad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;