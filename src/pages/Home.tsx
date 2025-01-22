import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor(false);
    }, 4000); // Match the typing animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-8 max-w-4xl mx-auto mt-20"
      >
        <h1 className="text-6xl font-bold text-center mb-6">
          MetaAI
        </h1>
        
        <div className="flex justify-center">
          <h2 className={`text-xl text-center mb-8 typing-effect ${showCursor ? 'typing-effect-cursor' : ''}`}>
            ESCAPE THE MATRIX, CREATE GENERATIONAL WEALTH!
          </h2>
        </div>

        <p className="text-lg text-center mb-12">
          MetaAI is revolutionizing the crypto space by combining artificial intelligence 
          with blockchain technology. Our mission is to empower traders with cutting-edge 
          AI tools while building a strong, sustainable community.
        </p>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="glass-panel p-6 text-center">
            <h3 className="text-xl mb-2">Presale Start</h3>
            <div className="text-3xl font-mono">00:00:00:00</div>
          </div>
          <div className="glass-panel p-6 text-center">
            <h3 className="text-xl mb-2">Token Launch</h3>
            <div className="text-3xl font-mono">00:00:00:00</div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="btn-primary">
            Register for Presale
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;