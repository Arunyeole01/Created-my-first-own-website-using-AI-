
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramFeed: React.FC = () => {
  const reels = [
    { id: 'DUWqIEcDNzX', url: 'https://www.instagram.com/reel/DUWqIEcDNzX/' },
    { id: 'DUQqCSWjM7z', url: 'https://www.instagram.com/reel/DUQqCSWjM7z/' },
    { id: 'DTKxZTQDFP4', url: 'https://www.instagram.com/reel/DTKxZTQDFP4/' },
  ];

  return (
    <section className="py-24 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full border-2 border-[#d4af37] p-1 bg-neutral-900 overflow-hidden">
              <img 
                src="arun-portrait.png" 
                alt="Arun Yeole Profile" 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-1">@01arun.mp4</h3>
              <p className="text-xs text-[#d4af37] uppercase tracking-[0.3em] font-semibold">Cinematography & Motion</p>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/01arun.mp4/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#d4af37] text-black text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all"
            >
              <Instagram size={16} />
              Follow for more
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reels.map((reel, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-neutral-900 overflow-hidden cursor-pointer group border border-white/5"
            >
              <iframe
                src={`https://www.instagram.com/reel/${reel.id}/embed`}
                className="w-full h-full border-none pointer-events-none scale-105"
                scrolling="no"
              ></iframe>
              <a 
                href={reel.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <div className="flex flex-col items-center gap-2">
                  <ExternalLink className="text-[#d4af37]" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Open Reel</span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
