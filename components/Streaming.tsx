
import React from 'react';
import { Play } from 'lucide-react';

const StreamingPlatform: React.FC<{ name: string, href: string, icon: string }> = ({ name, href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="group block" style={{ perspective: '1000px' }}>
    <div className="relative bg-gray-100 dark:bg-gray-900/50 rounded-lg p-8 text-center text-black dark:text-white transition-all duration-500 transform-style-3d group-hover:[transform:rotateY(15deg)] group-hover:shadow-2xl group-hover:shadow-neon-red/20 border border-gray-200 dark:border-gray-800">
      <div className="absolute inset-0 bg-neon-red opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
      <img src={icon} alt={`${name} logo`} className="h-16 w-16 mx-auto mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"/>
      <h4 className="text-2xl font-display tracking-wider">{name}</h4>
    </div>
  </a>
);

const Streaming: React.FC = () => {
  return (
    <section id="music" className="py-20 sm:py-32 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-display text-center mb-16 text-black dark:text-white">
          Listen <span className="text-neon-red">Now</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <StreamingPlatform name="Spotify" href="#" icon="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Icon_RGB_Green.png" />
          <StreamingPlatform name="Apple Music" href="#" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png" />
          <StreamingPlatform name="Tidal" href="#" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tidal_logo.svg/1024px-Tidal_logo.svg.png" />
          <StreamingPlatform name="YouTube" href="#" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png" />
        </div>
        <div className="bg-gray-200 dark:bg-gray-900/50 p-6 rounded-lg shadow-lg flex items-center justify-between gap-6 max-w-3xl mx-auto border border-gray-300 dark:border-gray-800">
            <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/latest/100" alt="Latest track album art" className="w-16 h-16 rounded-md"/>
                <div>
                    <h5 className="font-bold text-black dark:text-white">Latest Track: Future Pulse</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-400">NAK!S</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="p-3 bg-neon-red text-white rounded-full hover:bg-red-700 transition-colors">
                    <Play size={24}/>
                </button>
                <div className="w-48 h-1 bg-gray-400 dark:bg-gray-600 rounded-full">
                    <div className="w-1/3 h-full bg-neon-red rounded-full"></div>
                </div>
                <span className="text-xs text-gray-700 dark:text-gray-400">0:30 / 3:45</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Streaming;
