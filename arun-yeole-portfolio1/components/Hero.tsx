
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Simulation */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/40/1920/1080?grayscale"
          alt="Cinematic Background"
          className="w-full h-full object-cover scale-110 blur-[2px] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ letterSpacing: '0.2em', opacity: 0 }}
            animate={{ letterSpacing: '0.5em', opacity: 0.7 }}
            transition={{ delay: 0.3, duration: 1.5 }}
            className="text-xs md:text-sm uppercase mb-6 tracking-[0.5em] text-[#d4af37]"
          >
            Visual Storyteller
          </motion.p>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter leading-tight">
            ARUN <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>YEOLE</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-[#d4af37] hover:text-white transition-all duration-300 flex items-center gap-3"
            >
              View My Work
              <Play size={14} className="fill-current" />
            </motion.a>
            
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 border-l border-white/20 pl-8 hidden md:block">
              Cinematographer <br /> & Videographer
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-white" />
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
