import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Server, 
  FileCode, 
  GraduationCap, 
  Brain,
  ArrowDown,
  Sparkles
} from 'lucide-react';
import { Card } from '../components/Card';
import { PulsingDot } from '../components/PulsingDot';

const techStack = [
  { icon: FileCode, label: 'React', color: 'text-blue-400' },
  { icon: Server, label: 'Node.js', color: 'text-green-400' },
  { icon: Database, label: 'MongoDB', color: 'text-emerald-400' },
  { icon: Code2, label: 'Express', color: 'text-neutral-400' },
];

export const Hero: React.FC = () => {
  return (
    <section 
      id="about"
      className="pt-28 pb-8"
    >
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-center mb-8"
      >
        <div className="
          inline-flex items-center gap-2
          px-4 py-2
          rounded-full
          bg-emerald-500/10
          border border-emerald-500/30
        ">
          <PulsingDot color="green" size="sm" />
          <span className="text-sm font-medium text-emerald-400">
            Available for Freelance
          </span>
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
          font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 
          text-center mb-6 
          tracking-tight
        "
      >
        Building the Future with{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-600">
          MERN
        </span>
        {' & '}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">
          AI
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="
          text-lg sm:text-xl 
          text-neutral-400 font-light 
          text-center max-w-2xl mx-auto mb-12 
          leading-relaxed
        "
      >
        Full-stack developer crafting scalable solutions. 
        CS Undergrad at IUB, passionate about AI/ML.
      </motion.p>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {/* Availability Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="h-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-sm font-medium text-neutral-500">Status</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <PulsingDot color="green" size="md" />
              <span className="text-lg font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                Open for Freelancing
              </span>
            </div>
            <p className="text-sm text-neutral-500 font-light">Ready to start new projects</p>
          </Card>
        </motion.div>

        {/* Tech Stack Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-sm font-medium text-neutral-500">Tech Stack</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {techStack.map((tech) => (
                <div 
                  key={tech.label}
                  className="flex items-center gap-2 text-sm text-neutral-300"
                >
                  <tech.icon className={`w-4 h-4 ${tech.color}`} />
                  {tech.label}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm font-medium text-neutral-500">Education</span>
            </div>
            <p className="text-lg font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-1">
              CS Undergrad
            </p>
            <p className="text-sm text-neutral-400 font-light">@ IUB</p>
            <p className="text-xs text-neutral-500 font-light mt-2">
              Independent University, Bangladesh
            </p>
          </Card>
        </motion.div>

        {/* AI Focus Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <Brain className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-sm font-medium text-neutral-500">Focus</span>
            </div>
            <p className="text-lg font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-1">
              Learning AI/ML
            </p>
            <p className="text-sm text-neutral-400 font-light">
              LLMs • Neural Networks
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                In Progress
              </span>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="
            inline-flex items-center gap-2
            px-8 py-4
            text-base font-semibold
            rounded-xl
            bg-white/10
            text-white
            border border-white/10
            hover:bg-white/15 hover:border-white/20
            transition-all duration-200
          "
        >
          View My Work
          <ArrowDown className="w-4 h-4" />
        </motion.a>
        
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="
            inline-flex items-center gap-2
            px-8 py-4
            text-base font-semibold
            rounded-xl
            bg-transparent
            text-white
            border border-white/10
            hover:bg-white/5 hover:border-white/20
            transition-all duration-200
          "
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
