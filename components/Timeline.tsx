
import React, { useState } from 'react';
import { timelineData } from '../constants';

const Timeline: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fillPercentage = hoveredIndex !== null 
    ? (hoveredIndex / (timelineData.length - 1)) * 100 
    : 0;

  return (
    <section id="timeline" className="py-20 sm:py-32 container mx-auto px-4 overflow-hidden">
      <h2 className="text-5xl font-display text-center mb-24 text-black dark:text-white">
        Creative <span className="text-neon-red">Timeline</span>
      </h2>
      
      <div 
        className="relative flex justify-between items-start pt-16" // Increased padding for date clearance
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {/* Base timeline bar */}
        <div className="absolute top-16 left-0 right-0 h-1 bg-gray-300 dark:bg-gray-700" />
        {/* Animated fill bar */}
        <div 
          className="absolute top-16 left-0 h-1 bg-neon-red transition-all duration-500 ease-in-out"
          style={{ width: `${fillPercentage}%` }}
        />

        {timelineData.map((event, index) => (
          <div
            key={event.date}
            className="relative flex-1 flex flex-col items-center group cursor-pointer px-2"
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <div className={`absolute -top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${hoveredIndex === index ? 'bg-neon-red border-neon-red scale-125' : 'bg-white dark:bg-dark-bg border-gray-400 dark:border-gray-500'}`} />
            
            <div className={`text-center transition-all duration-500 ${hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm opacity-50 scale-95' : 'blur-none opacity-100 scale-100'}`}>
              <h3 className={`font-display text-xl sm:text-2xl tracking-wider transition-all duration-300 mt-8 ${hoveredIndex === index ? 'text-neon-red scale-110' : 'text-black dark:text-white'}`}>
                {event.date}
              </h3>
              
              <div className={`mt-6 overflow-hidden transition-all duration-500 ease-in-out ${hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 bg-gray-100/50 dark:bg-gray-900/50 rounded-lg backdrop-blur-sm min-w-[200px] border border-gray-200 dark:border-gray-800">
                   <h4 className="text-xl font-bold font-display text-neon-red tracking-wider">{event.title}</h4>
                   <p className="mt-2 text-sm text-gray-800 dark:text-gray-300">{event.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
