import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `Hi, I'm ${formData.name}!

📧 Email: ${formData.email}
📋 Subject: ${formData.subject}

💬 Message:
${formData.message}

---
Sent from your portfolio contact form`;

    // Your WhatsApp number (replace with your actual number)
    const whatsappNumber = '923044204371'; // Your number without + sign

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Direct WhatsApp contact handler
  const handleDirectWhatsApp = () => {
    const whatsappNumber = '923044204371';
    const message = 'Hi! I found your portfolio and would like to discuss a project with you.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your next React Native project? I'd love to hear from you and
              help bring your mobile app ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
                <p className="text-gray-600 mb-8">
                  I'm always excited to work on new projects and collaborate with fellow developers.
                  Whether you have a project in mind or just want to chat about React Native development,
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {/* WhatsApp - Primary Contact */}
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-sm border-2 border-green-200">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    {/* <MessageCircle className="w-6 h-6 text-white" /> */}
                    <img
                    src='/public/assets/whatsapp.png'
                    className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                      WhatsApp
                      <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Primary</span>
                    </h4>
                    <p className="text-gray-600">+92 3044204371</p>
                  </div>
                  <button
                    onClick={handleDirectWhatsApp}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                  >
                    Chat Now
                  </button>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">waleedwaris1234@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+92 3044204371</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/itsWaleeddev" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300 text-gray-600 hover:text-blue-600">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/waleed-ahmad-140024288?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwWL9qo3vS3ydKFUDxR74BQ%3D%3D" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300 text-gray-600 hover:text-blue-600">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://www.instagram.com/waleed_waris_here?igsh=MXI0N2ZvdDFudGxzbQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300 text-gray-600 hover:text-blue-600">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
            {/* border-t-4 border-green-500 */}
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  {/* <MessageCircle className="w-5 h-5 text-white" /> */}
                   <img
                    src='/public/assets/whatsapp.png'
                    className="w-full h-full object-contain"
                    />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Send WhatsApp Message</h3>
                  <p className="text-sm text-gray-600"> we will contact you shortly</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Send via WhatsApp
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    🚀 Your message will be formatted and sent via WhatsApp
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;