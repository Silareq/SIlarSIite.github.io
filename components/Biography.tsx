
import React from 'react';

const Biography: React.FC = () => {
  const bioText = "NAK!S is a music producer who has journeyed from simple bedroom beats to the global stage. His style is a fusion of powerful EDM drops with experimental textures, and his club gigs prove his music works best live. Today, he collaborates internationally, with a mission to create music that not only sounds good but tells a story – a story of energy, emotion, and the future.";
  
  return (
    <section id="bio" className="py-20 sm:py-32 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl font-display text-black dark:text-white mb-6">
            The <span className="text-neon-red">Story</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            {bioText}
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-96">
            <img src="https://picsum.photos/seed/bio1/400/400" alt="NAK!S in the studio" className="rounded-lg object-cover w-full h-full col-span-1 row-span-1 shadow-lg transform hover:scale-105 transition-transform duration-300"/>
            <img src="https://picsum.photos/seed/bio2/800/800" alt="NAK!S performing live" className="rounded-lg object-cover w-full h-full col-span-1 row-span-2 shadow-lg transform hover:scale-105 transition-transform duration-300"/>
            <img src="https://picsum.photos/seed/bio3/400/400" alt="Close-up of DJ equipment" className="rounded-lg object-cover w-full h-full col-span-1 row-span-1 shadow-lg transform hover:scale-105 transition-transform duration-300"/>
        </div>
      </div>
    </section>
  );
};

export default Biography;
