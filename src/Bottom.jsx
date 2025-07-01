import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

export default function Bottom() {
  const projects = [
    {
      id: 1,
      title: "The Lighthouse",
      category: "2D Animation",
      description: "Adding a new dimension to projects through imaginative design and 2D animations.",
      image: "/api/placeholder/300/250",
      bgColor: "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600",
      size: "large"
    },
    {
      id: 2,
      title: "Snowscape Haven",
      category: "Virtual Identity",
      description: "Crafting a visual identity that imprints the serenity and allure of a winter sanctuary.",
      image: "/api/placeholder/300/250",
      bgColor: "bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800",
      size: "large"
    },
    {
      id: 3,
      title: "Navigating Possibilities",
      category: "Motion Graphics",
      description: "Motion graphics breathe life into the subject, blending dynamism and creativity.",
      image: "/api/placeholder/300/250",
      bgColor: "bg-gradient-to-br from-blue-800 via-purple-800 to-purple-900",
      size: "large"
    },
    {
      id: 4,
      title: "Nocturnal Symphony",
      category: "3D Animation",
      description: "Through 3D artistry, we orchestrate an animated ode to the night sky's tranquil majesty and mystery.",
      image: "/api/placeholder/300/250",
      bgColor: "bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700",
      size: "large"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 md:mb-16">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight mb-4">
              Recent Projects
            </h2>
          </div>
          
          <div className="md:text-right max-w-md">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Step into the world of our most recent projects, a showcase of our unwavering commitment to progressive design
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative cursor-pointer transition-all duration-500 hover:scale-105 hover:z-10"
            >
              {/* Project Card */}
              <div 
                className={`
                  relative w-full h-80 md:h-96 lg:h-[420px] rounded-3xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl
                  ${project.bgColor}
                `}
                style={{
                  borderRadius: index % 2 === 0 ? '24px 24px 24px 60px' : '24px 24px 60px 24px'
                }}
              >
                {/* Background Pattern/Image Area */}
                <div className="absolute inset-0 p-6 md:p-8">
                  {/* Abstract 3D-like elements */}
                  <div className="absolute inset-0">
                    {/* Main central object */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-orange-400 to-orange-600 transition-all duration-300 group-hover:scale-110"
                        style={{
                          borderRadius: '20px 20px 20px 40px',
                          boxShadow: 'inset 0 4px 8px rgba(255,255,255,0.3), 0 8px 16px rgba(0,0,0,0.2)'
                        }}>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-6 left-6 w-4 h-4 bg-white/30 rounded-full"></div>
                    <div className="absolute top-12 right-8 w-6 h-6 bg-orange-400/50 rounded-full"></div>
                    <div className="absolute bottom-12 left-8 w-3 h-3 bg-purple-300/60 rounded-full"></div>
                    <div className="absolute bottom-6 right-6 w-8 h-8 bg-yellow-400/40 rounded-lg rotate-45 transition-all duration-500 group-hover:rotate-90"></div>
                    
                    {/* Curved lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 300 400">
                      <path 
                        d="M50,350 Q150,250 250,350 T450,350" 
                        stroke="white" 
                        strokeWidth="2" 
                        fill="none" 
                      />
                      <path 
                        d="M30,300 Q130,200 230,300 T430,300" 
                        stroke="rgba(255,255,255,0.7)" 
                        strokeWidth="1.5" 
                        fill="none" 
                      />
                    </svg>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                  {/* Top Section */}
                  <div className="flex items-start justify-between">
                    {/* Category Badge */}
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1">
                      <span className="text-white text-xs md:text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Arrow Button */}
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:border-white/60 group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xs">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          {/* Decorative star */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Text content */}
          <p className="text-purple-600 font-medium text-sm md:text-base mb-4 tracking-wider uppercase">
            Open the door to forging your brand's story
          </p>
          
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 leading-tight mb-6 md:mb-8">
            Embark on a Transformative Journey
            <br />
            Shaping 
            <span className="relative inline-block mx-2">
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-lg font-black">
                Your Brand's Destiny
              </span>
            </span>
            Through Our
            <br />
            Dedicated Partnership
          </h3>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12">
            Join with us for progress and be ready for a creative voyage where visions transform into reality 
            through our dedicated partnership, crafting a narrative that resonates.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="group relative bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span className="flex items-center space-x-2">
                <span>Get Started</span>
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 md:mt-24 pt-8 border-t border-gray-200 text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            <p>©️ Studio Collective, Co. 2024 | Wilson</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-700 transition-colors duration-200">Privacy & Cookie Policy</a>
            <a href="#" className="hover:text-gray-700 transition-colors duration-200">Portfolio © 2024</a>
          </div>
        </div>
      </div>
    </div>
  );
}