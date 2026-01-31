import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Users, 
  Globe, 
  Brain,
  GitBranch,
  MessageSquare,
  Clock
} from 'lucide-react';
import { Card } from '../components/Card';

const features = [
  {
    icon: Layers,
    title: 'Full-Cycle Developer',
    description: 'You handle Frontend, Backend, and DB. End-to-end development from concept to deployment.',
    features: [
      'React & Next.js Frontend',
      'Node.js & Express Backend',
      'MongoDB & Database Design',
      'RESTful & GraphQL APIs',
    ],
  },
  {
    icon: Users,
    title: 'Collaboration Ready',
    description: 'Seamless teamwork and project coordination with modern development workflows.',
    features: [
      'Git & GitHub Workflow',
      'Jira & Project Management',
      'Agile & Scrum Practices',
      'Code Reviews & CI/CD',
    ],
  },
  {
    icon: Globe,
    title: 'Remote Native',
    description: 'Crucial for freelancing—work from anywhere with async communication skills.',
    features: [
      'Async Communication',
      'Timezone Flexibility',
      'Self-Managed Workflow',
      'Remote Collaboration',
    ],
  },
  {
    icon: Brain,
    title: 'AI-Enhanced Engineering',
    description: 'Highlight your new AI/ML studies. Integrating intelligence into every solution.',
    features: [
      'LLM Integration',
      'Machine Learning Basics',
      'AI-Powered Solutions',
      'Prompt Engineering',
    ],
  },
];

export const Features: React.FC = () => {
  return (
    <section 
      id="skills"
      className="py-16"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12"
      >
        <span className="
          inline-block 
          px-4 py-1.5 
          mb-4
          text-sm font-medium
          rounded-full
          bg-purple-500/10
          text-purple-400
          border border-purple-500/30
        ">
          My Expertise
        </span>
        <h2 className="
          text-3xl sm:text-4xl md:text-5xl 
          font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 
          mb-4
          tracking-tight
        ">
          What I Bring to the Table
        </h2>
        <p className="
          text-lg 
          text-neutral-400 font-light 
          max-w-2xl mx-auto
          leading-relaxed
        ">
          Skills and expertise that drive results. From full-stack development to AI integration.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <Card className="h-full">
              {/* Icon */}
              <div className="
                w-12 h-12 
                rounded-xl 
                bg-purple-500/10 
                border border-purple-500/30
                flex items-center justify-center
                mb-5
                group-hover:scale-110 
                transition-transform duration-300
              ">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              
              {/* Title */}
              <h3 className="
                text-xl font-semibold 
                font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 
                mb-2
              ">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="
                text-neutral-400 font-light 
                text-sm mb-5 
                leading-relaxed
              ">
                {feature.description}
              </p>
              
              {/* Feature list */}
              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center gap-2 text-sm text-neutral-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills Row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8"
      >
        <Card>
          <h3 className="
            text-xl font-semibold 
            font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 
            mb-6 
            text-center
          ">
            Additional Skills & Tools
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: GitBranch, label: 'Git & GitHub' },
              { icon: Users, label: 'Jira & Trello' },
              { icon: MessageSquare, label: 'Slack & Discord' },
              { icon: Clock, label: 'Time Management' },
            ].map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="
                  flex items-center gap-3
                  p-4
                  rounded-xl
                  bg-white/5
                  border border-white/5
                  hover:bg-white/10 hover:border-white/10
                  transition-all duration-300
                "
              >
                <skill.icon className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-neutral-300">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default Features;
