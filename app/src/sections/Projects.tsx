import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  features: Feature[];
  tech: string[];
  primaryColor: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'TutorConnected.com.',
    description: 'An online tutoring marketplace that helps learners of all ages connect with qualified tutors for personalized classes and skill-building across many subjects. Designed to be easy to use so students can find help quickly and tutors can reach learners worldwide.',
    features: [
      {
        title: 'Tutor Search & Booking',
        description: 'Browse tutors by subject, specialty, and price, then book sessions directly with instant scheduling and secure payments.',
      },
      {
        title: 'Verified & Rated Tutors',
        description: 'Platform highlights verified, top-rated teachers with reviews so students can choose with confidence.',
      },
      {
        title: 'Global Learning Community',
        description: 'Thousands of students and educators worldwide connect, learn, and grow through personalized one-on-one sessions.',
      },
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
    primaryColor: '#3b82f6',
    liveUrl: 'mailto:adnanfaisalinfo@gmail.com',
    githubUrl: 'https://github.com/adnan-205',
  },
  {
    title: 'Full-Stack E-Commerce Platform.',
    description: 'A complete MERN stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management. Features user authentication, product catalog, shopping cart, and order tracking.',
    features: [
      {
        title: 'Stripe Integration',
        description: 'Secure payment processing with Stripe API for seamless checkout experience.',
      },
      {
        title: 'Real-time Inventory',
        description: 'Live stock updates and automated low-stock alerts for efficient inventory management.',
      },
      {
        title: 'Admin Dashboard',
        description: 'Comprehensive analytics and management tools for orders, products, and customers.',
      },
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
    primaryColor: '#3b82f6',
    liveUrl: 'mailto:adnanfaisalinfo@gmail.com',
    githubUrl: 'https://github.com/adnan-205',
  },
  {
    title: 'Team Task Manager.',
    description: 'A collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features. Includes Kanban boards, sprint planning, and progress tracking.',
    features: [
      {
        title: 'Real-time Socket.io',
        description: 'Live collaboration with instant updates across all team members using WebSocket.',
      },
      {
        title: 'Drag & Drop Interface',
        description: 'Intuitive Kanban board with smooth drag-and-drop functionality for task management.',
      },
      {
        title: 'Sprint Planning',
        description: 'Built-in sprint planning tools with velocity tracking and burndown charts.',
      },
    ],
    tech: ['React', 'Socket.io', 'Express', 'MongoDB', 'Redis'],
    primaryColor: '#10b981',
    liveUrl: 'mailto:adnanfaisalinfo@gmail.com',
    githubUrl: 'https://github.com/adnan-205',
  },
];

const ProjectShowcaseItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full"
    >
      {/* Massive Glow Effect Behind Container */}
      <div
        className="absolute inset-0 blur-[150px] opacity-40 -z-10"
        style={{
          background: `radial-gradient(circle at center, ${project.primaryColor}, transparent 60%)`,
          transform: 'scale(1.3)',
        }}
      />

      {/* Gradient Border Wrapper - Glass Box */}
      <div
        className="p-[1px] rounded-3xl shadow-2xl backdrop-blur-md"
        style={{
          background: `linear-gradient(to bottom, ${project.primaryColor}40, rgba(255, 255, 255, 0.05), transparent)`,
        }}
      >
        {/* Inner Container - GitHub Dark Background */}
        <div className="relative bg-[#0d1117] rounded-3xl p-12 overflow-hidden">
          {/* Split Layout: Text + Image */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {project.title.split('.')[0].split(' ').map((word, idx, arr) => {
                  const isLastPart = idx >= Math.floor(arr.length / 2);
                  return (
                    <span
                      key={idx}
                      className={isLastPart ? 'text-gray-400' : 'text-white'}
                    >
                      {word}{' '}
                    </span>
                  );
                })}
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.tech.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-neutral-300 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>

            {/* Right Column - Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Localized Glow for Image Card */}
              <div
                className="absolute inset-0 blur-[100px] opacity-50"
                style={{
                  background: `radial-gradient(circle at center, ${project.primaryColor}, transparent 70%)`,
                }}
              />

              <div className="relative w-full">
                {/* Image Card Gradient Border */}
                <div
                  className="p-[1px] rounded-2xl"
                  style={{
                    background: `linear-gradient(to right, ${project.primaryColor}, rgba(236, 72, 153, 0.5), transparent)`,
                  }}
                >
                  {/* Glassmorphic Image Card */}
                  <div className="relative bg-neutral-900/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-sm text-gray-400 font-mono">
                          {project.title.split('.')[0].toLowerCase().replace(/\s+/g, '-')}
                        </span>
                        <span className="ml-auto text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                          app
                        </span>
                      </div>

                      <div className="bg-[#161b22] rounded-lg overflow-hidden min-h-[300px] relative">
                        {project.title.includes('TutorConnected') ? (
                          <img 
                            src="/tutor-connected-preview.png" 
                            alt="TutorConnected.com - Online Tutoring Marketplace"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `
                                  <div class="text-center space-y-3 p-6">
                                    <div class="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/30">
                                      <span class="text-3xl">🎓</span>
                                    </div>
                                    <p class="text-gray-400 text-base">TutorConnected.com</p>
                                    <p class="text-gray-500 text-xs max-w-xs">
                                      Online Tutoring Marketplace
                                    </p>
                                  </div>
                                `;
                              }
                            }}
                          />
                        ) : (
                          <div className="text-center space-y-3 p-6">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30">
                              <span className="text-3xl">🚀</span>
                            </div>
                            <p className="text-gray-400 text-base">Project Preview</p>
                            <p className="text-gray-500 text-xs max-w-xs">
                              Interactive demo coming soon
                            </p>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent opacity-30" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 lg:gap-12 pt-8 border-t border-white/5"
          >
            {project.features.map((feature, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-white font-semibold text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-24 max-w-7xl mx-auto"
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
          Case Studies
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-4 tracking-tight">
          Featured Projects
        </h2>
        <p className="text-lg text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
          Real-world applications I've built. Each project represents a unique challenge and solution.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-32">
        {projects.map((project, index) => (
          <ProjectShowcaseItem key={project.title} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mt-32 max-w-7xl mx-auto"
      >
        <motion.a
          href="https://github.com/adnan-205"
          target="https://github.com/adnan-205"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
        >
          View More on GitHub
          <span className="text-lg">→</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Projects;
