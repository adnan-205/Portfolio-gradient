import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  preview?: React.ReactNode;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tech, 
  liveUrl, 
  githubUrl,
  preview,
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
        transition-all duration-400 ease-out
        hover:border-white/20
        hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
      "
    >
      {/* Preview Area */}
      <div className="relative overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        <div className="aspect-[16/10] overflow-hidden">
          {preview ? (
            <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.02]">
              {preview}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950">
              <span className="text-zinc-600 text-sm">Project Preview</span>
            </div>
          )}
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
      </div>
      
      {/* Content Area */}
      <div className="p-6 md:p-8">
        {/* Title */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
        
        {/* Description */}
        <p className="text-zinc-400 text-sm md:text-base mb-5 leading-relaxed">
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span 
              key={index}
              className="
                px-3 py-1 
                text-xs 
                font-medium 
                rounded-full 
                bg-white/5 
                text-zinc-300
                border border-white/10
              "
            >
              {item}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex items-center gap-4">
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-4 py-2
                text-sm font-medium
                rounded-lg
                bg-blue-500/10
                text-blue-400
                border border-blue-500/30
                hover:bg-blue-500/20 hover:border-blue-500/50
                transition-all duration-300
              "
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-4 py-2
                text-sm font-medium
                rounded-lg
                bg-white/5
                text-zinc-300
                border border-white/10
                hover:bg-white/10 hover:text-white
                transition-all duration-300
              "
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
