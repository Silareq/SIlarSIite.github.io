
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <h3 className="font-display text-3xl tracking-widest text-white mb-4">
          NAK<span className="text-neon-red">!</span>S
        </h3>
        <div className="flex justify-center space-x-6 text-sm mb-4">
          <a href="#" className="hover:text-neon-red transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-neon-red transition-colors">Terms of Service</a>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} NAK!S Music. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
