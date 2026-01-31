import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-[#111111]/80
        border border-white/10
        backdrop-blur-sm
        p-6 md:p-8
        transition-all duration-300 ease-out
        hover:border-white/20
        hover:-translate-y-1
        hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
      "
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="
          w-12 h-12 
          rounded-xl 
          bg-gradient-to-br from-blue-500/20 to-purple-500/20 
          border border-blue-500/30
          flex items-center justify-center
          mb-5
          group-hover:scale-110 group-hover:border-blue-500/50
          transition-all duration-300
        ">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
          {description}
        </p>
        
        {/* Feature list */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li 
              key={index}
              className="flex items-center gap-2 text-sm text-zinc-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
