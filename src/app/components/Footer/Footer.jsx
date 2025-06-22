'use client';

import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
} from 'lucide-react';

const footerSections = [
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Careers', 'Press Kit', 'Blog'],
  },
  {
    title: 'Solutions',
    links: [
      'For Farmers',
      'For Enterprises',
      'For FPOs',
      'For Buyers',
      'API Documentation',
    ],
  },
  {
    title: 'Support',
    links: [
      'Help Center',
      'Contact Support',
      'Training Videos',
      'Community Forum',
      'System Status',
    ],
  },
];

const contactInfo = [
  {
    icon: MapPin,
    text: 'Bangalore, Karnataka, India',
  },
  {
    icon: Mail,
    text: 'hello@uthaan.com',
  },
  {
    icon: Phone,
    text: '+91 98765 43210',
  },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

const stats = [
  { label: 'Active Farmers', value: '10K+', color: 'text-green-400' },
  { label: 'Partner Organizations', value: '500+', color: 'text-blue-400' },
  { label: 'Transactions Processed', value: '₹50Cr+', color: 'text-purple-400' },
  { label: 'States Covered', value: '25', color: 'text-orange-400' },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-green-800/30 to-blue-900/30 blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 space-y-16 backdrop-blur-md bg-white/5 rounded-t-3xl border-t border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              UTHAAN
            </h2>
            <p className="text-white/80 leading-relaxed">
              Empowering agriculture through blockchain technology, connecting farmers to a transparent and profitable ecosystem.
            </p>

            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 pt-2">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-white/70 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map(({ title, links }) => (
            <div key={title}>
              <h3 className="text-lg font-bold mb-6">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-white/10 pt-8">
          {stats.map(({ label, value, color }) => (
            <div key={label}>
              <div className={`text-2xl font-bold mb-1 ${color}`}>{value}</div>
              <div className="text-white/60 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          © 2025 Farmily. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
