import React from 'react';
import { motion } from 'framer-motion';
import { Brain, LineChart, Signal, GraduationCap, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="glass-panel p-6 text-center h-full flex flex-col justify-center"
  >
    <div className="w-16 h-16 mx-auto mb-4 bg-green-600/20 rounded-full flex items-center justify-center">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-green-400/70">Coming Soon</p>
  </motion.div>
);

const ComingSoon = () => {
  const features = [
    { icon: Brain, title: 'AI Market Analysis' },
    { icon: LineChart, title: 'AI Trading Platform' },
    { icon: Signal, title: 'AI Trading Signals' },
    { icon: GraduationCap, title: 'AI Trading Educational Platform' },
    { icon: Users, title: 'AI Community Trading Platform' },
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto mt-20"
      >
        <h1 className="text-4xl font-bold text-center mb-12">AI Tools</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-panel p-8 mt-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Stay Tuned!</h2>
          <p className="text-lg text-green-400/80">
            We're working hard to bring you cutting-edge AI trading tools that will revolutionize your trading experience.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;