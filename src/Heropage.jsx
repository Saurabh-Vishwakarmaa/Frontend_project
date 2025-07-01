import React, { useState, useEffect } from 'react';
import { Sparkles, Star, ArrowUpRight, Menu, X } from 'lucide-react';

export default function AstrattoLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden flex flex-col">
      {/* Animated background elements - Full coverage */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Floating orbs with mouse parallax */}
        <div 
          className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"
          style={{
            top: '10%',
            left: '5%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"
          style={{
            top: '50%',
            right: '5%',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
          }}
        ></div>
        <div 
          className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: '15%',
            left: '5%',
            transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px)`
          }}
        ></div>
        
        {/* Additional background coverage */}
        <div 
          className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-88 lg:h-88 xl:w-96 xl:h-96 bg-gradient-to-r from-indigo-300/15 to-cyan-300/15 rounded-full blur-3xl animate-pulse"
          style={{
            top: '20%',
            right: '30%',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
        <div 
          className="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-76 lg:h-76 xl:w-88 xl:h-88 bg-gradient-to-r from-rose-300/15 to-pink-300/15 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: '30%',
            right: '15%',
            transform: `translate(${mousePosition.x * -0.012}px, ${mousePosition.y * -0.012}px)`
          }}
        ></div>
      </div>

      {/* Navigation - Full width container */}
      <nav className="relative z-50 w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 flex-shrink-0">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium text-sm xl:text-base transition-colors duration-300 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium text-sm xl:text-base transition-colors duration-300 relative group">
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium text-sm xl:text-base transition-colors duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 p-1"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
          
          {/* Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-white transition-transform duration-300 group-hover:rotate-12" fill="currentColor" />
            </div>
            <span className="text-lg sm:text-xl md:text-xl lg:text-2xl font-black text-gray-900 tracking-tight">Astratto</span>
          </div>
          
          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium text-sm xl:text-base transition-colors duration-300 relative group">
              Careers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-full font-medium text-sm xl:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <span>Contact Us</span>
              <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full width */}
        <div className={`lg:hidden absolute top-full left-0 right-0 w-full bg-white/95 backdrop-blur-lg shadow-xl transition-all duration-300 z-50 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="px-4 py-6 space-y-4 w-full max-w-7xl mx-auto">
            <a href="#" className="block text-gray-700 hover:text-purple-600 font-medium text-base sm:text-lg py-2 transition-colors duration-300">Services</a>
            <a href="#" className="block text-gray-700 hover:text-purple-600 font-medium text-base sm:text-lg py-2 transition-colors duration-300">Work</a>
            <a href="#" className="block text-gray-700 hover:text-purple-600 font-medium text-base sm:text-lg py-2 transition-colors duration-300">About</a>
            <a href="#" className="block text-gray-700 hover:text-purple-600 font-medium text-base sm:text-lg py-2 transition-colors duration-300">Careers</a>
            <button className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium text-base transition-all duration-300 mt-4">
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Section - Full width */}
      <div className="flex-1 relative w-full min-h-0">
        {/* Address Pills */}
        <div className="absolute top-2 sm:top-4 md:top-6 lg:top-8 right-3 sm:right-4 md:right-6 lg:right-8 space-y-2 sm:space-y-3 z-40">
          <div className="bg-white/90 backdrop-blur-sm border border-purple-200 text-purple-600 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Via della Creatività, 23
          </div>
          <div className="bg-white/90 backdrop-blur-sm border border-purple-200 text-purple-600 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            20121 Milano
          </div>
        </div>

        {/* Enhanced Left Illustration */}
        <div className="hidden md:block absolute left-2 lg:left-4 xl:left-8 top-1/2 transform -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 z-30">
          {/* Animated sparkle */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 lg:top-12 lg:left-12">
            <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Sparkles className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 text-white" />
            </div>
          </div>
          
          {/* Enhanced Hot Air Balloon */}
          <div 
            className="absolute top-8 left-8 md:top-12 md:left-12 lg:top-16 lg:left-16 transition-transform duration-1000"
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
          >
            <div className="relative w-16 h-20 md:w-20 md:h-24 lg:w-28 lg:h-36 xl:w-32 xl:h-40">
              {/* Balloon with gradient */}
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 rounded-full shadow-2xl relative overflow-hidden">
                {/* Highlight */}
                <div className="absolute top-1 left-1 md:top-1.5 md:left-1.5 lg:top-2 lg:left-2 w-12 h-3 md:w-16 md:h-4 lg:w-24 lg:h-5 xl:w-28 xl:h-6 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-60"></div>
                {/* Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>
              
              {/* Enhanced Basket */}
              <div className="absolute -bottom-1 md:-bottom-1.5 lg:-bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-2 md:w-5 md:h-2.5 lg:w-7 lg:h-4 xl:w-8 xl:h-5 bg-gradient-to-br from-yellow-700 to-orange-700 rounded-b-lg shadow-lg"></div>
              
              {/* Ropes with physics */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-2 md:h-3 lg:h-4 xl:h-5 bg-yellow-800"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -ml-1 md:-ml-1 lg:-ml-1.5 xl:-ml-2 w-0.5 h-1.5 md:h-2 lg:h-3 xl:h-4 bg-yellow-800"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ml-1 md:ml-1 lg:ml-1.5 xl:ml-2 w-0.5 h-1.5 md:h-2 lg:h-3 xl:h-4 bg-yellow-800"></div>
            </div>
          </div>
          
          {/* Enhanced Planet with rings */}
          <div 
            className="absolute top-10 right-4 md:top-14 md:right-6 lg:top-20 lg:right-8"
            style={{
              transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px)`
            }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-full relative shadow-2xl">
              {/* Animated rings */}
              <div className="absolute -top-1 -left-2 md:-top-1.5 md:-left-2.5 lg:-top-2 lg:-left-3 xl:-left-4 w-16 md:w-20 lg:w-26 xl:w-32 h-0.5 md:h-0.5 lg:h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full opacity-70 transform -rotate-12 animate-pulse"></div>
              <div className="absolute -top-0.5 -left-1 md:-top-0.5 md:-left-1.5 lg:-top-1 lg:-left-2 xl:-left-3 w-14 md:w-18 lg:w-24 xl:w-30 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent rounded-full opacity-50 transform -rotate-12 animate-pulse"></div>
              {/* Planet surface details */}
              <div className="absolute top-1 left-1 md:top-1.5 md:left-1.5 lg:top-2 lg:left-2 xl:top-3 xl:left-3 w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-4 xl:h-4 bg-purple-400/40 rounded-full"></div>
              <div className="absolute bottom-1 right-0.5 md:bottom-1.5 md:right-0.5 lg:bottom-3 lg:right-1 xl:bottom-4 xl:right-2 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-6 xl:h-6 bg-indigo-400/30 rounded-full"></div>
            </div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute bottom-8 left-4 md:bottom-12 md:left-6 lg:bottom-16 lg:left-8 w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-12 left-8 md:bottom-16 md:left-12 lg:bottom-24 lg:left-16 xl:left-20 w-1.5 h-1.5 md:w-2 md:h-2 lg:w-2 lg:h-2 bg-pink-400 rounded-full animate-bounce"></div>
          
          {/* Enhanced Wavy Line */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 300 60" className="w-full h-6 md:h-8 lg:h-10 xl:h-12">
              <path d="M0,30 Q75,10 150,30 T300,30" stroke="url(#leftGradient)" strokeWidth="2" fill="none" opacity="0.8" />
              <defs>
                <linearGradient id="leftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Enhanced Right Illustration */}
        <div className="hidden md:block absolute right-2 lg:right-4 xl:right-8 top-1/2 transform -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 z-30">
          {/* Animated sparkle */}
          <div className="absolute top-2 right-6 md:top-3 md:right-8 lg:top-4 lg:right-10 xl:right-12">
            <div className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Sparkles className="w-1.5 h-1.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 text-white" />
            </div>
          </div>
          
          {/* Enhanced Geometric House */}
          <div 
            className="absolute top-4 right-6 md:top-6 md:right-8 lg:top-8 lg:right-12 xl:right-16 transition-transform duration-1000"
            style={{
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px) rotate(-6deg)`
            }}
          >
            <div className="relative w-20 h-32 md:w-24 md:h-36 lg:w-32 lg:h-48 xl:w-40 xl:h-60 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl shadow-2xl overflow-hidden">
              {/* Enhanced Windows with glow */}
              <div className="absolute top-2 left-2 md:top-2.5 md:left-2.5 lg:top-3 lg:left-3 xl:top-4 xl:left-4 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-6 xl:h-6 bg-white rounded md:rounded-lg lg:rounded-lg xl:rounded-xl shadow-lg animate-pulse"></div>
              <div className="absolute top-2 right-2 md:top-2.5 md:right-2.5 lg:top-3 lg:right-3 xl:top-4 xl:right-4 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-6 xl:h-6 bg-white rounded md:rounded-lg lg:rounded-lg xl:rounded-xl shadow-lg animate-pulse"></div>
              <div className="absolute top-4 left-2 md:top-6 md:left-2.5 lg:top-8 lg:left-3 xl:top-12 xl:left-4 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-6 xl:h-6 bg-white rounded md:rounded-lg lg:rounded-lg xl:rounded-xl shadow-lg animate-pulse"></div>
              <div className="absolute top-4 right-2 md:top-6 md:right-2.5 lg:top-8 lg:right-3 xl:top-12 xl:right-4 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-6 xl:h-6 bg-white rounded md:rounded-lg lg:rounded-lg xl:rounded-xl shadow-lg animate-pulse"></div>
              
              {/* Orange stripe with gradient */}
              <div className="absolute top-8 md:top-10 lg:top-14 xl:top-20 left-0 w-full h-4 md:h-6 lg:h-8 xl:h-12 bg-gradient-to-r from-orange-300 via-red-300 to-orange-300 opacity-80"></div>
              
              {/* Enhanced Purple bottom section */}
              <div className="absolute bottom-0 left-0 w-full h-12 md:h-16 lg:h-20 xl:h-28 bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-800 rounded-b-xl md:rounded-b-2xl lg:rounded-b-2xl xl:rounded-b-3xl">
                {/* Animated horizontal lines */}
                <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 left-1 md:left-1.5 lg:left-2 xl:left-3 w-18 md:w-20 lg:w-28 xl:w-32 h-0.5 md:h-0.5 lg:h-1 xl:h-1.5 bg-purple-400/60 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 xl:bottom-16 left-1 md:left-1.5 lg:left-2 xl:left-3 w-16 md:w-18 lg:w-24 xl:w-28 h-0.5 lg:h-0.5 xl:h-1 bg-purple-400/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-12 left-1 md:left-1.5 lg:left-2 xl:left-3 w-14 md:w-16 lg:w-20 xl:w-24 h-0.5 lg:h-0.5 xl:h-1 bg-purple-400/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-3 md:bottom-4 lg:bottom-6 xl:bottom-8 left-1 md:left-1.5 lg:left-2 xl:left-3 w-12 md:w-14 lg:w-16 xl:w-20 h-0.5 lg:h-0.5 xl:h-1 bg-purple-400/25 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1.5 md:bottom-2 lg:bottom-3 xl:bottom-4 left-1 md:left-1.5 lg:left-2 xl:left-3 w-8 md:w-10 lg:w-12 xl:w-16 h-0.5 lg:h-0.5 xl:h-1 bg-purple-400/20 rounded-full animate-pulse"></div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
          
          {/* Enhanced floating circles */}
          <div 
            className="absolute top-10 right-32 md:top-14 md:right-40 lg:top-20 lg:right-48 xl:top-24 xl:right-56 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-12 xl:h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-xl animate-bounce"
            style={{
              transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * 0.012}px)`
            }}
          ></div>
          <div 
            className="absolute bottom-16 right-36 md:bottom-20 md:right-44 lg:bottom-28 lg:right-52 xl:bottom-32 xl:right-64 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-lg animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
            }}
          ></div>
          
          {/* Enhanced Wavy Line */}
          <div className="absolute bottom-0 right-0 w-full">
            <svg viewBox="0 0 300 60" className="w-full h-6 md:h-8 lg:h-10 xl:h-12">
              <path d="M0,30 Q75,50 150,30 T300,30" stroke="url(#rightGradient)" strokeWidth="2" fill="none" opacity="0.8" />
              <defs>
                <linearGradient id="rightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Main Content - Full width centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full px-3 sm:px-4 md:px-6 lg:px-8 z-40">
          {/* Enhanced Subtitle */}
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 md:mb-8">
            <div className="w-4 sm:w-6 md:w-8 h-0.5 bg-purple-400"></div>
            <p className="text-purple-600 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wider uppercase text-center">
              Igniting the Spark of Inspiration
            </p>
            <div className="w-4 sm:w-6 md:w-8 h-0.5 bg-purple-400"></div>
          </div>
          
          {/* Enhanced Main Heading - Full width */}
          <div className="text-center space-y-1 sm:space-y-2 md:space-y-4 lg:space-y-6 mb-6 sm:mb-8 md:mb-12 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-gray-900 leading-none tracking-tight">
              Unleash Your
            </h1>
            
            <div className="flex flex-col sm:flex-col lg:flex-row items-center justify-center space-y-1 sm:space-y-2 lg:space-y-0 lg:space-x-3 xl:space-x-4 2xl:space-x-6">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-gray-900 leading-none tracking-tight">
                Brand
              </h1>
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse hover:animate-spin transition-all duration-300">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 text-white" fill="currentColor" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-gray-900 leading-none tracking-tight">
                with Our
              </h1>
            </div>
            
            <div className="flex flex-col sm:flex-col lg:flex-row items-center justify-center space-y-1 sm:space-y-2 lg:space-y-0 lg:space-x-3 xl:space-x-4 2xl:space-x-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 2xl:px-12 2xl:py-6 rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black italic tracking-tight">
                  Mágico
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-gray-900 leading-none tracking-tight">
                Design
              </h1>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <button className="group flex items-center space-x-2 sm:space-x-3 md:space-x-4 bg-white/90 backdrop-blur-sm border-2 border-orange-200 hover:border-orange-300 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 tracking-tight">
              Create Magic
            </span>
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group_hover:rotate-12">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white transition-transform duration-300" fill="currentColor" />
            </div>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-40">
          <div className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-0.5 sm:w-1 h-1 sm:h-2 md:h-3 bg-purple-400 rounded-full mt-1 sm:mt-1.5 md:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}