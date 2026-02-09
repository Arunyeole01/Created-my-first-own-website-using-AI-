
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import { PortfolioItem } from '../types';

const portfolioItems: (PortfolioItem & { reelId: string })[] = [
  {
    id: '1',
    title: 'Visual Narrative I',
    category: 'Cinematic Reel',
    thumbnail: '',
    reelId: 'DUWqIEcDNzX',
  },
  {
    id: '2',
    title: 'Urban Motion',
    category: 'Music Video',
    thumbnail: '',
    reelId: 'DUQqCSWjM7z',
  },
  {
    id: '3',
    title: 'Storytelling Series',
    category: 'Creative Short',
    thumbnail: '',
    reelId: 'DTKxZTQDFP4',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a] px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-[#d4af37] text-xs uppercase tracking-[0.3em] font-bold block mb-2">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-bold">Featured Reels</h2>
          </div>
          <p className="max-w-xs text-xs text-white/50 uppercase tracking-widest leading-relaxed">
            Directly from Instagram. Cinematic storytelling captured in short-form motion.
          </p>
        </div>

        {/* Portfolio Grid - Optimized for Reels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="group relative aspect-[9/16] overflow-hidden bg-neutral-900 border border-white/5 hover:border-[#d4af37]/50 transition-colors duration-500">
                {/* Instagram Embed Iframe */}
                <iframe
                  src={`https://www.instagram.com/reel/${item.reelId}/embed`}
                  className="w-full h-full border-none"
                  allowFullScreen
                  scrolling="no"
                  frameBorder="0"
                ></iframe>
                
                {/* Overlay for aesthetic consistency when not interacting */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black to-transparent pointer-events-none">
                   <div className="flex items-center gap-2 text-[#d4af37] text-[10px] uppercase tracking-widest font-bold">
                      <Play size={10} fill="currentColor" />
                      Insta Reel
                   </div>
                </div>
              </div>

              <div className="px-2">
                <span className="text-[#d4af37] text-[10px] uppercase tracking-widest mb-1 block font-bold">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight">
                  {item.title}
                </h3>
                <a 
                  href={`https://www.instagram.com/reel/${item.reelId}/`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-widest"
                >
                  <ExternalLink size={12} />
                  View Original Post
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://www.instagram.com/01arun.mp4/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#d4af37] group-hover:bg-[#d4af37]/10 transition-all duration-300">
              <ExternalLink className="text-white/50 group-hover:text-[#d4af37]" />
            </div>
            <span className="text-xs uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
              More Work on Instagram
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
