
import React from 'react';

const Landing: React.FC = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center p-4">
      <div className="animate-fade-in">
        <h1 className="font-logo text-8xl sm:text-9xl md:text-[10rem] lg:text-[15rem] text-black dark:text-white tracking-wider animate-pulse-glow">
          NAK<span className="text-neon-red">!</span>S
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-400 font-sans max-w-2xl mx-auto">
          Forging the sound of tomorrow.
        </p>
      </div>
    </section>
  );
};

export default Landing;
