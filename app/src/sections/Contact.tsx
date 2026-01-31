import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Copy, Check, Github, Linkedin, Twitter } from 'lucide-react';
import { Card } from '../components/Card';

const socialLinks = [
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

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="
        inline-flex items-center gap-2
        px-4 py-2
        text-sm font-medium
        rounded-lg
        bg-white/5
        text-neutral-300
        border border-white/10
        hover:bg-white/10 hover:text-white hover:border-white/20
        transition-all duration-300
      "
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-400">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          Copy Email
        </>
      )}
    </button>
  );
};

export const Contact: React.FC = () => {
  const email = 'adnanfaisalinfo@gmail.com';

  return (
    <footer 
      id="contact"
      className="py-16 border-t border-white/5"
    >
      {/* Main CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12"
      >
        <h2 className="
          text-4xl sm:text-5xl md:text-6xl 
          font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 
          mb-6
          tracking-tight
        ">
          Let's Build Something{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-600">
            Amazing
          </span>
        </h2>
        <p className="
          text-lg md:text-xl 
          text-neutral-400 font-light 
          max-w-2xl mx-auto mb-10
          leading-relaxed
        ">
          Open for freelance opportunities and collaborations. 
          Let's turn your ideas into reality.
        </p>

        {/* Contact Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href={`mailto:${email}`}
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
            <Send className="w-5 h-5" />
            Send Email
          </motion.a>
          
          <CopyButton text={email} />
        </div>
      </motion.div>

      {/* Contact Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
      >
        <Card>
          <div className="flex items-center gap-4">
            <div className="
              w-12 h-12 
              rounded-lg 
              bg-purple-500/10 
              border border-purple-500/30
              flex items-center justify-center
            ">
              <Mail className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-neutral-500 mb-0.5">Email</p>
              <p className="text-white font-medium">{email}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-4">
            <div className="
              w-12 h-12 
              rounded-lg 
              bg-blue-500/10 
              border border-blue-500/30
              flex items-center justify-center
            ">
              <MapPin className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-neutral-500 mb-0.5">Location</p>
              <p className="text-white font-medium">Dhaka, Bangladesh</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center mb-12"
      >
        <p className="text-neutral-500 text-sm mb-4">Connect with me</p>
        <div className="flex items-center gap-3">
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
                text-neutral-400
                border border-white/10
                hover:bg-purple-500/10 hover:text-purple-400 hover:border-purple-500/30
                transition-colors duration-300
              "
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="
          pt-8
          border-t border-white/5
          flex flex-col sm:flex-row
          items-center
          justify-between
          gap-4
        "
      >
        <p className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} - Built with{' '}
          <span className="text-purple-400">React</span> &{' '}
          <span className="text-blue-400">TailwindCSS</span>
        </p>
        
        <div className="flex items-center gap-6">
          <a 
            href="#about" 
            className="text-neutral-500 hover:text-white text-sm transition-colors"
          >
            About
          </a>
          <a 
            href="#skills" 
            className="text-neutral-500 hover:text-white text-sm transition-colors"
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="text-neutral-500 hover:text-white text-sm transition-colors"
          >
            Projects
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Contact;
