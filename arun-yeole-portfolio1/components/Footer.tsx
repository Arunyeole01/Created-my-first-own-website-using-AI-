
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold tracking-tighter mb-2">
            <span className="text-[#d4af37]">ARUN</span>YEOLE
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            © {new Date().getFullYear()} Cinematic Portfolio. All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest text-white/40 font-bold">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="https://www.instagram.com/01arun.mp4/" target="_blank" className="text-[#d4af37]">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
