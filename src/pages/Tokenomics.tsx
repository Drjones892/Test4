import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Percent } from 'lucide-react';

const Tokenomics = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-8 max-w-4xl mx-auto mt-20"
      >
        <h1 className="text-4xl font-bold text-center mb-8">Tokenomics</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-panel p-6">
            <h3 className="text-xl mb-4 flex items-center">
              <Percent className="mr-2" />
              Buy Tax (6%)
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Liquidity Pool</span>
                <span>2%</span>
              </li>
              <li className="flex justify-between">
                <span>Marketing</span>
                <span>2%</span>
              </li>
              <li className="flex justify-between">
                <span>Operations/Development</span>
                <span>1%</span>
              </li>
              <li className="flex justify-between">
                <span>Community AI Fund</span>
                <span>1%</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel p-6">
            <h3 className="text-xl mb-4 flex items-center">
              <Percent className="mr-2" />
              Sell Tax (6%)
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Liquidity Pool</span>
                <span>2%</span>
              </li>
              <li className="flex justify-between">
                <span>Marketing</span>
                <span>2%</span>
              </li>
              <li className="flex justify-between">
                <span>Operations/Development</span>
                <span>1%</span>
              </li>
              <li className="flex justify-between">
                <span>Community AI Fund</span>
                <span>1%</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h3 className="text-xl mb-4">Transaction Limits</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-black/20 rounded-lg">
              <h4 className="font-semibold mb-2">Max Wallet</h4>
              <p>0.5% of total supply</p>
              <p className="text-sm text-green-400/70">Anti-Whale Protection</p>
            </div>
            <div className="p-4 bg-black/20 rounded-lg">
              <h4 className="font-semibold mb-2">Max Transaction</h4>
              <p>0.25% of total supply</p>
              <p className="text-sm text-green-400/70">Anti-Dump Protection</p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6">
          <h3 className="text-xl mb-6 flex items-center justify-center">
            <Lock className="mr-2" />
            Token Security
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-4 col-span-2">
              <h4 className="font-semibold mb-2 text-center">Liquidity Pool</h4>
              <p className="text-center">Locked for 3 months</p>
              <p className="text-sm text-green-400/70 text-center">Will be unlocked for DEX listings and re-locked</p>
            </div>
            <div className="glass-panel p-4">
              <h4 className="font-semibold mb-2 text-center">Marketing Wallet</h4>
              <p className="text-center">Locked for 31 days</p>
            </div>
            <div className="glass-panel p-4">
              <h4 className="font-semibold mb-2 text-center">Development Wallet</h4>
              <p className="text-center">Locked for 31 days</p>
            </div>
            <div className="glass-panel p-4">
              <h4 className="font-semibold mb-2 text-center">Team Wallet</h4>
              <p className="text-center">Locked for 31 days</p>
            </div>
            <div className="glass-panel p-4">
              <h4 className="font-semibold mb-2 text-center">Community AI Investment Wallet</h4>
              <p className="text-center">Locked for 3 months</p>
              <p className="text-sm text-green-400/70 text-center">Will be unlocked to start being used on the AI trading tools with profits to be shared amongst holders</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tokenomics;