'use client';

import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Service', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Pages', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-green-500 rounded-full shadow-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Unati</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-300 relative group font-medium"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Get A Quote Button */}
          <div className="hidden lg:block">
            <button className="bg-green-500/90 backdrop-blur-sm hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 border border-green-400/30">
              Get A Quote →
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-green-400 transition-colors bg-white/10 backdrop-blur-sm rounded-lg"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg mt-2 overflow-hidden">
            <nav className="px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white/90 hover:text-white py-3 transition-colors duration-300 border-b border-white/10 last:border-b-0"
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-green-500/90 backdrop-blur-sm hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                Get A Quote →
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}