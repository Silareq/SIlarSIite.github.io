
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://picsum.photos/seed/gallery1/1200/800',
  'https://picsum.photos/seed/gallery2/1200/800',
  'https://picsum.photos/seed/gallery3/1200/800',
  'https://picsum.photos/seed/gallery4/1200/800',
];

const Gallery: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

  return (
    <section id="gallery" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-display text-center mb-16 text-black dark:text-white">
          Visuals & <span className="text-neon-red">Art</span>
        </h2>
        <div className="max-w-4xl mx-auto relative group">
            <div style={{ backgroundImage: `url(${images[currentIndex]})` }} className="w-full h-[500px] rounded-lg bg-center bg-cover duration-500 shadow-2xl shadow-black/50"></div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={prevSlide}>
                <ChevronLeft size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={nextSlide}>
                <ChevronRight size={30} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
