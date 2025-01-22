import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownUp } from 'lucide-react';

const Swap = () => {
  const [isBuying, setIsBuying] = useState(true);
  const [amount, setAmount] = useState('');
  const [slippage, setSlippage] = useState('5');

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-8 max-w-lg mx-auto mt-20"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Swap</h1>
          <button
            onClick={() => setIsBuying(!isBuying)}
            className="btn-primary flex items-center space-x-2"
          >
            <ArrowDownUp size={20} />
            <span>{isBuying ? 'Buy' : 'Sell'}</span>
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-2">
              {isBuying ? 'BNB Amount' : 'MetaAI Amount'}
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input-field w-full"
              placeholder="0.0"
            />
            <div className="text-sm mt-1">≈ $0.00 USD</div>
          </div>

          <div className="relative py-4">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <ArrowDownUp size={20} />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">
              {isBuying ? 'MetaAI Amount' : 'BNB Amount'}
            </label>
            <input
              type="text"
              value="0.0"
              disabled
              className="input-field w-full"
            />
            <div className="text-sm mt-1">≈ $0.00 USD</div>
          </div>

          <div>
            <label className="block text-sm mb-2">Slippage (%)</label>
            <input
              type="number"
              value={slippage}
              onChange={(e) => setSlippage(e.target.value)}
              className="input-field w-24"
            />
          </div>

          <button className="btn-primary w-full">
            Connect Wallet to Swap
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Swap;