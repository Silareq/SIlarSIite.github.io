
import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; label: string }> = ({ href, children, label }) => (
    <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="group relative">
        <div className="absolute -inset-0.5 bg-neon-red rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <button className="relative p-4 bg-gray-100 dark:bg-black rounded-full text-black dark:text-white group-hover:text-neon-red transition-colors duration-300">
            {children}
        </button>
    </a>
);

const SocialHub: React.FC = () => {
  return (
    <section id="social" className="py-20 sm:py-24 text-center">
      <div className="container mx-auto px-4">
        <h3 className="font-display text-4xl text-black dark:text-white tracking-widest mb-8">
          Follow the <span className="text-neon-red">Vibe</span>
        </h3>
        <div className="flex justify-center space-x-6">
          <SocialIcon href="#" label="Instagram"><Instagram size={28}/></SocialIcon>
          <SocialIcon href="#" label="Twitter"><Twitter size={28}/></SocialIcon>
          <SocialIcon href="#" label="Facebook"><Facebook size={28}/></SocialIcon>
        </div>
      </div>
    </section>
  );
};

export default SocialHub;