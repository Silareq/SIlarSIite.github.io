
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import Timeline from './components/Timeline';
import Biography from './components/Biography';
import SocialHub from './components/SocialHub';
import Streaming from './components/Streaming';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    } else {
      setTheme('dark');
    }
  }, []);
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  const toggleTheme = () => {
    setIsTransitioning(true);
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <div 
      className={`text-gray-300 dark:text-gray-300 bg-white dark:bg-dark-bg font-sans selection:bg-neon-red selection:text-white ${isTransitioning ? 'animate-glitch' : ''}`}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="fixed inset-0 pointer-events-none transition-opacity duration-300 gradient-bg"
        style={{
          '--x': `${mousePosition.x}px`,
          '--y': `${mousePosition.y}px`,
        } as React.CSSProperties}
      />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Landing />
        <Timeline />
        <Biography />
        <SocialHub />
        <Streaming />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
