import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const Presale = () => {
  const [bnbAmount, setBnbAmount] = useState<string>('0.1');
  const [slippage, setSlippage] = useState<string>('5');
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const totalBnbRaised = 75;
  const softCap = 100;
  const hardCap = 250;
  const progress = (totalBnbRaised / hardCap) * 100;

  const handleBnbInput = (value: string) => {
    const numValue = parseFloat(value);
    if (numValue > 5) {
      setBnbAmount('5');
    } else if (numValue < 0.1) {
      setBnbAmount('0.1');
    } else {
      setBnbAmount(value);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-8 max-w-4xl mx-auto mt-20"
      >
        <h1 className="text-4xl font-bold text-center mb-8">MetaAI Presale</h1>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="glass-panel p-6 text-center">
            <h3 className="text-xl mb-2">Presale Start</h3>
            <div className="text-3xl font-mono">00:00:00:00</div>
          </div>
          <div className="glass-panel p-6 text-center">
            <h3 className="text-xl mb-2">Presale End</h3>
            <div className="text-3xl font-mono">00:00:00:00</div>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h3 className="text-xl mb-4">Contribution Progress</h3>
          <div className="w-full bg-black/30 rounded-full h-4 mb-2">
            <div 
              className="bg-green-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span>0 BNB</span>
            <span className="text-yellow-400">{softCap} BNB Softcap</span>
            <span>{hardCap} BNB Hardcap</span>
          </div>
          <div className="mt-4 text-center">
            <span className="text-2xl font-bold">{totalBnbRaised} BNB</span>
            <span className="text-sm ml-2">raised so far</span>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8">
          <h3 className="text-xl mb-4">Buy MetaAI Tokens</h3>
          
          <div className="mb-4">
            <label className="block text-sm mb-2">BNB Amount (Min 0.1 - Max 5)</label>
            <input
              type="number"
              value={bnbAmount}
              onChange={(e) => handleBnbInput(e.target.value)}
              min="0.1"
              max="5"
              step="0.1"
              className="input-field w-full"
            />
            <div className="text-sm mt-1">≈ $0.00 USD</div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">You will receive</label>
            <input
              type="text"
              value="0 MetaAI"
              disabled
              className="input-field w-full"
            />
            <div className="text-sm mt-1">≈ $0.00 USD</div>
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-2">Slippage (%)</label>
            <input
              type="number"
              value={slippage}
              onChange={(e) => setSlippage(e.target.value)}
              className="input-field w-24"
            />
          </div>

          <button 
            className="btn-primary w-full mb-4"
            onClick={() => setIsWalletConnected(!isWalletConnected)}
          >
            {isWalletConnected ? 'Submit Contribution' : 'Enter Presale'}
          </button>

          <div className="p-4 bg-yellow-500/10 rounded-lg flex items-start space-x-3">
            <AlertCircle className="text-yellow-400 flex-shrink-0 mt-1" />
            <p className="text-sm text-yellow-400">
              Make sure you're connected to the Binance Smart Chain network before participating in the presale.
            </p>
          </div>
        </div>

        <div className="glass-panel p-6">
          <h3 className="text-xl mb-4 text-center">Presale Allocation</h3>
          
          <div className="space-y-4 text-center">
            <div>
              <h4 className="font-semibold mb-2">Softcap (100 BNB)</h4>
              <ul className="space-y-1 text-sm">
                <li>75 BNB to Liquidity Pool</li>
                <li>25 BNB to Marketing Wallet</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Hardcap (250 BNB)</h4>
              <ul className="space-y-1 text-sm">
                <li>200 BNB to Liquidity Pool</li>
                <li>50 BNB to Marketing Wallet</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Presale;