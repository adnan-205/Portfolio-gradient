import React from 'react';

interface PulsingDotProps {
  color?: 'green' | 'blue' | 'purple';
  size?: 'sm' | 'md' | 'lg';
}

const colorMap = {
  green: 'bg-emerald-500',
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
};

const sizeMap = {
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
};

export const PulsingDot: React.FC<PulsingDotProps> = ({ 
  color = 'green', 
  size = 'md' 
}) => {
  return (
    <span className={`relative flex ${sizeMap[size]}`}>
      <span 
        className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colorMap[color]} opacity-75`}
      />
      <span 
        className={`relative inline-flex rounded-full ${sizeMap[size]} ${colorMap[color]}`}
      />
    </span>
  );
};

export default PulsingDot;
