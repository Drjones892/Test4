import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wallet, ExternalLink, GitBranch as BrandTelegram, Twitter } from 'lucide-react';
import MatrixRain from './MatrixRain';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  const getFooterSlogan = () => {
    if (location.pathname === '/') return null;
    
    const slogans: { [key: string]: string } = {
      '/presale': 'The journey to financial freedom starts here!',
      '/swap': 'Winners HODL, brokies get wrekt!',
      '/coming-soon': 'Knowledge is the foundation of success!',
      '/tokenomics': 'Escape the matrix, Create generational wealth!',
      '/about': 'Escape the matrix, Create generational wealth!'
    };
    
    return slogans[location.pathname];
  };

  return (
    <div className="min-h-screen bg-black text-green-400 relative">
      <MatrixRain />
      
      <nav className="glass-panel fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-green-300 transition-colors duration-200">MetaAI</Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/presale" className={`nav-link ${location.pathname === '/presale' ? 'active' : ''}`}>
              Presale
            </Link>
            <Link to="/tokenomics" className={`nav-link ${location.pathname === '/tokenomics' ? 'active' : ''}`}>
              Tokenomics
            </Link>
            <Link to="/swap" className={`nav-link ${location.pathname === '/swap' ? 'active' : ''}`}>
              Swap
            </Link>
            <Link to="/coming-soon" className={`nav-link ${location.pathname === '/coming-soon' ? 'active' : ''}`}>
              AI Tools
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
            <button className="btn-primary flex items-center space-x-2">
              <Wallet size={20} />
              <span>Connect Wallet</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-16">
        {children}
      </main>

      <footer className="glass-panel fixed bottom-0 w-full py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>© 2024 MetaAI. All rights reserved.</p>
          {location.pathname === '/' ? (
            <div className="flex items-center space-x-6">
              <a href="https://t.me/MetaAIToken" target="_blank" rel="noopener noreferrer" className="social-link">
                <BrandTelegram size={24} />
              </a>
              <a href="https://twitter.com/MetaAIToken" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter size={24} />
              </a>
              <a href="https://bscscan.com/token/0x..." target="_blank" rel="noopener noreferrer" className="social-link">
                <ExternalLink size={24} />
              </a>
            </div>
          ) : (
            <div className="typing-effect-wrapper">
              <p className="typing-effect typing-effect-cursor">{getFooterSlogan()}</p>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Layout;