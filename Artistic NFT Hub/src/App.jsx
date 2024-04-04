

import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

import '../src/styles/fonts.css'
import './App.css'

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/dashboard" element={< Home />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
