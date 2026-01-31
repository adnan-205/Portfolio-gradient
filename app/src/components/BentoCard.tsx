import React from 'react';
import { motion } from 'framer-motion';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
}

export const BentoCard: React.FC<BentoCardProps> = ({ 
  children, 
  className = '',
  delay = 0,
  colSpan = 1,
  rowSpan = 1
}) => {
  const colSpanClass = {
    1: 'col-span-1',
    2: 'col-span-1 md:col-span-2',
    3: 'col-span-1 md:col-span-3',
    4: 'col-span-1 md:col-span-4',
  };

  const rowSpanClass = {
    1: 'row-span-1',
    2: 'row-span-1 md:row-span-2',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.4 + delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`
        ${colSpanClass[colSpan]}
        ${rowSpanClass[rowSpan]}
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-[#111111]/80
        border border-white/10
        backdrop-blur-sm
        p-5
        transition-all duration-300 ease-out
        hover:border-white/20
        hover:-translate-y-1
        hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]
        ${className}
      `}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

export default BentoCard;
