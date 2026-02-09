
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Film, Music, MonitorPlay, Zap, Users } from 'lucide-react';
import { Service } from '../types';

const services: (Service & { iconComponent: any })[] = [
  {
    id: '1',
    title: 'Cinematography',
    description: 'High-end visual storytelling using professional camera movement and lighting techniques.',
    icon: 'camera',
    iconComponent: Camera,
  },
  {
    id: '2',
    title: 'Video Editing',
    description: 'Precision editing with dynamic pacing, sound design, and color grading for a polished finish.',
    icon: 'film',
    iconComponent: Film,
  },
  {
    id: '3',
    title: 'Music Videos',
    description: 'Creative and artistic visuals tailored to match the rhythm and soul of the music.',
    icon: 'music',
    iconComponent: Music,
  },
  {
    id: '4',
    title: 'Social Media Reels',
    description: 'Viral-worthy short-form content designed for maximum engagement on platforms like IG and TikTok.',
    icon: 'monitor',
    iconComponent: MonitorPlay,
  },
  {
    id: '5',
    title: 'Brand Films',
    description: 'Visual identity creation for businesses that captures their essence and value proposition.',
    icon: 'zap',
    iconComponent: Zap,
  },
  {
    id: '6',
    title: 'Event Films',
    description: 'Candid and cinematic coverage of premium events, capturing the atmosphere and key highlights.',
    icon: 'users',
    iconComponent: Users,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#d4af37] text-xs uppercase tracking-[0.5em] font-bold block mb-4"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            My Services
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-white/5 border border-white/10 hover:border-[#d4af37]/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.iconComponent size={80} />
              </div>
              
              <div className="mb-6 w-12 h-12 flex items-center justify-center bg-[#d4af37]/10 text-[#d4af37] rounded-lg group-hover:bg-[#d4af37] group-hover:text-black transition-colors duration-300">
                <service.iconComponent size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase group-hover:text-[#d4af37] transition-colors">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
