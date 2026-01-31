import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`
    relative group overflow-hidden
    bg-[#0a0a0a]/60 backdrop-blur-xl 
    border border-white/10 hover:border-white/20 
    rounded-3xl p-6 
    transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]
    ${className}
  `}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export default Card;
