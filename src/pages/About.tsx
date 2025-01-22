import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const RoadmapPhase = ({ phase, items }: { phase: string, items: string[] }) => (
  <div className="glass-panel p-6">
    <h3 className="text-xl font-bold mb-4">{phase}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const About = () => {
  const roadmap = [
    {
      phase: 'Phase 1',
      items: [
        'Website development',
        'Smart contract development',
        'Create socials',
        'Pre-sale launch',
      ],
    },
    {
      phase: 'Phase 2',
      items: [
        'Website launch',
        'Build community',
        'Token launch',
        'Marketing campaign',
      ],
    },
    {
      phase: 'Phase 3',
      items: [
        'Increase social awareness',
        'DEX Listings',
        'AI trading tools development',
        'Partnerships',
      ],
    },
    {
      phase: 'Phase 4',
      items: [
        'Initial AI trading tools launch',
        'CEX Listings',
        'AI Education platform development',
        'AI Community investment fund launch',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <h1 className="text-4xl font-bold text-center mb-12">About MetaAI</h1>

        <div className="space-y-8">
          <div className="glass-panel p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              MetaAI aims to revolutionize the cryptocurrency trading landscape by leveraging 
              cutting-edge artificial intelligence technology. We're building a comprehensive 
              ecosystem that empowers traders with advanced AI tools while fostering a 
              strong, knowledge-sharing community.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Roadmap</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {roadmap.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <RoadmapPhase {...phase} />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="glass-panel p-8 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <FileText size={24} />
              <span className="text-xl font-bold">Whitepaper</span>
            </div>
            <button className="btn-primary">
              Download Whitepaper
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;