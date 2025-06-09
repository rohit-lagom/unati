'use client';

import { ArrowRight, CheckCircle, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-green-800/30 to-emerald-900/40">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-br from-green-900/60 via-green-800/50 to-emerald-900/60"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold text-white leading-tight mb-6">
              UTHAAN -{' '}
              <span className="text-green-400">Empowering Agriculture with Blockchain</span>
            </h1>

            <p className="text-[clamp(1rem,2.2vw,1.25rem)] text-white/85 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              UTHAAN (Unati Tech for Holistic Agri-Advancement & Networking Pvt. Ltd.) pioneers a
              future-ready agricultural ecosystem. From farmers to innovators, we connect
              stakeholders through blockchain-powered trust, data-driven decisions, and inclusive
              agri-solutions.
            </p>

            {/* Feature Points */}
            <div className="space-y-4 mb-10">
              {[
                'Blockchain-based transparency for all stakeholders',
                'Smart data-led decision-making in farming',
                'Seamless connectivity across the agri-value chain',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 justify-center lg:justify-start">
                  <CheckCircle className="text-green-400 w-5 h-5 flex-shrink-0 mt-1" />
                  <span className="text-white/90 text-[clamp(0.95rem,1.1vw,1.125rem)]">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-green-500/90 backdrop-blur-sm hover:bg-green-600 text-white px-6 py-3 text-base rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 inline-flex items-center justify-center space-x-2">
                <span>Join UTHAAN</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 text-base rounded-full font-medium transition-all duration-300 hover:scale-105 border border-white/20 inline-flex items-center justify-center space-x-2">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>How It Works</span>
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-md shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Hands protecting a young plant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-900/20" />
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-green-400/20 backdrop-blur-md rounded-full border border-white/10 animate-bounce delay-1000"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-400/20 backdrop-blur-md rounded-full border border-white/10 animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 sm:h-20 text-white/5" viewBox="0 0 1200 120" fill="currentColor">
          <path d="M0,60 C400,20 800,100 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
