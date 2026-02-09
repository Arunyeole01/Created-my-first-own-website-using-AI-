
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 overflow-hidden"
        >
          <h1 className="text-2xl md:text-4xl font-bold tracking-[0.3em] text-[#d4af37] flex items-center gap-4">
            <span>A</span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '40px' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[2px] bg-[#d4af37]"
            />
            <span>Y</span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xs uppercase tracking-[0.5em] text-white"
        >
          Arun Yeole
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
