
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white text-black">
      {/* Decorative Text */}
      <div className="absolute -top-10 -right-20 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[20vw] font-bold leading-none tracking-tighter">VISION</h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-neutral-100 overflow-hidden shadow-2xl">
              <img
                src="https://visualsbyarun.edgeone.app/Screenshot%202026-02-09%20092514.png"
                alt="Arun Yeole"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#d4af37] z-[-1]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-neutral-400 text-xs uppercase tracking-[0.3em] font-bold mb-4 block">The Artist</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Crafting Stories <br /> Through Motion</h2>
            
            <div className="space-y-6 text-neutral-600 leading-relaxed font-light">
              <p className="text-lg">
                I am Arun Yeole, a dedicated videographer and cinematographer with a deep-rooted passion for the visual arts. My work is more than just recording images; it's about capturing human emotion and the subtle nuances of a story.
              </p>
              <p>
                Specializing in music videos, brand films, and cinematic social content, I focus on creating visuals that resonate and leave a lasting impression. Every frame I capture is a deliberate choice in lighting, movement, and composition.
              </p>
              <p>
                Whether it's a high-energy music video or a minimalist brand piece, I bring a unique cinematic eye and a commitment to storytelling that transforms everyday moments into extraordinary experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-neutral-200">
              <div>
                <h4 className="text-2xl font-bold mb-1">50+</h4>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-1">3+</h4>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
