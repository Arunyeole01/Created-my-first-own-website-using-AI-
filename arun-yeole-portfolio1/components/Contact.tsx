
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#d4af37] text-xs uppercase tracking-[0.3em] font-bold block mb-4">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">LET'S CREATE SOMETHING <span className="text-white/20">ICONIC.</span></h2>
            
            <p className="text-white/50 text-lg mb-12 max-w-md leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to new creative collaborations.
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="https://wa.me/7276768751"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-black transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">WhatsApp</p>
                  <p className="text-xl font-bold group-hover:text-[#d4af37] transition-colors">+91 7276768751</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/01arun.mp4/"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-[#d4af37]/10 text-[#d4af37] rounded-full flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Instagram</p>
                  <p className="text-xl font-bold group-hover:text-[#d4af37] transition-colors">@01arun.mp4</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/5 p-8 md:p-12 backdrop-blur-sm"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 block">Your Name</label>
                  <input
                    type="text"
                    placeholder="Arun Yeole"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#d4af37] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="arun@example.com"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#d4af37] outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 block">Project Brief</label>
                <textarea
                  placeholder="Tell me about your vision..."
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#d4af37] outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-5 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white transition-all duration-300"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
