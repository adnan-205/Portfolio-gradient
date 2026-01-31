import React from 'react';
import { motion } from 'framer-motion';

interface GlowEffectProps {
  className?: string;
  variant?: 'blue' | 'purple' | 'mixed';
  intensity?: 'low' | 'medium' | 'high';
}

const intensityMap = {
  low: 'opacity-30',
  medium: 'opacity-50',
  high: 'opacity-70',
};

const gradientMap = {
  blue: 'from-blue-500/30 via-blue-600/20 to-transparent',
  purple: 'from-purple-500/30 via-purple-600/20 to-transparent',
  mixed: 'from-blue-500/30 via-purple-500/20 to-transparent',
};

export const GlowEffect: React.FC<GlowEffectProps> = ({ 
  className = '', 
  variant = 'mixed',
  intensity = 'medium'
}) => {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div 
        className={`
          w-full h-full 
          bg-gradient-radial ${gradientMap[variant]}
          ${intensityMap[intensity]}
          blur-3xl
          animate-gradient-pulse
        `}
        style={{
          background: `radial-gradient(ellipse at center, 
            ${variant === 'blue' ? 'rgba(59, 130, 246, 0.4)' : variant === 'purple' ? 'rgba(139, 92, 246, 0.4)' : 'rgba(59, 130, 246, 0.3)'} 0%, 
            ${variant === 'blue' ? 'rgba(59, 130, 246, 0.2)' : variant === 'purple' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.15)'} 40%, 
            transparent 70%)`
        }}
      />
    </motion.div>
  );
};

export default GlowEffect;
