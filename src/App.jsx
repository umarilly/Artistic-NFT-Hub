

import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

import '../src/styles/fonts.css'
import './App.css'
import NFT from '../src/components/dynamic NFTs/NFT';

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/nft" element={< NFT />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
