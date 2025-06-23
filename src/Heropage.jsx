import React, { useState, useEffect } from 'react';
import { Sparkles, Star, ArrowUpRight } from 'lucide-react';

export default function AstrattoLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
    <div className="w-[100vw] h-[100vh] bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Background Grid Pattern */}
      <div className="relative inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Sparkles */}
        <div className="absolute top-24 left-16">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
        </div>
        <div className="absolute top-16 left-24">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        </div>
        <div className="absolute top-32 left-8">
          <div className="w-1 h-1 bg-pink-400 rounded-full animate-bounce opacity-50"></div>
        </div>
        
        {/* Top Right Area */}
        <div className="absolute top-20 right-1/3">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
        </div>
        
        {/* Bottom Area */}
        <div className="absolute bottom-32 left-1/4">
          <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce opacity-40"></div>
        </div>
        <div className="absolute bottom-24 right-1/3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping opacity-35"></div>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative min-h-screen">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between px-16 py-6 relative z-50">
          <div className="flex items-center space-x-12">
<div className="h-21 w-97 font-sans text-md flex justify-around items-center px-13 text-black " >
           <a  href = "#">Services</a>
           <a href = "#">Work</a>
           <a href = "#" className="text-black">About</a>
           

        </div>
          </div>
          
          {/* Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-3 group cursor-pointer">
            <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              <Star className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Astratto</span>
          </div>
          
          <div className="flex items-center space-x-8">
 <div className="h-21 w-97  flex justify-around items-center px-13">
    <a href="#">Careers</a>
    <a href="#">Contact Us</a>
        </div>
          </div>
        </nav>

        {/* Address Pills */}
        <div className="absolute top-28 right-16 space-y-3 z-40">
          <div className="bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg">
            Via della Creatività, 23
          </div>
          <div className="bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg">
            20121 Milano
          </div>
        </div>

        {/* Left Illustration Area */}
        <div className="absolute left-12 top-36 w-80 h-96 z-30">
          {/* Top Left Sparkles */}
          <div className="absolute -top-2 left-8">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <div className="absolute top-4 -left-2">
            <Sparkles className="w-5 h-5 text-pink-400 animate-bounce" />
          </div>
          
          {/* Hot Air Balloon */}
          <div className="absolute top-16 left-16">
            {/* Balloon Envelope */}
            <div className="relative w-32 h-40">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 rounded-full shadow-xl"></div>
              <div className="absolute top-3 left-3 w-26 h-6 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-50"></div>
              <div className="absolute top-8 left-6 w-20 h-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-30"></div>
              
              {/* Basket */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gradient-to-br from-yellow-700 to-orange-700 rounded-b-md shadow-md"></div>
              
              {/* Ropes */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-yellow-800"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -ml-3 w-0.5 h-5 bg-yellow-800"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ml-3 w-0.5 h-5 bg-yellow-800"></div>
            </div>
          </div>
          
          {/* Planet */}
          <div className="absolute top-24 left-52">
            <div className="w-28 h-28 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-full shadow-xl relative">
              {/* Rings */}
              <div className="absolute -top-3 -left-6 w-40 h-1.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full opacity-70 transform -rotate-12"></div>
              <div className="absolute -top-1 -left-4 w-36 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent rounded-full opacity-50 transform -rotate-12"></div>
              
              {/* Surface details */}
              <div className="absolute top-2 left-2 w-5 h-5 bg-purple-400 rounded-full opacity-40"></div>
              <div className="absolute top-6 right-3 w-3 h-3 bg-indigo-400 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-400 rounded-full opacity-25"></div>
            </div>
          </div>
          
          {/* Small decorative elements */}
          <div className="absolute top-64 left-20 w-5 h-5 bg-gradient-to-br from-pink-400 to-red-400 rounded-full shadow-md animate-bounce"></div>
          <div className="absolute top-72 left-44 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-md animate-pulse"></div>
        </div>

        {/* Right Illustration Area */}
        <div className="absolute right-12 top-52 w-80 h-96 z-30">
          {/* Geometric House */}
          <div className="absolute top-0 right-0">
            <div className="relative w-48 h-72 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-3xl shadow-2xl transform -rotate-6">
              {/* Windows - Top Row */}
              <div className="absolute top-5 left-5 w-8 h-8 bg-white rounded-lg opacity-80 shadow-sm"></div>
              <div className="absolute top-5 right-5 w-8 h-8 bg-white rounded-lg opacity-80 shadow-sm"></div>
              
              {/* Windows - Second Row */}
              <div className="absolute top-16 left-5 w-8 h-8 bg-white rounded-lg opacity-80 shadow-sm"></div>
              <div className="absolute top-16 right-5 w-8 h-8 bg-white rounded-lg opacity-80 shadow-sm"></div>
              
              {/* Orange sections with pattern */}
              <div className="absolute top-28 left-0 w-full h-16 bg-gradient-to-r from-orange-300 to-red-300 opacity-50"></div>
              
              {/* Purple bottom section */}
              <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-b-3xl">
                {/* Horizontal lines pattern */}
                <div className="absolute bottom-20 left-4 w-40 h-2 bg-purple-500 opacity-60 rounded-full"></div>
                <div className="absolute bottom-16 left-4 w-32 h-1.5 bg-purple-400 opacity-40 rounded-full"></div>
                <div className="absolute bottom-12 left-4 w-28 h-1.5 bg-purple-400 opacity-30 rounded-full"></div>
                <div className="absolute bottom-8 left-4 w-24 h-1 bg-purple-400 opacity-25 rounded-full"></div>
                <div className="absolute bottom-5 left-4 w-20 h-1 bg-purple-400 opacity-20 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Floating elements around house */}
          <div className="absolute top-32 right-64 w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg animate-bounce"></div>
          <div className="absolute top-68 right-72 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-md animate-pulse"></div>
          <div className="absolute top-12 right-56 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full shadow-md animate-ping"></div>
          
          {/* Sparkle */}
          <div className="absolute top-20 right-48">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" style={{ animationDuration: '4s' }} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-screen pt-8 pb-20 relative z-40">
          {/* Subtitle */}
          <p className="text-gray-600 text-lg font-medium mb-12 tracking-wide">Igniting the Spark of Inspiration</p>
          
          {/* Main Heading */}
          <div className="text-center space-y-4 mb-16">
            {/* First Line */}
            <h1 className="text-8xl font-black text-gray-900 leading-none tracking-tight">
              Unleash Your
            </h1>
            
            {/* Second Line with Icon */}
            <div className="flex items-center justify-center space-x-6">
              <h1 className="text-8xl font-black text-gray-900 leading-none tracking-tight">Brand</h1>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group">
                <Sparkles className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" fill="currentColor" />
              </div>
              <h1 className="text-8xl font-black text-gray-900 leading-none tracking-tight">with Our</h1>
            </div>
            
            {/* Third Line with Highlighted Word */}
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span className="text-6xl font-black italic">Mágico</span>
              </div>
              <h1 className="text-8xl font-black text-gray-900 leading-none tracking-tight">Design</h1>
            </div>
          </div>

          {/* CTA Button */}
          <button className="group flex items-center space-x-4 bg-white border-2 border-orange-200 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-purple-300">
            <span className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">Create Magic</span>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" fill="currentColor" />
            </div>
          </button>
        </div>

        {/* Wavy Line at Bottom */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <svg viewBox="0 0 1200 120" className="w-full h-24">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                <stop offset="33%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="66%" stopColor="#ec4899" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path d="M0,60 C300,20 600,100 900,40 C1050,10 1150,80 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)" />
          </svg>
        </div>
      </div>
    </div>
    </>
  );
}