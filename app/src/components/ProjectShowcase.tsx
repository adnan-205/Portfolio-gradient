import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface ProjectShowcaseProps {
  title: string;
  description: string;
  features: Feature[];
  imageSrc?: string;
  codeSnippet?: string;
  primaryColor?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ProjectShowcase({
  title,
  description,
  features,
  imageSrc,
  codeSnippet,
  primaryColor = '#a855f7', // Purple default
  ctaText = 'Explore Project',
  ctaLink = '#',
}: ProjectShowcaseProps) {
  return (
    <section className="relative w-full bg-[#0d1117] py-24 px-6 overflow-hidden">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        {/* 2-Column Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {title.split(' ').map((word, index) => {
                // Make the last part gray
                const words = title.split(' ');
                const isLastPart = index >= Math.floor(words.length / 2);
                return (
                  <span
                    key={index}
                    className={isLastPart ? 'text-gray-400' : 'text-white'}
                  >
                    {word}{' '}
                  </span>
                );
              })}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              {description}
            </p>

            {/* CTA Link */}
            <a
              href={ctaLink}
              className="inline-flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] transition-colors group text-lg font-medium"
            >
              {ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column - Glassmorphic Card with Glow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Massive Purple Glow Background */}
            <div
              className="absolute inset-0 blur-[120px] opacity-60"
              style={{
                background: `radial-gradient(circle at center, ${primaryColor}, transparent 70%)`,
                transform: 'scale(1.5)',
              }}
            />

            {/* Glassmorphic Card */}
            <div className="relative w-full max-w-2xl">
              <div className="relative bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                {/* Code Editor Window OR Image */}
                {codeSnippet ? (
                  <div className="space-y-4">
                    {/* Window Header */}
                    <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-sm text-gray-400 font-mono">
                        github-advanced-security
                      </span>
                      <span className="ml-auto text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                        bot
                      </span>
                    </div>

                    {/* Code Content */}
                    <div className="bg-[#161b22] rounded-lg p-6 font-mono text-sm overflow-x-auto">
                      <div className="space-y-3 text-gray-300">
                        <p className="text-gray-400 leading-relaxed">
                          The vulnerability in the code is due to the fact that user-provided input is directly used in
                          HTTP response without any sanitization. This can lead to a cross-site scripting (XSS)
                          attack if the user input contains malicious scripts.
                        </p>
                        <p className="text-gray-400 leading-relaxed mt-4">
                          To fix this, we need to sanitize the input before using it in the HTTP response. One way
                          to do this is to use the <span className="text-blue-400">escape-html library</span>, which can escape any special characters.
                        </p>

                        {/* Code Badge */}
                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
                          <div className="w-5 h-5 bg-purple-500/20 rounded flex items-center justify-center">
                            <span className="text-purple-400 text-xs">⚡</span>
                          </div>
                          <span className="text-sm text-gray-300 font-semibold">Copilot Autofix</span>
                          <span className="ml-auto text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                            AI
                          </span>
                        </div>

                        {/* Code Snippet */}
                        <div className="mt-4 space-y-1">
                          <div className="flex gap-4">
                            <span className="text-gray-600 select-none">14</span>
                            <code className="text-gray-300">
                              <span className="text-blue-400">app</span>.<span className="text-yellow-400">get</span>
                              <span className="text-gray-400">(</span>
                              <span className="text-green-400">'/'</span>
                              <span className="text-gray-400">,</span>
                              <span className="text-gray-400">(</span>
                              <span className="text-blue-300">req</span>
                              <span className="text-gray-400">,</span>
                              <span className="text-blue-300"> res</span>
                              <span className="text-gray-400">) =&gt; {'{'}</span>
                            </code>
                          </div>
                          <div className="flex gap-4 bg-red-500/10">
                            <span className="text-gray-600 select-none">15</span>
                            <code className="text-gray-300">
                              <span className="text-blue-300">  res</span>.<span className="text-yellow-400">send</span>
                              <span className="text-gray-400">(</span>
                              <span className="text-green-400">'Hello ${'{'}</span>
                              <span className="text-blue-300">req</span>.<span className="text-blue-300">query</span>.<span className="text-blue-300">name</span>
                              <span className="text-green-400">{'}'}'</span>
                              <span className="text-gray-400">);</span>
                            </code>
                          </div>
                          <div className="flex gap-4 bg-green-500/10">
                            <span className="text-gray-600 select-none">16</span>
                            <code className="text-gray-300">
                              <span className="text-blue-300">  res</span>.<span className="text-yellow-400">send</span>
                              <span className="text-gray-400">(</span>
                              <span className="text-green-400">'Hello ${'{'}</span>
                              <span className="text-yellow-400">escape</span>
                              <span className="text-gray-400">(</span>
                              <span className="text-blue-300">req</span>.<span className="text-blue-300">query</span>.<span className="text-blue-300">name</span>
                              <span className="text-gray-400">)</span>
                              <span className="text-green-400">{'}'}'</span>
                              <span className="text-gray-400">);</span>
                            </code>
                          </div>
                          <div className="flex gap-4">
                            <span className="text-gray-600 select-none">17</span>
                            <code className="text-gray-300">
                              <span className="text-gray-400">{'});'}</span>
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : imageSrc ? (
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src={imageSrc}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Project Preview</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom 3-Column Grid - Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-white font-semibold text-lg">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
