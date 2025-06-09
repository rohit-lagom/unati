"use client";

import { ArrowRight, CheckCircle, Play, Network } from "lucide-react";

const features = [
  "End-to-end transparency through blockchain",
  "AI-powered insights for better farm decisions",
  "Seamless integration across the agri-value chain",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden ">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-green-800/30 to-emerald-900/40" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-br from-green-900/60 via-green-800/50 to-emerald-900/60" />
      </div>

      {/* Tagline */}
      <div className="z-10 w-full flex justify-center pt-28 sm:pt-24 md:pt-28">
        <div className="flex items-center px-4 py-2 bg-green-500/10 backdrop-blur-md rounded-full border border-green-400/30">
          <Network className="w-4 h-4 text-green-300 mr-2" />
          <span className="text-sm font-semibold text-green-100">
            Blockchain-Powered Agriculture
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="text-center lg:text-left md:flex md:flex-col md:items-center lg:block">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white leading-tight my-6 md:text-center lg:text-left max-w-xl">
              Smart Agriculture,{" "}
              <span className="text-green-400">Secured by Blockchain</span>
            </h1>

            <p className="text-[clamp(1rem,2.2vw,1.25rem)] text-white/85 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              UTHAAN is building a smart, tech-driven agricultural ecosystem
              connecting farmers, innovators, and stakeholders through
              blockchain, data, and inclusive solutions.
            </p>

            {/* Feature Points */}
            <div className="space-y-4 mb-10">
              {features.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 justify-center lg:justify-start"
                >
                  <CheckCircle className="text-green-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-white/90 text-[clamp(0.95rem,1.1vw,1.125rem)]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pb-6 justify-center lg:justify-start text-center lg:text-left">
              {/* Join Button */}
              <button className="group bg-green-500/90 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center space-x-2 backdrop-blur-sm w-full sm:w-auto">
                <span>Join UTHAAN</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* How it works */}
              <button className="group bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 border border-white/20 flex items-center justify-center space-x-2 backdrop-blur-sm w-full sm:w-auto">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>How It Works</span>
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-md shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Hands protecting a young plant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-900/20" />
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-green-400/20 backdrop-blur-md rounded-full border border-white/10 animate-bounce delay-1000" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-400/20 backdrop-blur-md rounded-full border border-white/10 animate-bounce delay-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 sm:h-32 md:h-40 text-white/10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
