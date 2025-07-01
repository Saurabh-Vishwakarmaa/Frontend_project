import React, { useState } from 'react';
import { Sparkles, Star, ArrowUpRight, Palette, Code, Megaphone, Users, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MidHero() {
  const [activeCard, setActiveCard] = useState(1); // Middle card is active by default

  const services = [
    {
      icon: Palette,
      title: "Motion Graphics",
      subtitle: "Motion Graphics",
      description: "Bring your ideas to life through dynamic visuals and engaging animations.",
      color: "from-purple-400 to-pink-500",
      bgPattern: "bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500",
      isCenter: false
    },
    {
      icon: Code,
      title: "2D/3D Animation", 
      subtitle: "2D/3D Animation",
      description: "Turn imagination into reality with our stunning 2D/3D animations.",
      color: "from-purple-600 to-purple-700",
      bgPattern: "bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800",
      isCenter: true
    },
    {
      icon: Users,
      title: "Visual Identity",
      subtitle: "Visual Identity",
      description: "Shape a unique brand persona through our comprehensive Visual Identity solutions.",
      color: "from-purple-400 to-pink-500",
      bgPattern: "bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500",
      isCenter: false
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 relative overflow-hidden py-8 md:py-16 lg:py-24">
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-60"></div>
      <div className="absolute top-20 right-20 w-8 md:w-12 h-8 md:h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 md:mb-16 lg:mb-20">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
              Our Services
            </h2>
          </div>
          
          <div className="md:text-right max-w-md">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Discover a wide range of opportunities through a comprehensive range of qualified services
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`relative transition-all duration-500 ease-in-out cursor-pointer group ${
                  index === activeCard 
                    ? 'w-full max-w-sm md:max-w-xs lg:max-w-sm h-[400px] md:h-[450px] lg:h-[500px] z-20' 
                    : 'w-full max-w-xs md:max-w-[280px] lg:max-w-xs h-[350px] md:h-[380px] lg:h-[420px] z-10 opacity-90 hover:opacity-100 hover:scale-105 hover:z-30'
                }`}
                onClick={() => setActiveCard(index)}
              >
                {/* Card Container */}
                <div 
                  className={`
                    w-full h-full overflow-hidden transition-all duration-500 relative
                    ${index === activeCard 
                      ? 'shadow-2xl' 
                      : 'shadow-lg hover:shadow-2xl'
                    }
                    ${index === activeCard
                      ? 'bg-gradient-to-br from-purple-600 to-purple-800' 
                      : 'bg-white group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-purple-800'
                    }
                    ${index !== activeCard ? 'border-2 border-gray-200 group-hover:border-transparent' : ''}
                  `}
                  style={{
                    borderRadius: '32px 32px 32px 80px' // More curved bottom-left like reference
                  }}
                >
                  
                  {/* Card Content */}
                  <div className="p-6 md:p-7 lg:p-8 h-full flex flex-col relative z-10">
                    {/* Title and Top Right Arrow Button */}
                    <div className="flex items-start justify-between mb-4 lg:mb-6">
                      <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold transition-colors duration-300 leading-tight ${
                        index === activeCard
                          ? 'text-white' 
                          : 'text-gray-900 group-hover:text-white'
                      }`}>
                        {service.title}
                      </h3>
                      
                      {/* Top Right Arrow Button */}
                      <div className={`
                        w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer
                        ${index === activeCard
                          ? 'bg-white/20 hover:bg-white/30 border-2 border-white/40 hover:border-white/60' 
                          : 'bg-purple-600 hover:bg-purple-700 border-2 border-purple-600 opacity-0 group-hover:opacity-100'
                        }
                      `}>
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 text-white" />
                      </div>
                    </div>
                    
                    {/* Title Underline */}
                    <div className={`w-20 h-0.5 mb-4 lg:mb-6 transition-all duration-300 ${
                      index === activeCard
                        ? 'bg-white/40' 
                        : 'bg-purple-600 group-hover:bg-white/40'
                    }`}></div>
                    
                    {/* Description */}
                    <p className={`text-sm md:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 transition-colors duration-300 ${
                      index === activeCard
                        ? 'text-white/90' 
                        : 'text-gray-600 group-hover:text-white/90'
                    }`}>
                      {service.description}
                    </p>
                    
                    {/* Visual Pattern Area - Much larger like reference */}
                    <div className="flex-1 relative rounded-3xl overflow-hidden">
                      <div className={`
                        w-full h-full transition-all duration-500 relative
                        ${index === activeCard
                          ? 'bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800' 
                          : 'bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-purple-700 group-hover:via-purple-600 group-hover:to-purple-800'
                        }
                      `}>
                        {/* 3D-like abstract elements similar to reference */}
                        <div className="absolute inset-0 p-4">
                          {/* Main central 3D object */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-all duration-300 group-hover:scale-110 ${
                              index === activeCard
                                ? 'bg-gradient-to-br from-orange-400 to-orange-600' 
                                : 'bg-gradient-to-br from-purple-400 to-purple-600 group-hover:from-orange-400 group-hover:to-orange-600'
                            }`}
                            style={{
                              borderRadius: '20px 20px 20px 40px',
                              boxShadow: 'inset 0 4px 8px rgba(255,255,255,0.3), 0 8px 16px rgba(0,0,0,0.2)'
                            }}></div>
                          </div>
                          
                          {/* Floating elements around */}
                          <div className={`absolute top-4 left-4 w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                            index === activeCard
                              ? 'bg-white/40' 
                              : 'bg-purple-400/60 group-hover:bg-white/40'
                          }`}></div>
                          
                          <div className={`absolute top-6 right-6 w-4 h-4 md:w-5 md:h-5 rounded-full transition-all duration-300 ${
                            index === activeCard
                              ? 'bg-orange-400/60' 
                              : 'bg-orange-400/40 group-hover:bg-orange-400/60'
                          }`}></div>
                          
                          <div className={`absolute bottom-8 left-6 w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                            index === activeCard
                              ? 'bg-purple-300/60' 
                              : 'bg-purple-500/40 group-hover:bg-purple-300/60'
                          }`}></div>
                          
                          <div className={`absolute bottom-4 right-4 w-6 h-6 md:w-8 md:h-8 rounded-lg rotate-45 transition-all duration-500 ${
                            index === activeCard
                              ? 'bg-yellow-400/50' 
                              : 'bg-yellow-500/30 group-hover:bg-yellow-400/50 group-hover:rotate-90'
                          }`}></div>
                          
                          {/* Curved lines like in reference */}
                          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
                            <path 
                              d="M20,180 Q60,20 120,100 T180,60" 
                              stroke={index === activeCard ? "white" : "#9333ea"} 
                              strokeWidth="2" 
                              fill="none" 
                              className="group-hover:stroke-white transition-colors duration-300"
                            />
                            <path 
                              d="M10,160 Q50,10 110,80 T170,40" 
                              stroke={index === activeCard ? "rgba(255,255,255,0.5)" : "rgba(147,51,234,0.5)"} 
                              strokeWidth="1.5" 
                              fill="none" 
                              className="group-hover:stroke-white/50 transition-colors duration-300"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Left Arrow Button - Positioned on the curved border */}
                <div className={`
                  absolute bottom-3 left-3 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-500 border border-gray-200 z-30
                  ${index !== activeCard 
                    ? 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 translate-y-4 group-hover:translate-y-0' 
                    : 'opacity-0'
                  }
                `}>
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-purple-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-2 pointer-events-none">
            <button 
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-500 hover:text-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300 pointer-events-auto border border-gray-200 hover:border-gray-300"
              onClick={() => setActiveCard(Math.max(0, activeCard - 1))}
              disabled={activeCard === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-500 hover:text-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300 pointer-events-auto border border-gray-200 hover:border-gray-300"
              onClick={() => setActiveCard(Math.min(services.length - 1, activeCard + 1))}
              disabled={activeCard === services.length - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 ${
                  index === activeCard 
                    ? 'w-8 h-2 bg-purple-600 rounded-full' 
                    : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400 hover:scale-125'
                }`}
                onClick={() => setActiveCard(index)}
              />
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="text-center mt-16 md:mt-20">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-6 md:w-8 h-0.5 bg-gray-400"></div>
            <span className="text-gray-500 font-medium text-xs md:text-sm tracking-wider uppercase">About Astratto</span>
            <div className="w-6 md:w-8 h-0.5 bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}