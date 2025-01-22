import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Presale from './pages/Presale';
import Tokenomics from './pages/Tokenomics';
import Swap from './pages/Swap';
import ComingSoon from './pages/ComingSoon';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presale" element={<Presale />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;