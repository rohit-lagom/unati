"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Leaf } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Service", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Pages", href: "#" },
    { name: "Contact", href: "#" },
  ];

  useEffect(() => {
    if (!mobileMenuOpen) return;

    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <button className="bg-green-500/90 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 border border-green-400/30">
              Get A Quote →
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden p-2 text-white hover:text-green-400 transition-colors bg-white/10 backdrop-blur-sm cursor-pointer rounded-lg"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu & Fullscreen Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Overlay that dims and blurs entire background */}
          <div
            className="absolute top-16 min-h-screen left-0 right-0       bg-gradient-to-tr from-green-900/95 via-green-800/85 to-green-900/95 backdrop-blur-lg z-50"
          />

          {/* Mobile Menu */}
          <div
            ref={menuRef}
            className="
              fixed top-20 left-2 right-2 z-50
              bg-black/10 border border-white/20 backdrop-blur-2xl
              px-4 rounded-lg shadow-xl shadow-green-900/30
            "
          >
            <nav className="py-4 mt-2 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white/90 hover:text-white py-3 transition-colors duration-300 border-b border-white/10 last:border-b-0"
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-6 bg-green-500/90 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer">
                Get A Quote →
              </button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
