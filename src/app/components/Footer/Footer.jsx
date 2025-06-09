import React from 'react';
import { Mail, Phone, MapPin, Facebook, X , Linkedin, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Our Team', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press Kit', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    },
    solutions: {
      title: 'Solutions',
      links: [
        { name: 'For Farmers', href: '#' },
        { name: 'For Enterprises', href: '#' },
        { name: 'For FPOs', href: '#' },
        { name: 'For Buyers', href: '#' },
        { name: 'API Documentation', href: '#' }
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Support', href: '#' },
        { name: 'Training Videos', href: '#' },
        { name: 'Community Forum', href: '#' },
        { name: 'System Status', href: '#' }
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Data Protection', href: '#' },
        { name: 'Compliance', href: '#' }
      ]
    }
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              UTHAAN
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
            Empowering agriculture through blockchain technology, connecting farmers to a transparent and profitable ecosystem.</p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/80">Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/80">hello@uthaan.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 glassmorphism-dark rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-lg font-bold mb-6 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
       

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">
                © 2025 UTHAAN. All rights reserved. 
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">10K+</div>
              <div className="text-white/60 text-sm">Active Farmers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
              <div className="text-white/60 text-sm">Partner Organizations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">₹50Cr+</div>
              <div className="text-white/60 text-sm">Transactions Processed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-1">25</div>
              <div className="text-white/60 text-sm">States Covered</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;