
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const NAKISLogo: React.FC = () => (
  <a href="#home" className="font-logo text-4xl tracking-wider text-black dark:text-white">
    NAK<span className="text-neon-red">!</span>S
  </a>
);


const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#bio', label: 'Biography' },
    { href: '#music', label: 'Music' },
    { href: '#social', label: 'Links' },
    { href: '#gallery', label: 'Visuals' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center p-4 sm:p-6">
          <NAKISLogo />
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-black dark:text-gray-300 hover:text-neon-red dark:hover:text-neon-red focus:outline-none focus:ring-2 focus:ring-neon-red focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-bg transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
             <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full text-black dark:text-gray-300 hover:text-neon-red dark:hover:text-neon-red focus:outline-none focus:ring-2 focus:ring-neon-red focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-bg transition-all"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
       <div className={`fixed inset-0 bg-dark-bg/95 backdrop-blur-lg z-40 flex items-center justify-center transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col items-center text-center space-y-8">
            {navLinks.map((link, i) => (
                <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-4xl sm:text-5xl text-gray-300 hover:text-neon-red transition-all duration-300 opacity-0"
                style={{ animation: isMenuOpen ? `fadeInUp 0.5s ease forwards ${i * 0.1}s` : 'none' }}
                >
                {link.label}
                </a>
            ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;