import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: Github,
    href: 'https://github.com',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com',
    label: 'Twitter',
  },
];

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = '' 
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.4, 
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1]
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="
            w-10 h-10
            flex items-center justify-center
            rounded-lg
            bg-white/5
            text-zinc-400
            border border-white/10
            hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30
            transition-colors duration-300
          "
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
