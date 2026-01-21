import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send, Github, Linkedin, MapPin, CheckCircle, AlertCircle, ExternalLink, Calendar, Video, Clock, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Toast Notification Component
const Toast: React.FC<{
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}> = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 right-6 z-50 animate-slide-in">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-sm border ${type === 'success'
        ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30'
        : 'bg-gradient-to-r from-red-500/20 to-rose-500/20 border-red-500/30'
        }`}>
        {type === 'success' ? (
          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle size={20} className="text-green-400" />
          </div>
        ) : (
          <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
            <AlertCircle size={20} className="text-red-400" />
          </div>
        )}
        <div>
          <p className={`font-semibold ${type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {type === 'success' ? 'Message Sent!' : 'Error'}
          </p>
          <p className="text-gray-300 text-sm">{message}</p>
        </div>
        <button onClick={onClose} className="ml-4 text-gray-400 hover:text-white transition-colors">
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // EmailJS configuration
      // IMPORTANT: Replace these with your actual EmailJS credentials
      // 1. Sign up at https://www.emailjs.com/
      // 2. Add Gmail service and connect waleedwaris1234@gmail.com
      // 3. Create template with variables: {{from_name}}, {{from_email}}, {{message}}, {{to_email}}
      // 4. Copy your credentials below
      const serviceId = 'service_r9b7dok';    // e.g., 'service_abc123'
      const templateId = 'template_c4udywu';  // e.g., 'template_xyz789'
      const publicKey = 'pFQJoP1A6PEmKDg8-';    // e.g., 'your_public_key'

      await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);

      setStatus('success');
      setToast({
        type: 'success',
        message: 'Thank you! We will contact you shortly.'
      });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
      setToast({
        type: 'error',
        message: 'Failed to send message. Please try again or email directly.'
      });

      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookMeeting = () => {
    // IMPORTANT: Replace with your Cal.com booking link
    // 1. Sign up at https://cal.com with waleedwaris1234@gmail.com
    // 2. Connect Google Calendar in Settings > Calendars
    // 3. Enable Google Meet in Settings > Conferencing
    // 4. Create event type (e.g., "30-min Consultation")
    // 5. Replace the URL below with your booking link
    window.open('https://cal.com/waleed-ahmad-6b7byd/30min', '_blank');
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/link2waleed01-design',
      icon: Github,
      color: 'hover:text-white hover:bg-gray-700'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/waleed-ahmad-140024288',
      icon: Linkedin,
      color: 'hover:text-blue-400 hover:bg-blue-500/10'
    },
    {
      name: 'Email',
      href: 'mailto:waleedwaris1234@gmail.com',
      icon: Mail,
      color: 'hover:text-red-400 hover:bg-red-500/10'
    },
    {
      name: 'Play Store',
      href: 'https://play.google.com/store/apps/dev?id=6520144085717592112',
      icon: ExternalLink,
      color: 'hover:text-green-400 hover:bg-green-500/10'
    }
  ];

  const meetingFeatures = [
    { icon: Video, text: 'Google Meet video call' },
    { icon: Calendar, text: 'Auto-syncs to calendars' },
    { icon: Clock, text: 'Pick your preferred time' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 md:pt-20 lg:pt-24">
      {/* Toast Notification */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to discuss your next React Native project? Let's bring your mobile app ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info & Social Links */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info Card */}
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-gray-400 mb-6">
                  I'm always excited to work on new projects. Feel free to reach out!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Mail size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white">waleedwaris1234@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <MapPin size={18} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white">Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 bg-gray-700/30 border border-gray-600/50 rounded-lg text-gray-300 transition-all duration-300 ${social.color}`}
                      >
                        <Icon size={18} />
                        <span className="text-sm font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {/* Hidden field for recipient email (used by EmailJS template) */}
                  <input type="hidden" name="to_email" value="waleedwaris1234@gmail.com" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Book a Meeting Section */}
          <div id="booking" className="mt-16">
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-800/80 via-gray-800/50 to-gray-900/80 border border-gray-700/50 rounded-2xl p-8 md:p-10">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                        <Calendar size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Book a Meeting
                      </h3>
                    </div>

                    <p className="text-gray-400 text-lg mb-6 max-w-xl">
                      Schedule a free consultation to discuss your project requirements, timeline, and how we can work together.
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-4 mb-6 lg:mb-0">
                      {meetingFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-700/30 border border-gray-600/30 rounded-full"
                          >
                            <Icon size={16} className="text-blue-400" />
                            <span className="text-sm text-gray-300">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex-shrink-0">
                    <button
                      onClick={handleBookMeeting}
                      className="group relative w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-xl font-semibold text-lg shadow-xl shadow-blue-500/25 hover:shadow-purple-500/25 transition-all duration-500 flex items-center justify-center gap-3"
                    >
                      <Video size={22} className="group-hover:scale-110 transition-transform" />
                      Schedule a Call
                      <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                        Free
                      </span>
                    </button>
                    <p className="text-center text-gray-500 text-sm mt-3">
                      30-minute video consultation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
        .bg-size-200 {
          background-size: 200% 100%;
        }
        .bg-pos-0 {
          background-position: 0% 0%;
        }
        .bg-pos-100 {
          background-position: 100% 0%;
        }
      `}</style>
    </section>
  );
};

export default Contact;